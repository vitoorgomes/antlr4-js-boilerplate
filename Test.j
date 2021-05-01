.source Test.src
.class  public Test
.super  java/lang/Object

.method public <init>()V
    aload_0
    invokenonvirtual java/lang/Object/<init>()V
    return
.end method

.method public static main([Ljava/lang/String;)V

    ldc 0
    istore 1
BEGIN_WHILE_0:
    iload 1
    ldc 5
    if_icmpgt END_WHILE_0
    iload 1
    ldc 1
    iadd
    istore 1
    iload 1
    ldc 2
    if_icmpne NOT_IF_0
    goto BEGIN_WHILE_0
NOT_IF_0:
    iload 1
    ldc 4
    if_icmpne NOT_IF_1
    goto END_WHILE_0
NOT_IF_1:
    getstatic java/lang/System/out Ljava/io/PrintStream;
    iload 1
    invokevirtual java/io/PrintStream/print(I)V

    getstatic java/lang/System/out Ljava/io/PrintStream;
    invokevirtual java/io/PrintStream/println()V

    goto BEGIN_WHILE_0
END_WHILE_0:
    return
.limit stack 2
.limit locals 2
.end method

; symbol_table:  [ 'args', 'n' ]
