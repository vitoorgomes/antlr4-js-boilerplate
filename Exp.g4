grammar Exp;

/*---------------- PARSER INTERNALS ----------------*/

@parser::header
{
    const symbol_table = [];
    const used_symbols = [];
}

@parser::members
{
}

/*---------------- LEXER RULES ----------------*/
COMMENT: '#' ~('\n')*         -> skip ;
SPACE : (' '|'\t'|'\r'|'\n')+ -> skip ;

PLUS  : '+' ;
ATTRIB: '=' ;
MINUS : '-' ;
TIMES : '*' ;
OVER  : '/' ;
REM   : '%' ;
OP_PAR: '(' ;
CL_PAR: ')' ;

PRINT : 'print' ;

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
        console.log(".limit stack 10");
        console.log(`.limit locals ${symbol_table.length}`);
        console.log(".end method");
        symbol_table.filter(v => !used_symbols.includes(v)).map(u => {
            let message;  
            if (u !== 'args') { 
                message = `\n; # error: '${u}' is defined but never used`
            }
            return message;
        }).map(el => el ? console.log(el) : '');
        console.log("\n; symbol_table: ", symbol_table);
    };

statement: st_print | st_attrib ;

st_print: PRINT OP_PAR
    {
        console.log("    getstatic java/lang/System/out Ljava/io/PrintStream;");
    }
    expression CL_PAR
    {
        console.log("    invokevirtual java/io/PrintStream/println(I)V\n");
    };

st_attrib: NAME ATTRIB expression 
    {
        const variable = $NAME.text;
        if (!symbol_table.find(symbol => symbol === variable)) symbol_table.push(variable)

        const index = symbol_table.findIndex(symbol => symbol === variable);
        console.log(`    istore ${index} \n`);
    };

expression:
    term ( op = ( PLUS | MINUS ) term
    {
        if ($op.type === ExpParser.PLUS) console.log("    iadd")
        if ($op.type === ExpParser.MINUS) console.log("    isub")
    }
    )* ;

term:
    factor ( op = ( TIMES | OVER | REM ) factor
    {
        if ($op.type == ExpParser.TIMES) console.log("    imul")
        if ($op.type == ExpParser.OVER) console.log("    idiv")
        if ($op.type == ExpParser.REM) console.log("    irem")
    }
    )* ;

factor:
    NUMBER
    {
        console.log("    ldc " + $NUMBER.text);
    }
    | OP_PAR expression CL_PAR 
    | NAME 
    {
        const variable = $NAME.text;
        const index = symbol_table.findIndex(symbol => symbol === variable);
        used_symbols.push(variable);
        console.log(`    iload ${index}`);
    };

