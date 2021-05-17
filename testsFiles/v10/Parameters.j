.source Parameters.src
.class  public Parameters
.super  java/lang/Object

.method public <init>()V
    aload_0
    invokenonvirtual java/lang/Object/<init>()V
    return
.end method

; def product(a, b) {
.method public static product(II)V
    ; c = a * b
    iload  0
    iload  1
    imul
    istore 2

    ; print(c)
    getstatic java/lang/System/out Ljava/io/PrintStream;
    iload  2
    invokevirtual java/io/PrintStream/print(I)V

    getstatic java/lang/System/out Ljava/io/PrintStream;
    invokevirtual java/io/PrintStream/println()V

    return
.limit locals 3
.limit stack  2
.end method

.method public static main([Ljava/lang/String;)V
    ; product(4, 5)
    ldc    4
    ldc    5
    invokestatic Parameters/product(II)V

    return
.limit stack  2
.end method

