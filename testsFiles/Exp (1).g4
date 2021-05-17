grammar Exp;

/*--------------------------------------------------------------------*/
/*                            CABEÇALHO                               */
/*--------------------------------------------------------------------*/

/* -- Tipos de variavel --  */
/*  'i' -> inteiro          */
/*  's' -> string           */
/*  'a' -> array            */
@parser::header
{
stop_on_error = True

function_list       = []
function_parameters = []

symbol_table    = []
type_table      = []
used_table      = []

error_list      = []

log_stack_changes = False

stack_max   = 0
stack_cur   = 0
if_label    = 0
while_label = 0
while_list  = []

def logEmit(direction, current, max, text):
    text = 'EMIT (\t'+str(direction)+'\t'+str(stack_cur)+'\t'+str(max)+'\t) - "'+text.replace('\n','')+'"'
    print(text, file=sys.stderr)

def emit(text, stack_direction, breakline=True):
    if breakline:
        print('    '+text)
    else:
        print('    '+text, end='')
    global stack_cur
    global stack_max
    if log_stack_changes:
        logEmit(stack_direction, stack_cur, stack_max, text)
    stack_cur += stack_direction
    stack_max = stack_cur if stack_cur > stack_max else stack_max

def closeIfLabel(label):
    return 'NOT_IF_'+str(label)+':'

def elseLabel(label):
    return 'ELSE_END_'+str(label)+':'

def gotoElseLabel(label):
    return 'goto ELSE_END_'+str(label)

def openWhileLabel(label):
    return 'BEGIN_WHILE_'+str(label)+':'

def gotoWhileLabel(label):
    return 'goto BEGIN_WHILE_'+str(label)

def breakWhileLabel(label):
    return 'goto NOT_IF_'+str(label)

def continueWhileLabel(label):
    return 'goto BEGIN_WHILE_'+str(label)

# HELPERS

def emitErrorOnConsole(ctx, text):
    global error_list
    row = ctx.start.line
    col = ctx.start.column
    error_list.append("line "+str(row)+":"+str(col)+" "+text)

def getFromSymbolTable(ctx, name):
    if name in symbol_table:
        return symbol_table.index(name)
    else:
        emitErrorOnConsole(ctx, "'"+name+"' is not defined!")
        return None

def verifyUsedVariables(ctx):
    if False in used_table:
        unused_index = used_table.index(False)
        error_list.append("Variable '"+symbol_table[unused_index]+"' was defined but not used")

def verifyErrors(ctx):
    global error_list
    global stop_on_error
    verifyUsedVariables(ctx)
    if len(error_list) >= 1:
        for error in error_list:
            print(error, file=sys.stderr)
        if stop_on_error:
            sys.exit("Stoping execution...")

def resetFunctionMetrics():
    global symbol_table
    global type_table
    global used_table
    global stack_max
    global stack_curr

    symbol_table = []
    type_table = []
    used_table = []
    stack_max = 0
    stack_cur = 0

}



@parser::members
{
}

/*--------------------------------------------------------------------*/
/*                            REGRAS LÉXICAS                          */
/*--------------------------------------------------------------------*/
MLCOMMENT: '#/' .*? '/#'         -> skip ;
COMMENT  : '#' ~('\n')*          -> skip ;
SPACE    : (' '|'\t'|'\r'|'\n')+ -> skip ;

PLUS  : '+' ;
MINUS : '-' ;
TIMES : '*' ;
OVER  : '/' ;
REM   : '%' ;
OP_PAR: '(' ;
CL_PAR: ')' ;
ATTRIB: '=' ;
COMMA : ',' ;
DOT   : '.' ;

OP_CUR: '{'   ;
CL_CUR: '}'   ;
OP_BRA: '['   ;
CL_BRA: ']'   ;
EQ    : '=='  ;
NE    : '!='  ;
GT    : '>'   ;
GE    : '>='  ;
LT    : '<'   ;
LE    : '<='  ;

PRINT   : 'print'       ;
READ_INT: 'read_int'    ;
READ_STR: 'read_str'    ;
IF      : 'if'          ;
ELSE    : 'else'        ;
WHILE   : 'while'       ;
BREAK   : 'break'       ;
CONTINUE: 'continue'    ;
PUSH    : 'push'        ;
LENGTH  : 'length'      ;
DEF     : 'def'         ;

NUMBER: '0'..'9'+       ;
STRING: '"'~('"')*'"'   ;

NAME  : 'a'..'z'+ ;

