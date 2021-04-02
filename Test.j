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
    if_icmple NOT_IF_1
    getstatic java/lang/System/out Ljava/io/PrintStream;
    ldc 4
    invokevirtual java/io/PrintStream/print(I)V

    getstatic java/lang/System/out Ljava/io/PrintStream;
    invokevirtual java/io/PrintStream/println()V

NOT_IF_1:
    iload 2
    iload 3
    if_icmpgt NOT_IF_2
    getstatic java/lang/System/out Ljava/io/PrintStream;
    ldc 5
    invokevirtual java/io/PrintStream/print(I)V

    getstatic java/lang/System/out Ljava/io/PrintStream;
    invokevirtual java/io/PrintStream/println()V

NOT_IF_2:
NOT_IF_0:
    iload 1
    iload 2
    if_icmpeq NOT_IF_3
    iload 1
    iload 2
    if_icmpge NOT_IF_4
    iload 2
    iload 3
    if_icmple NOT_IF_5
    getstatic java/lang/System/out Ljava/io/PrintStream;
    ldc 6
    invokevirtual java/io/PrintStream/print(I)V

    getstatic java/lang/System/out Ljava/io/PrintStream;
    invokevirtual java/io/PrintStream/println()V

NOT_IF_5:
    iload 2
    iload 3
    if_icmpgt NOT_IF_6
    getstatic java/lang/System/out Ljava/io/PrintStream;
    ldc 7
    invokevirtual java/io/PrintStream/print(I)V

    getstatic java/lang/System/out Ljava/io/PrintStream;
    invokevirtual java/io/PrintStream/println()V

NOT_IF_6:
NOT_IF_4:
    iload 1
    iload 2
    if_icmplt NOT_IF_7
    getstatic java/lang/System/out Ljava/io/PrintStream;
    ldc 8
    invokevirtual java/io/PrintStream/print(I)V

    getstatic java/lang/System/out Ljava/io/PrintStream;
    invokevirtual java/io/PrintStream/println()V

NOT_IF_7:
NOT_IF_3:
    return
.limit stack 2
.limit locals 4
.end method

; symbol_table:  [ 'args', 'a', 'b', 'c' ]
