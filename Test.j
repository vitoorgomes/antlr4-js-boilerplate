.source Test.src
.class  public Test
.super  java/lang/Object

.method public <init>()V
    aload_0
    invokenonvirtual java/lang/Object/<init>()V
    return
.end method

.method public static main([Ljava/lang/String;)V

    getstatic java/lang/System/out Ljava/io/PrintStream;
    ldc 4
    ldc 7
    ldc 8
    ldc 2
    ldc 6
    imul
    ldc 3
    idiv
    isub
    imul
    iadd
    invokevirtual java/io/PrintStream/print(I)V

    getstatic java/lang/System/out Ljava/io/PrintStream;
    invokevirtual java/io/PrintStream/println()V

    return
.limit stack 6
.limit locals 1
.end method

; symbol_table:  [ 'args' ]
