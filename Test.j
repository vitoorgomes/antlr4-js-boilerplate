.source Test.src
.class  public Test
.super  java/lang/Object

.method public <init>()V
    aload_0
    invokenonvirtual java/lang/Object/<init>()V
    return
.end method

.method public static main([Ljava/lang/String;)V

    ldc 1
    istore 1
    ldc 2
    istore 2
    ldc 3
    istore 3
    iload 1
    iload 2
    if_icmpne NOT_IF_0
    iload 2
    iload 3
    if_icmpeq NOT_IF_1
    getstatic java/lang/System/out Ljava/io/PrintStream;
    iload 2
    invokevirtual java/io/PrintStream/print(I)V

    getstatic java/lang/System/out Ljava/io/PrintStream;
    invokevirtual java/io/PrintStream/println()V

    goto END_ELSE_1
NOT_IF_1:
    getstatic java/lang/System/out Ljava/io/PrintStream;
    iload 3
    invokevirtual java/io/PrintStream/print(I)V

    getstatic java/lang/System/out Ljava/io/PrintStream;
    invokevirtual java/io/PrintStream/println()V

END_ELSE_1:
    goto END_ELSE_0
NOT_IF_0:
    iload 1
    iload 2
    if_icmple NOT_IF_2
    getstatic java/lang/System/out Ljava/io/PrintStream;
    iload 2
    invokevirtual java/io/PrintStream/print(I)V

    getstatic java/lang/System/out Ljava/io/PrintStream;
    invokevirtual java/io/PrintStream/println()V

    goto END_ELSE_2
NOT_IF_2:
    iload 1
    iload 2
    if_icmpge NOT_IF_3
    iload 2
    iload 3
    if_icmple NOT_IF_4
    getstatic java/lang/System/out Ljava/io/PrintStream;
    iload 3
    invokevirtual java/io/PrintStream/print(I)V

    getstatic java/lang/System/out Ljava/io/PrintStream;
    invokevirtual java/io/PrintStream/println()V

    goto END_ELSE_4
NOT_IF_4:
    getstatic java/lang/System/out Ljava/io/PrintStream;
    iload 1
    invokevirtual java/io/PrintStream/print(I)V

    getstatic java/lang/System/out Ljava/io/PrintStream;
    invokevirtual java/io/PrintStream/println()V

END_ELSE_4:
    goto END_ELSE_3
NOT_IF_3:
END_ELSE_3:
END_ELSE_2:
END_ELSE_0:
    return
.limit stack 2
.limit locals 4
.end method

; symbol_table:  [ 'args', 'a', 'b', 'c' ]
