grammar Exp;

/*---------------- PARSER INTERNALS ----------------*/

@parser::header
{
    // import java.util.ArrayList;
}

@parser::members
{
    // private static ArrayList<String> symbol_table;
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
/*        System.out.println(".source Test.src");
        System.out.println(".class  public Test");
        System.out.println(".super  java/lang/Object\n");
        System.out.println(".method public <init>()V");
        System.out.println("    aload_0");
        System.out.println("    invokenonvirtual java/lang/Object/<init>()V");
        System.out.println("    return");
        System.out.println(".end method\n"); */
    }
    main ;

main:
    {
/*        System.out.println(".method public static main([Ljava/lang/String;)V\n");
        System.out.println("    getstatic java/lang/System/out Ljava/io/PrintStream;");
        // symbol_table = new ArrayList<String>(); */
    }
    expression
    {
/*        System.out.println("    invokevirtual java/io/PrintStream/println(I)V\n");
        System.out.println("    return");
        System.out.println(".limit stack 10");
        System.out.println(".end method"); */
        // System.out.println("\n; symbol_table: " + symbol_table);
    }
    ;

expression:
    term ( op = PLUS expression
    {
//        System.out.println("    iadd");
    }
    )? ;

term:
    factor ( op = TIMES term
    {
//        System.out.println("    imul");
    }
    )? ;

factor:
    NUMBER
    {
//        System.out.println("    ldc " + $NUMBER.text);
        // symbol_table.add($NUMBER.text);
    }
    | OP_PAR expression CL_PAR ;