/*--------------------------------------------------------------------*/
/*                            REGRAS SINTATICAS                       */
/*--------------------------------------------------------------------*/
program:
    {
print('.source Test.src')
print('.class  public Test')
print('.super  java/lang/Object\n')
print('.method public <init>()V')
print('    aload_0')
print('    invokenonvirtual java/lang/Object/<init>()V')
print('    return')
print('.end method\n')
    }
    (function)*
    main ;

/*--------------------------------------------------------------------*/
/*                                 MAIN                               */
/*--------------------------------------------------------------------*/
main:
    {
print('.method public static main([Ljava/lang/String;)V\n')
symbol_table.append('args')
type_table.append('s')
used_table.append(True)
    }
    ( statement )+
    {
verifyErrors($ctx)
print('    return')
print('.limit stack', stack_max)
print('.limit locals', len(symbol_table))
print('.end method')
print('\n; symbol_table:', symbol_table)
print('; type_table:', type_table)
print('; used_table:', used_table)
    }
    ;

/*--------------------------------------------------------------------*/
/*                           STATEMENTS                               */
/*--------------------------------------------------------------------*/
statement:  st_print | st_attrib | st_if | st_while | st_break | st_cotinue 
            | st_array_create | st_array_push | st_array_set | st_call;

/*--------------------------------------------------------------------*/
/*                           FUNCTION                                 */
/*--------------------------------------------------------------------*/
function: DEF NAME OP_PAR ((p = parameters )?) CL_PAR OP_CUR
{
global stack_max
global symbol_table
if $NAME.text not in function_list:
    parameters = $p.text.split(',') if $p.text else []
    if len(parameters) == len(set(parameters)):
        function_list.append($NAME.text)
        function_parameters.append(len(parameters))
        print('.method public static '+$NAME.text+'('+("I" * len(parameters))+')V')
        for p in parameters:
            symbol_table.append(p)
            type_table.append('i')
            used_table.append(False)
    else:
        emitErrorOnConsole($ctx, "Parameters names must be unique")
else:
    emitErrorOnConsole($ctx, "Function '"+$NAME.text+"' already defined")
}
(statement)+ CL_CUR
{
print('    return')
print('.limit stack', stack_max)
print('.limit locals', len(symbol_table))
print('.end method\n')
resetFunctionMetrics()
}
;

parameters: NAME (COMMA NAME)* ;

st_call: NAME OP_PAR ((args = arguments)?) CL_PAR {
if $NAME.text in function_list:
    raw_arguments = $args.text if $args.text else ""
    if '"' not in raw_arguments:
        arguments = raw_arguments.split(',') if len(raw_arguments) > 0 else []
        arguments_expected = function_parameters[function_list.index($NAME.text)]
        if len(arguments) == arguments_expected:
            function_def_I = "I" * function_parameters[function_list.index($NAME.text)]
            emit('invokestatic Test/'+$NAME.text+'('+function_def_I+')V\n', 0)
        else:
            emitErrorOnConsole($ctx, "Calling '"+$NAME.text+"' expects "+str(arguments_expected)+" parameters, got "+str(len(arguments)))
    else:
        emitErrorOnConsole($ctx, "All arguments must be integer")
else:
    emitErrorOnConsole($ctx, "Calling undefined '"+$NAME.text+"' function")
}
;

arguments: expression (COMMA expression)* ;

/*--------------------------------------------------------------------*/
/*                            PRINT                                   */
/*--------------------------------------------------------------------*/
st_print: PRINT OP_PAR
    {
emit('getstatic java/lang/System/out Ljava/io/PrintStream;', +1)
    }
    e1 = expression
    {
if $e1.type == 'i':
    emit('invokevirtual java/io/PrintStream/print(I)V\n',      -2)
elif $e1.type == 's':
    emit('invokevirtual java/io/PrintStream/print(Ljava/lang/String;)V\n',      -2)
else:
    emitErrorOnConsole($ctx, "Invalid expression type: "+str($e1.type))
    }
    ( COMMA 
    {
emit('getstatic java/lang/System/out Ljava/io/PrintStream;', +1)
    }
    e2 = expression
    {
if $e2.type == 'i':
    emit('invokevirtual java/io/PrintStream/print(I)V\n',      -2)
elif $e2.type == 's':
    emit('invokevirtual java/io/PrintStream/print(Ljava/lang/String;)V\n',      -2)
else:
    emitErrorOnConsole($ctx, "Invalid expression type")}
    )*
    CL_PAR
    {
emit('getstatic java/lang/System/out Ljava/io/PrintStream;', +1)
emit('invokevirtual java/io/PrintStream/println()V\n',       -1)
    }
    ;

