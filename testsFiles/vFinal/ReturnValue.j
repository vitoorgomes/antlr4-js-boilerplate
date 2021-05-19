.source ReturnValue.src
.class  public ReturnValue
.super  java/lang/Object

.method public <init>()V
    aload_0
    invokenonvirtual java/lang/Object/<init>()V
    return
.end method

; def max(a, b) int {
.method public static max(II)I
    ; c = a
    iload  0
    istore 2

    ; if b > c:
    iload  1
    iload  2
    if_icmple NOT_IF_0

    ; c = b
    iload  1
    istore 2

NOT_IF_0:

    ; return c
    iload  2
    ireturn

    return
.limit locals 3
.limit stack  2
.end method

.method public static main([Ljava/lang/String;)V
    ; x = 8
    ldc    8
    istore 0

    ; y = max(4, x)
    ldc    4
    iload  0
    invokestatic ReturnValue/max(II)I
    istore 1

    ; print(y)
    getstatic java/lang/System/out Ljava/io/PrintStream;
    iload  1
    invokevirtual java/io/PrintStream/print(I)V

    getstatic java/lang/System/out Ljava/io/PrintStream;
    invokevirtual java/io/PrintStream/println()V

    return
.limit locals 2
.limit stack  3
.end method

