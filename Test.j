.source Test.src
.class  public Test
.super  java/lang/Object

.method public <init>()V
    aload_0
    invokenonvirtual java/lang/Object/<init>()V
    return
.end method

.method public static test()V

    ldc 1
    istore 1
    return
    .limit stack 1
    .limit locals 2
.end method

; symbolsTable:  [ 'args', 'x' ]

; typesTable:  [ 'i' ]

; funcsTable:  [ 'test' ]


.method public static main([Ljava/lang/String;)V

    invokestatic Test/test()V
