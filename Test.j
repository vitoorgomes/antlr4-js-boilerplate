.source Test.src
.class  public Test
.super  java/lang/Object

.method public <init>()V
    aload_0
    invokenonvirtual java/lang/Object/<init>()V
    return
.end method

.method public static main([Ljava/lang/String;)V

    ldc "def"
    astore 0
    getstatic java/lang/System/out Ljava/io/PrintStream;
    aload 0
    invokevirtual java/io/PrintStream/print(Ljava/lang/String;)V 

    getstatic java/lang/System/out Ljava/io/PrintStream;
    invokevirtual java/io/PrintStream/println()V

    return
    .limit stack 2
    .limit locals 1
.end method

; symbolsTable:  [ 'x' ]

; typesTable:  [ 's' ]

; funcsTable:  []


