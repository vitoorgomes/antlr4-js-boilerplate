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

PLUS  : '+' ;
TIMES : '*' ;
OP_PAR: '(' ;
CL_PAR: ')' ;

NUMBER: '0'..'9'+ ;

SPACE : (' '|'\t'|'\r'|'\n')+ -> skip ;

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
        console.log("    getstatic java/lang/System/out Ljava/io/PrintStream;");
    }
    expression
    {
        console.log("    invokevirtual java/io/PrintStream/println(I)V\n");
        console.log("    return");
        console.log(".limit stack 10");
        console.log(".end method");
        // console.log("\n; symbol_table: " + symbol_table);
    }
    ;

expression:
    term ( op = PLUS expression
    {
        console.log("    iadd");
    }
    )? ;

term:
    factor ( op = TIMES term
    {
        console.log("    imul");
    }
    )? ;

factor:
    NUMBER
    {
        console.log("    ldc " + $NUMBER.text);
        // symbol_table.push($NUMBER.text);
    }
    | OP_PAR expression CL_PAR ;