/*--------------------------------------------------------------------*/
/*                            ATRIBUIÇÃO                              */
/*--------------------------------------------------------------------*/
st_attrib: NAME ATTRIB ex = expression 
    {
if $NAME.text not in symbol_table:
    symbol_table.append($NAME.text)
    type_table.append($expression.type)
    used_table.append(False)

index = getFromSymbolTable($ctx, $NAME.text)
type  = type_table[index]
if(type == 'i'):
    if($ex.type == 'i'):
        emit('istore ' + str(index) + '\n', -1)
elif(type == 's'):
    if($ex.type == 's'):
        emit('astore ' + str(index) + '\n', -1)
else:
    emitErrorOnConsole($ctx, "Invalid expression type")
    }
    ;

/*--------------------------------------------------------------------*/
/*                              IF                                    */
/*--------------------------------------------------------------------*/
st_if: IF condition
    {
global if_label
if_label += 1
local_if_label = if_label
print("NOT_IF_"+str(local_if_label))
    }
    OP_CUR ( statement )+ CL_CUR
    {
emit(gotoElseLabel(local_if_label), 0)
emit(closeIfLabel(local_if_label), 0)
    }
    ( ELSE OP_CUR ( statement )+ CL_CUR )?
    {
emit(elseLabel(local_if_label), 0)
    }
    ;

/*--------------------------------------------------------------------*/
/*                              WHILE                                 */
/*--------------------------------------------------------------------*/
st_while: WHILE 
    {
global while_list
global while_label
while_label += 1
local_while_label = while_label
while_list.append(while_label)
emit(openWhileLabel(local_while_label), 0)
    }
    condition
    {
global if_label
if_label += 1
local_if_label = if_label
print("NOT_IF_"+str(local_if_label))
    } 
    OP_CUR ( statement ) + CL_CUR
    {
emit(gotoWhileLabel(local_while_label), 0)
emit(closeIfLabel(local_if_label), 0)
while_list.pop()
    }
    ;

/*--------------------------------------------------------------------*/
/*                              BREAK                                 */
/*--------------------------------------------------------------------*/
st_break: BREAK
    {
global while_list
if(len(while_list) >= 1):
    emit(breakWhileLabel(while_list[-1]), 0)
else:
    emitErrorOnConsole($ctx, "Can't use 'break' outside while loop")
    }
    ;

/*--------------------------------------------------------------------*/
/*                             CONTINUE                               */
/*--------------------------------------------------------------------*/
st_cotinue: CONTINUE
    {
global while_count
if(len(while_list) >= 1):
    emit(continueWhileLabel(while_list[-1]), 0)
else:
    emitErrorOnConsole($ctx, "Can't use 'continue' outside while loop")
    }
    ;

/*--------------------------------------------------------------------*/
/*                               ARRAY                                */
/*--------------------------------------------------------------------*/
st_array_create: NAME ATTRIB OP_BRA CL_BRA
    {
if $NAME.text not in symbol_table:
    symbol_table.append($NAME.text)
    type_table.append('a')
    used_table.append(False)

index = getFromSymbolTable($ctx, $NAME.text)
type  = type_table[index]

if(type == 'a'):
    emit('new Array', 1)
    emit('dup', 1)
    emit('invokespecial Array/<init>()V', -1)
    emit('astore ' + str(index), -1)
else:
    emitErrorOnConsole($ctx, "Can't convert other types into Array")
    } 
    ;

st_array_push: NAME DOT PUSH OP_PAR 
    {   
index = getFromSymbolTable($ctx, $NAME.text)
type  = type_table[index]
if(type == 'a'):
    emit('aload ' + str(index), +1)
else:
    emitErrorOnConsole($ctx, "Can't push into non Array")
    }
ex = expression CL_PAR
    {
if($ex.type=='i'):
    emit('invokevirtual Array/push(I)V', -2)
else:
    emitErrorOnConsole($ctx, "Array items only accepts integer type")
    }
    ;

st_array_set: NAME OP_BRA 
    {
index = getFromSymbolTable($ctx, $NAME.text)
if(index):
    type  = type_table[index]
    if(type == 'a'):
        emit('aload ' + str(index), +1)
    else:
        emitErrorOnConsole($ctx, "Can't set value in index of non Array")
    } 
