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
    ldc "Enter array size:"
; hey s
    invokevirtual java/io/PrintStream/print(Ljava/lang/String;)V 

    getstatic java/lang/System/out Ljava/io/PrintStream;
    invokevirtual java/io/PrintStream/println()V

    ldc 5
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
; t1 => i
; t2 => i
    iadd
    invokevirtual Array/push(I)V
    iload 3
    ldc 1
; t1 => i
; t2 => i
    iadd
    istore 3
    goto BEGIN_WHILE_0
END_WHILE_0:
    aload 2
    invokevirtual Array/length()I
    ldc 1
; t1 => i
; t2 => i
    isub
    istore 3
    getstatic java/lang/System/out Ljava/io/PrintStream;
; number? => 0
    aload 1
    ldc 1
    invokevirtual Array/get(I)I
; hey i
    invokevirtual java/io/PrintStream/print(I)V 

    getstatic java/lang/System/out Ljava/io/PrintStream;
    invokevirtual java/io/PrintStream/println()V

    return
.limit stack 3
.limit locals 4
.end method

; symbolsTable:  [ 'args', 'n', 'a', 'i' ]

; typesTable:  [ 'i', 'a', 'i' ]
