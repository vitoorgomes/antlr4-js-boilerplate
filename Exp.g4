grammar Exp;

/*---------------- PARSER INTERNALS ----------------*/

@parser::header
{
    const symbol_table = [];
    const used_symbols = [];
    let current_stack = 0;
    let max_stack = 0;
    let if_stack = 0;

    function stackCounter(bytecode, value) {
      current_stack += value;
      if (current_stack > max_stack) {
          max_stack = current_stack;
      }
      console.log(`    ${bytecode}`)
    }

    function checkUnsuedVars() {
      return symbol_table.filter(v => !used_symbols.includes(v))
        .map(u => {
            let message;
            if (u !== 'args') {
              console.error(`ERROR: '${u}' is defined but never used`);
              process.exit(1);
            }
            return message;
        });
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
OP_CUR: '{' ;
CL_CUR: '}' ;

EQ    : '==' ;
NE    : '!=' ;
GT    : '>'  ;
GE    : '>=' ;
LT    : '<'  ;
LE    : '<=' ;

PRINT   : 'print'   ;
READ_INT: 'read_int';
IF      : 'if'      ;

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
        checkUnsuedVars();
    };

statement: st_print | st_attrib | st_if ;

st_if: IF bytecode = comparison
    {
        let if_local = if_stack;
        if_stack += 1;
        const { bytecode } = this._ctx.bytecode;
        stackCounter(`${bytecode} NOT_IF_${if_local}`, -2);
    } OP_CUR ( statement )+ CL_CUR
    {
        console.log(`NOT_IF_${if_local}:`)
    };

comparison returns [bytecode]: expression op = ( EQ | NE | LT | LE | GT | GE ) expression
    {
        if ($op.type === ExpParser.EQ) $bytecode = 'if_icmpne';
        if ($op.type === ExpParser.NE) $bytecode = 'if_icmpeq';
        if ($op.type === ExpParser.LT) $bytecode = 'if_icmpge';
        if ($op.type === ExpParser.GT) $bytecode = 'if_icmple';
        if ($op.type === ExpParser.LE) $bytecode = 'if_icmpgt';
        if ($op.type === ExpParser.GE) $bytecode = 'if_icmplt';
    };

st_print: PRINT OP_PAR
    {
        stackCounter("getstatic java/lang/System/out Ljava/io/PrintStream;", 1);
    }
        expression
    {
        stackCounter("invokevirtual java/io/PrintStream/print(I)V\n", -2);
    }
    (
        COMMA
    {
        stackCounter("getstatic java/lang/System/out Ljava/io/PrintStream;", 1);
    }
        expression
    {
        stackCounter("invokevirtual java/io/PrintStream/print(I)V\n", -2);
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
        stackCounter(`istore ${index}`, -1);
    };

expression: term ( op = ( PLUS | MINUS ) term
    {
        if ($op.type === ExpParser.PLUS) stackCounter("iadd", -1)
        if ($op.type === ExpParser.MINUS) stackCounter("isub", -1)
    }
    )* ;

term: factor ( op = ( TIMES | OVER | REM ) factor
    {
        if ($op.type == ExpParser.TIMES) stackCounter("imul", -1)
        if ($op.type == ExpParser.OVER) stackCounter("idiv", -1)
        if ($op.type == ExpParser.REM) stackCounter("irem", -1)
    }
    )* ;

factor: NUMBER
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