ex01 = expression CL_BRA ATTRIB ex02 = expression 
    {
if($ex01.type=='i'):
    if($ex02.type == 'i'):
        emit('invokevirtual Array/set(II)V', -3)
    else:
        emitErrorOnConsole($ctx, "Array items only accepts integer type")
else:
    emitErrorOnConsole($ctx, "Array index must be integer")
}
    ;

/*--------------------------------------------------------------------*/
/*                            COMPARAÇÃO                              */
/*--------------------------------------------------------------------*/
condition: ex1 = expression op = ( EQ | NE | GT | GE | LT | LE ) ex2 = expression
    {
if($ex1.type == $ex2.type):
    if $op.type == ExpParser.EQ: emit('if_icmpne ', -2, False)
    if $op.type == ExpParser.NE: emit('if_icmpeq ', -2, False)
    if $op.type == ExpParser.GT: emit('if_icmple ', -2, False)
    if $op.type == ExpParser.GE: emit('if_icmplt ', -2, False)
    if $op.type == ExpParser.LT: emit('if_icmpge ', -2, False)
    if $op.type == ExpParser.LE: emit('if_icmpgt ', -2, False)
else:
    emitErrorOnConsole($ctx, "Can't mix types")
    }
    ;

/*--------------------------------------------------------------------*/
/*                            EXPRESSÃO                               */
/*--------------------------------------------------------------------*/
expression returns [type]: t1 = term ( op = ( PLUS | MINUS ) t2 = term
    {
if($t1.type == $t2.type):
    if $op.type == ExpParser.PLUS:  emit('iadd', -1)
    if $op.type == ExpParser.MINUS: emit('isub', -1)
else:
    emitErrorOnConsole($ctx, "Can't mix types")
    }
    )* 
    {
$type = $t1.type
    } ;

/*--------------------------------------------------------------------*/
/*                            TERMO                                   */
/*--------------------------------------------------------------------*/
term returns [type]: f1 = factor ( op = ( TIMES | OVER | REM ) f2 = factor
    {
if($f1.type == $f2.type):
    if $op.type == ExpParser.TIMES: emit('imul',     -1)
    if $op.type == ExpParser.OVER:  emit('idiv',     -1)
    if $op.type == ExpParser.REM:   emit('irem',     -1)
else:
    emitErrorOnConsole($ctx, "Can't mix types")
    }
    )*
    {
$type = $f1.type
    } ;

/*--------------------------------------------------------------------*/
/*                            FATOR                                   */
/*--------------------------------------------------------------------*/
factor returns [type]: NUMBER
    {
emit('ldc ' + $NUMBER.text, +1)
$type = 'i'
    } 
    | STRING
    {
emit('ldc ' + $STRING.text, +1)
$type = 's'
    }
    | OP_PAR expression CL_PAR 
    {
$type = $expression.type
    }
    | NAME
    {
index = getFromSymbolTable($ctx, $NAME.text)
if index != None:
    used_table[index] = True
    type  = type_table[index]
    if type == 'i':
        emit('iload ' + str(index), +1)
        type = type
    elif type == 's':
        emit('aload ' + str(index), +1)
        type = type
    elif type == 'a':
        emit('aload ' + str(index), +1)
        emit('invokevirtual Array/string()Ljava/lang/String;', 0)
        type = 's'
    else:
        emitErrorOnConsole($ctx, "Unknow variable type")
    $type = type
    }
    | READ_INT OP_PAR CL_PAR
    {
emit('invokestatic Runtime/readInt()I', +1)
$type = 'i'
    }
    | READ_STR OP_PAR CL_PAR
    {
emit('invokestatic Runtime/readString()Ljava/lang/String;', +1)
$type = 's'
    }
    | NAME OP_BRA ex = expression
    {
index = getFromSymbolTable($ctx, $NAME.text)
if index != None:
    type  = type_table[index]
    used_table[index] = True
    if type == 'a':
        if $ex.type == 'i':
            emit('aload ' + str(index), +1)
            emit('invokevirtual Array/get(I)I', -1)
            $type = 'i'
        else:
            emitErrorOnConsole($ctx, "Array index must be integer")
    else:
        emitErrorOnConsole($ctx, "Can't get index of non Array")
    } CL_BRA
    | NAME DOT LENGTH
    {
index = getFromSymbolTable($ctx, $NAME.text)
if index != None:
    type  = type_table[index]
    used_table[index] = True
    if type == 'a':
        emit('aload ' + str(index), +1)
        emit('invokevirtual Array/length()I', 0)
        $type = 'i'
    else:
        emitErrorOnConsole($ctx, "Can't get length of not Array")
        }
    ;