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
    ldc "Enter array size: "
; localctx.e1.type => s
    getstatic java/lang/System/out Ljava/io/PrintStream;
    invokevirtual java/io/PrintStream/println()V

    invokestatic Runtime/readInt()I
    istore 1
    new Array
    dup
    invokespecial Array/<init>()V
    astore 2
    ldc 0
    istore 3
BEGIN_WHILE_0:
    iload 3
    iload 1
    if_icmpge END_WHILE_0
    aload 2
    iload 3
    ldc 1
    iadd
    invokevirtual Array/push(I)V
    iload 3
    ldc 1
    iadd
    istore 3
    goto BEGIN_WHILE_0
END_WHILE_0:
    aload 2
    invokevirtual Array/length()I
    ldc 1
    isub
    istore 3
    getstatic java/lang/System/out Ljava/io/PrintStream;
; localctx.e1.type => null
    getstatic java/lang/System/out Ljava/io/PrintStream;
    invokevirtual java/io/PrintStream/println()V

    return
.limit stack 5
.limit locals 4
.end method

; symbols_table:  [ 'args', 'n', 'a', 'i' ]

; types_table:  [ 'i', 'a', 'i' ]
