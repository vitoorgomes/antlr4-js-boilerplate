.source Test.src
.class  public Test
.super  java/lang/Object

.method public <init>()V
    aload_0
    invokenonvirtual java/lang/Object/<init>()V
    return
.end method

.method public static product(II)V

    iload 1
    iload 2
    imul
    istore 3
    getstatic java/lang/System/out Ljava/io/PrintStream;
    iload 3
    invokevirtual java/io/PrintStream/print(I)V 

    getstatic java/lang/System/out Ljava/io/PrintStream;
    invokevirtual java/io/PrintStream/println()V

    return
    .limit stack 2
    .limit locals 4
.end method

; symbolsTable:  [ 'args', 'a', 'b', 'c' ]

; typesTable:  [ 'i', 'i', 'i' ]

; funcsTable:  [ 'product' ]


.method public static main([Ljava/lang/String;)V

    ldc 4
    ldc 5
    invokestatic Test/product(II)V 

    return
    .limit stack 2
    .limit locals 1
.end method

; symbolsTable:  [ 'args' ]

; typesTable:  []

; funcsTable:  [ 'product' ]


