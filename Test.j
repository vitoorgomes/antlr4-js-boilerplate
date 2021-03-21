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
    ldc 3
    isub
    ldc 2
    isub
    ldc 1
    isub
    invokevirtual java/io/PrintStream/println(I)V

    getstatic java/lang/System/out Ljava/io/PrintStream;
    ldc 8
    ldc 4
    idiv
    ldc 2
    idiv
    invokevirtual java/io/PrintStream/println(I)V

    getstatic java/lang/System/out Ljava/io/PrintStream;
    ldc 987
    ldc 654
    irem
    ldc 321
    irem
    invokevirtual java/io/PrintStream/println(I)V

    return
.limit stack 10
.end method
