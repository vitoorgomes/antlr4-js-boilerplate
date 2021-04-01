grammar Exp;

/*---------------- PARSER INTERNALS ----------------*/

@parser::header
{
    const symbol_table = [];
    const used_symbols = [];
    let current_stack = 0;
    let max_stack = 0;

    function stackCounter(bytecode, value) {
        current_stack += value;
        if (current_stack > max_stack) {
            max_stack = current_stack;
        }
        console.log(`    ${bytecode}`)
    }
}

@parser::members
{
}

/*---------------- LEXER RULES ----------------*/
COMMENT: '#' ~('\n')*         -> skip ;
SPACE : (' '|'\t'|'\r'|'\n')+ -> skip ;

PLUS  : '+' ;
MINUS : '-' ;
TIMES : '*' ;
OVER  : '/' ;
REM   : '%' ;
OP_PAR: '(' ;
CL_PAR: ')' ;
ATTRIB: '=' ;
COMMA : ',' ;

PRINT   : 'print'   ;
READ_INT: 'read_int';

NUMBER: '0'..'9'+ ;
NAME  : 'a'..'z'+ ;

/*---------------- PARSER RULES ----------------*/

program:
    {
        console.log(".source Test.src");
        console.log(".class  public Test");
        console.log(".super  java/lang/Object\n");
        console.log(".method public <init>()V");
        console.log("    aload_0");
        console.log("    invokenonvirtual java/lang/Object/<init>()V");
        console.log("    return");
        console.log(".end method\n");
    }
    main ;

main:
    {
        console.log(".method public static main([Ljava/lang/String;)V\n");
        symbol_table.push('args');
    }
    ( statement )+
    {
        console.log("    return");
        console.log(`.limit stack ${max_stack}`);
        console.log(`.limit locals ${symbol_table.length}`);
        console.log(".end method");
        console.log("\n; symbol_table: ", symbol_table);
        symbol_table.filter(v => !used_symbols.includes(v))
        .map(u => {
            let message;
            if (u !== 'args') {
              console.error(`ERROR: '${u}' is defined but never used`);
              process.exit(1);
            }
            return message;
        });
    };

statement: st_print | st_attrib ;

st_print: PRINT OP_PAR
    {
        stackCounter("getstatic java/lang/System/out Ljava/io/PrintStream;", 1);
    }
        expression
    {
        // console.log("    invokevirtual java/io/PrintStream/print(I)V\n");
        stackCounter("invokevirtual java/io/PrintStream/print(I)V\n", 2);
    }
    (
        COMMA
    {
        stackCounter("getstatic java/lang/System/out Ljava/io/PrintStream;", 1);
    }
        expression
    {
        // console.log("    invokevirtual java/io/PrintStream/print(I)V\n");
        stackCounter("invokevirtual java/io/PrintStream/print(I)V\n", 2);
    }
    )*
        CL_PAR
    {
        stackCounter("getstatic java/lang/System/out Ljava/io/PrintStream;", 1);
        stackCounter("invokevirtual java/io/PrintStream/println()V\n", -1);
    };

st_attrib: NAME ATTRIB expression
    {
        const variable = $NAME.text;
        if (!symbol_table.find(symbol => symbol === variable)) symbol_table.push(variable)

        const index = symbol_table.findIndex(symbol => symbol === variable);
        stackCounter(`istore ${index} \n`, -1);
    };

expression:
    term ( op = ( PLUS | MINUS ) term
    {
        if ($op.type === ExpParser.PLUS) stackCounter("iadd", -1)
        if ($op.type === ExpParser.MINUS) stackCounter("isub", -1)
    }
    )* ;

term:
    factor ( op = ( TIMES | OVER | REM ) factor
    {
        if ($op.type == ExpParser.TIMES) stackCounter("imul", -1)
        if ($op.type == ExpParser.OVER) stackCounter("idiv", -1)
        if ($op.type == ExpParser.REM) stackCounter("irem", -1)
    }
    )* ;

factor:
    NUMBER
    {
        stackCounter(`ldc ${$NUMBER.text}`, 1);
    }
    | OP_PAR expression CL_PAR
    | NAME
    {
        const variable = $NAME.text;
        const index = symbol_table.findIndex(symbol => symbol === variable);
        if (index === -1) {
            console.error(`ERROR: Variable '${variable}' is not defined`);
            process.exit(1);
        } else {
            used_symbols.push(variable);
            stackCounter(`iload ${index}`, 1);
        }
    }
    | READ_INT OP_PAR CL_PAR
    {
        stackCounter("invokestatic Runtime/readInt()I", 1);
    };

