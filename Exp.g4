grammar Exp;

/*---------------- PARSER INTERNALS ----------------*/

@parser::header
{
    let currentStack = 0;
    let maxStack = 0;
    let ifStack = 0;
    let whileStack = 0;

    let symbolsTable = [];
    let typesTable = [];
    let usedTable = [];
    let funcsTable = [];

    let isWhile = false;
    let isElse = false;
    let whileLocalCounter = 0;

    function emit(bytecode, value) {
      currentStack += value;
      if (currentStack > maxStack) {
          maxStack = currentStack;
      }
      console.log(`    ${bytecode}`)
    }

    function checkUnusedVars() {
      return symbolsTable.filter(v => !usedTable.includes(v))
        .map(u => {
            let message;
            if (u !== 'args') {
              console.error(`ERROR: '${u}' is defined but never used`);
              process.exit(1);
            }
            return message;
        });
    }

    // aux function to emit the correct print type
    function printResolver(type) {
      if (type === 'i') {
        emit(`invokevirtual java/io/PrintStream/print(I)V \n`, -2);
      } else if (type === 's') {
        emit(`invokevirtual java/io/PrintStream/print(Ljava/lang/String;)V \n`, -2);
      } else if (type === 'a') {
        emit(`invokevirtual Array/string()Ljava/lang/String;`, 0);
        emit(`invokevirtual java/io/PrintStream/print(Ljava/lang/String;)V \n`, -2);
      } else {
        console.error(`ERROR: check printResolver`);
        process.exit(1);
      }
    }

    // aux to validate that the expression type is the same as the saved one and to emit the correct store
    function validateTypesToStore(expType, savedType, index, variable) {
      if (expType === savedType) {
        if (savedType === 'i') {
          emit(`istore ${index}`, -1);
        } else if (expType === 's') {
          emit(`astore ${index}`, -1);
        }
      } else {
        console.error(`ERROR: '${variable}' is a ${savedType === 'i' ? 'number' : 'string'}`);
        process.exit(1);
      }
    }
}

@parser::members
{
}

/*---------------- LEXER RULES ----------------*/
COMMENT: '#' ~('\n')*         -> skip ;
SPACE : (' '|'\t'|'\r'|'\n')+ -> skip ;

PLUS  : '+' ;
MINUS : '-' ;
TIMES : '*' ;
OVER  : '/' ;
REM   : '%' ;
OP_PAR: '(' ;
CL_PAR: ')' ;
ATTRIB: '=' ;
COMMA : ',' ;
OP_CUR: '{' ;
CL_CUR: '}' ;
OP_BRA: '[' ;
CL_BRA: ']' ;

EQ    : '==' ;
NE    : '!=' ;
GT    : '>'  ;
GE    : '>=' ;
LT    : '<'  ;
LE    : '<=' ;

PRINT   : 'print'   ;
READ_INT: 'read_int';
READ_STR: 'read_str';
IF      : 'if'      ;
ELSE    : 'else'    ;
WHILE   : 'while'   ;
BREAK   : 'break'   ;
CONTINUE: 'continue';
DOT     : '.'       ;
PUSH    : 'push'    ;
LENGTH  : 'length'  ;
DEF     : 'def'     ;

NUMBER: '0'..'9'+ ;
NAME  : 'a'..'z'+ ;
STRING: '"' ~('"')* '"';

/*---------------- PARSER RULES ----------------*/

program:
    {
      console.log(".source Test.src");
      console.log(".class  public Test");
      console.log(".super  java/lang/Object\n");
      console.log(".method public <init>()V");
      console.log("    aload_0");
      console.log("    invokenonvirtual java/lang/Object/<init>()V");
      console.log("    return");
      console.log(".end method\n");
    }
    ( func )*
    main ;

main:
    {
      console.log(".method public static main([Ljava/lang/String;)V\n");
      symbolsTable.push('args');
    }
    ( statement )+
    {
      console.log("    return");
      console.log(`    .limit stack ${maxStack}`);
      console.log(`    .limit locals ${symbolsTable.length}`);
      console.log(".end method");
      console.log("\n; symbolsTable: ", symbolsTable);
      console.log("\n; typesTable: ", typesTable);
      console.log("\n; funcsTable: ", funcsTable);
      console.log("\n");
      checkUnusedVars();
    };

statement: st_print | st_attrib | st_if | st_while | st_break | st_continue | st_array_new
         | st_array_push | st_array_set | st_call ;

func: DEF NAME OP_PAR CL_PAR OP_CUR
    {
      const funcName = $NAME.text;

      const findFunc = funcsTable.find(func => func === funcName);

      if (findFunc) {
        console.error(`ERROR: function '${funcName}' is already declared`);
        process.exit(1);
      } else {
        console.log(`.method public static ${funcName}()V\n`);
        symbolsTable.push('args');
        funcsTable.push(funcName);
      }
    }
    ( statement )+ CL_CUR
    {
      console.log("    return");
      console.log(`    .limit stack ${maxStack}`);
      console.log(`    .limit locals ${symbolsTable.length}`);
      console.log(".end method");
      console.log("\n; symbolsTable: ", symbolsTable);
      console.log("\n; typesTable: ", typesTable);
      console.log("\n; funcsTable: ", funcsTable);
      console.log("\n");

      currentStack = 0;
      maxStack = 0;
      ifStack = 0;
      whileStack = 0;

      symbolsTable = [];
      typesTable = [];
      usedTable = [];

      isWhile = false;
      isElse = false;
      whileLocalCounter = 0;
    };

