.source Test.src
.class  public Test
.super  java/lang/Object

.method public <init>()V
    aload_0
    invokenonvirtual java/lang/Object/<init>()V
    return
.end method

.method public static product(II)V

    iload 0
    iload 1
    imul
    istore 2
    getstatic java/lang/System/out Ljava/io/PrintStream;
    iload 2
    invokevirtual java/io/PrintStream/print(I)V 

    getstatic java/lang/System/out Ljava/io/PrintStream;
    invokevirtual java/io/PrintStream/println()V

; returnText => null
; statementText => print(c)
    return
    .limit stack 2
    .limit locals 3
.end method

; symbolsTable:  [ 'a', 'b', 'c' ]

; typesTable:  [ 'i', 'i', 'i' ]


.method public static main([Ljava/lang/String;)V

    ldc 4
    ldc 5
    invokestatic Test/product(II)V 

    return
    .limit stack 2
    .limit locals 2
.end method

; symbolsTable:  [ '4', '5' ]

; typesTable:  [ 'i', 'i' ]

; funcsTable:  [ 'product' ]


