grammar Exp;

/*---------------- PARSER INTERNALS ----------------*/

@parser::header
{
    // var symbol_table = Array();
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

PRINT : 'print' ;

NUMBER: '0'..'9'+ ;

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
    }
    ( statement )+
    {
        console.log("    return");
        console.log(".limit stack 10");
        console.log(".end method");
        // console.log("\n; symbol_table: " + symbol_table);
    }
    ;

statement: st_print ;

st_print: PRINT OP_PAR
    {
        console.log("    getstatic java/lang/System/out Ljava/io/PrintStream;");
    }
    expression CL_PAR
    {
        console.log("    invokevirtual java/io/PrintStream/println(I)V\n");
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
        // symbol_table.push($NUMBER.text);
    }
    | OP_PAR expression CL_PAR ;