st_if: IF bytecode = comparison
    {
      let ifLocal = ifStack;
      ifStack += 1;
      const { bytecode } = this._ctx.bytecode;
      emit(`${bytecode} NOT_IF_${ifLocal}`, -2);
    }
      OP_CUR ( statement )+ CL_CUR
    {
      emit(`goto END_ELSE_${ifLocal}`, 0);
      console.log(`NOT_IF_${ifLocal}:`)
    }
    (
      ELSE OP_CUR ( statement )+ CL_CUR
    )?
    {
      console.log(`END_ELSE_${ifLocal}:`);
    };

st_while:
    {
      let whileLocal = whileStack;
      whileLocalCounter = whileLocal;
      isWhile = true;
      whileStack += 1;
      console.log(`BEGIN_WHILE_${whileLocal}:`);
    }
      WHILE bytecode = comparison
    {
      const { bytecode } = this._ctx.bytecode;
      emit(`${bytecode} END_WHILE_${whileLocal}`, -2);
    }
      OP_CUR ( statement )+ CL_CUR
    {
      emit(`goto BEGIN_WHILE_${whileLocal}`, 0);
      console.log(`END_WHILE_${whileLocal}:`);
      isWhile = false;
    };

st_break: BREAK
    {
      if(isWhile) {
        emit(`goto END_WHILE_${whileLocalCounter}`, 0);
      }
      else {
        console.error('ERROR: BREAK is outside the while loop');
        process.exit(1);
      }
    };

st_continue: CONTINUE
    {
      if(isWhile) {
        emit(`goto BEGIN_WHILE_${whileLocalCounter}`, 0);
      }
      else {
        console.error('ERROR: CONTINUE is outside the while loop');
        process.exit(1);
      }
    };

st_print: PRINT OP_PAR
    {
      emit("getstatic java/lang/System/out Ljava/io/PrintStream;", 1);
    }
      e1 = expression
    {
      printResolver($e1.type);
    }
    (
      COMMA
    {
      emit("getstatic java/lang/System/out Ljava/io/PrintStream;", 1);
    }
      e2 = expression
    {
      printResolver($e2.type);
    }
    )*
      CL_PAR
    {
      emit("getstatic java/lang/System/out Ljava/io/PrintStream;", 1);
      emit("invokevirtual java/io/PrintStream/println()V\n", -1);
    };

st_attrib: NAME ATTRIB expression
    {
      const variable = $NAME.text;
      const expType = $expression.type;

      if (!symbolsTable.find(symbol => symbol === variable)) {
        symbolsTable.push(variable);
        typesTable.push(expType);
      }

      const index = symbolsTable.findIndex(symbol => symbol === variable);

      // need to -1 because in JS symbolsTable starts with 'args' at index 0
      const savedType = typesTable[index - 1];

      validateTypesToStore(expType, savedType, index, variable);
    };

st_array_new: NAME ATTRIB OP_BRA CL_BRA
    {
      const variable = $NAME.text;

      if (!symbolsTable.find(symbol => symbol === variable)) {
        symbolsTable.push(variable);
        typesTable.push('a');

        const index = symbolsTable.findIndex(symbol => symbol === variable);

        emit(`new Array`, 1);
        emit(`dup`, 1);
        emit(`invokespecial Array/<init>()V`, -1);
        emit(`astore ${index}`, -1);
      } else {
        console.error(`ERROR: operation not allowed! Variable '${variable}' is already defined!`);
        process.exit(1);
      }
    };

st_array_push: NAME
    {
      const variable = $NAME.text;

      const index = symbolsTable.findIndex(symbol => symbol === variable);

      if (index === -1)  {
        console.error(`ERROR: operation not allowed! Variable '${variable}' needs to be declared first!`);
        process.exit(1);
      }

      if (!usedTable.find(symbol => symbol === variable)) {
        usedTable.push(variable);
      }

      emit(`aload ${index}`, 1);
    }
      DOT PUSH OP_PAR e1 = expression
    {
      if ($e1.type === 'i') {
        emit(`invokevirtual Array/push(I)V`, -2);
      } else {
        console.error(`ERROR: operation not allowed! Variable '${variable}' needs to be type of number`);
        process.exit(1);
      }
    }
      CL_PAR;

st_array_set: NAME
    {
      const variable = $NAME.text;

      const index = symbolsTable.findIndex(symbol => symbol === variable);

      if (index === -1)  {
        console.error(`ERROR: operation not allowed! Variable '${variable}' needs to be declared first!`);
        process.exit(1);
      }

      if (!usedTable.find(symbol => symbol === variable)) {
        usedTable.push(variable);
      }

      emit(`aload ${index}`, 1);
    }
      OP_BRA e1 = expression CL_BRA ATTRIB e2 = expression
    {
      emit(`invokevirtual Array/set(II)V \n`, -3);
    };

st_call: NAME
    {
      const name = $NAME.text;

      const findFunc = funcsTable.find(func => func === name);

      if (!findFunc) {
        console.error(`ERROR: function '${name}' is not defined`);
        process.exit(1);
      } else {
        emit(`invokestatic Test/${name}()V`, 0);
      }
    } OP_PAR CL_PAR;

comparison returns [bytecode]: e1 = expression op = ( EQ | NE | LT | LE | GT | GE ) e2 = expression
    {
      if ($e1.type !== $e2.type) {
        console.error(`ERROR: operation not allowed! you cannot mix types`);
        process.exit(1);
      }

      if ($op.type === ExpParser.EQ) $bytecode = 'if_icmpne';
      if ($op.type === ExpParser.NE) $bytecode = 'if_icmpeq';
      if ($op.type === ExpParser.LT) $bytecode = 'if_icmpge';
      if ($op.type === ExpParser.GT) $bytecode = 'if_icmple';
      if ($op.type === ExpParser.LE) $bytecode = 'if_icmpgt';
      if ($op.type === ExpParser.GE) $bytecode = 'if_icmplt';
    };

expression returns [type]: t1 = term ( op = ( PLUS | MINUS ) t2 = term
    {
      if ($t1.type !== $t2.type) {
        console.error(`ERROR: operation not allowed! you cannot mix types`);
        process.exit(1);
      }

      if ($op.type === ExpParser.PLUS) emit("iadd", -1)
      if ($op.type === ExpParser.MINUS) emit("isub", -1)
    }
    )*
    {
      $type = $t1.type
    };

term returns [type]: f1 = factor ( op = ( TIMES | OVER | REM ) f2 = factor
    {
      if ($f1.type !== $f2.type) {
        console.error(`ERROR: operation not allowed! you cannot mix types`);
        process.exit(1);
      }

      if ($op.type == ExpParser.TIMES) emit("imul", -1)
      if ($op.type == ExpParser.OVER) emit("idiv", -1)
      if ($op.type == ExpParser.REM) emit("irem", -1)
    }
    )*
    {
      $type = $f1.type
    };

factor returns [type]: NUMBER
    {
      emit(`ldc ${$NUMBER.text}`, 1);
      $type = 'i';
    }
    | STRING
    {
      emit(`ldc ${$STRING.text}`, 1);
      $type = 's';
    }
    | OP_PAR expression CL_PAR
    {
      $type = $expression.type
    }
    | NAME
    {
      const variable = $NAME.text;
      const index = symbolsTable.findIndex(symbol => symbol === variable);
      if (index === -1) {
        console.error(`ERROR: Variable '${variable}' is not defined`);
        process.exit(1);
      } else {
        // need to -1 because in JS symbolsTable starts with 'args' at index 0
        const type = typesTable[index - 1];

        if (type === 'i') {
          emit(`iload ${index}`, 1);
          $type = type;
        } else if (type === 's') {
          emit(`aload ${index}`, 1);
          $type = type;
        } else if (type === 'a') {
          emit(`aload ${index}`, 1);
          $type = type;
        }
        usedTable.push(variable);
      }
    }
    | READ_INT OP_PAR CL_PAR
    {
      emit("invokestatic Runtime/readInt()I", 1);
      $type = 'i';
    }
    | READ_STR OP_PAR CL_PAR
    {
      emit("invokestatic Runtime/readString()Ljava/lang/String;", 1);
      $type = 's';
    }
    | NAME DOT LENGTH
    {
      $type = 'i';

      const name = $NAME.text;
      const i = symbolsTable.findIndex(symbol => symbol === name);

      // need to -1 because in JS symbolsTable starts with 'args' at index 0
      const t = typesTable[i - 1];

      if (t !== 'a') {
        console.error(`ERROR: operation not allowed! Variable '${name}' is not an array`);
        process.exit(1);
      } else {
        emit(`aload ${i}`, 1);
        emit(`invokevirtual Array/length()I`, 0);
      }
    }
    | NAME OP_BRA NUMBER CL_BRA
    {
      $type = 'i';

      const variableName = $NAME.text;
      const idx = symbolsTable.findIndex(symbol => symbol === variableName);

      console.log(`; number? => ${$NUMBER.text}`);

      // need to -1 because in JS symbolsTable starts with 'args' at index 0
      const tp = typesTable[idx - 1];

      if (tp !== 'a') {
        console.error(`ERROR: operation not allowed! Variable '${variableName}' is not an array`);
        process.exit(1);
      } else {
        emit(`aload ${idx - 1}`, 1);
        emit(`ldc ${idx - 1}`, 1);
        emit(`invokevirtual Array/get(I)I`, -1);
      }
    };
