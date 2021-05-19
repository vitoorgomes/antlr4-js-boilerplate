// Generated from Exp.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';

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
        console.error(`ERROR: types not matching`);
        process.exit(1);
      }
    }


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003(\u0122\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0003\u0002\u0003\u0002\u0007\u00021\n\u0002\f\u0002\u000e\u00024\u000b",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0007\u0003:",
    "\n\u0003\f\u0003\u000e\u0003=\u000b\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005F",
    "\n\u0005\f\u0005\u000e\u0005I\u000b\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0005\u0006O\n\u0006\u0003\u0006\u0003\u0006\u0005",
    "\u0006S\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006X\n\u0006",
    "\f\u0006\u000e\u0006[\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007",
    "k\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0006\br\n\b\r\b\u000e",
    "\bs\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0006\b{\n\b\r\b\u000e\b",
    "|\u0003\b\u0003\b\u0005\b\u0081\n\b\u0003\b\u0003\b\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0006\t\u008b\n\t\r\t\u000e\t\u008c",
    "\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0007\f\u00a2\n\f\f\f\u000e\f\u00a5\u000b\f",
    "\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00ca\n\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0007\u0013\u00d9\n\u0013\f\u0013\u000e\u0013\u00dc\u000b\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0007\u0015\u00e8\n\u0015",
    "\f\u0015\u000e\u0015\u00eb\u000b\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0007\u0016\u00f4",
    "\n\u0016\f\u0016\u000e\u0016\u00f7\u000b\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u011c\n\u0017\u0003",
    "\u0017\u0003\u0017\u0005\u0017\u0120\n\u0017\u0003\u0017\u0002\u0002",
    "\u0018\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&(*,\u0002\u0005\u0003\u0002\u0013\u0018\u0003\u0002",
    "\u0005\u0006\u0003\u0002\u0007\t\u0002\u012d\u0002.\u0003\u0002\u0002",
    "\u0002\u00047\u0003\u0002\u0002\u0002\u0006@\u0003\u0002\u0002\u0002",
    "\bB\u0003\u0002\u0002\u0002\nJ\u0003\u0002\u0002\u0002\fj\u0003\u0002",
    "\u0002\u0002\u000el\u0003\u0002\u0002\u0002\u0010\u0084\u0003\u0002",
    "\u0002\u0002\u0012\u0091\u0003\u0002\u0002\u0002\u0014\u0094\u0003\u0002",
    "\u0002\u0002\u0016\u0097\u0003\u0002\u0002\u0002\u0018\u00a9\u0003\u0002",
    "\u0002\u0002\u001a\u00ae\u0003\u0002\u0002\u0002\u001c\u00b4\u0003\u0002",
    "\u0002\u0002\u001e\u00bd\u0003\u0002\u0002\u0002 \u00c6\u0003\u0002",
    "\u0002\u0002\"\u00ce\u0003\u0002\u0002\u0002$\u00d2\u0003\u0002\u0002",
    "\u0002&\u00dd\u0003\u0002\u0002\u0002(\u00e2\u0003\u0002\u0002\u0002",
    "*\u00ee\u0003\u0002\u0002\u0002,\u011f\u0003\u0002\u0002\u0002.2\b\u0002",
    "\u0001\u0002/1\u0005\n\u0006\u00020/\u0003\u0002\u0002\u000214\u0003",
    "\u0002\u0002\u000220\u0003\u0002\u0002\u000223\u0003\u0002\u0002\u0002",
    "35\u0003\u0002\u0002\u000242\u0003\u0002\u0002\u000256\u0005\u0004\u0003",
    "\u00026\u0003\u0003\u0002\u0002\u00027;\b\u0003\u0001\u00028:\u0005",
    "\f\u0007\u000298\u0003\u0002\u0002\u0002:=\u0003\u0002\u0002\u0002;",
    "9\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002<>\u0003\u0002\u0002",
    "\u0002=;\u0003\u0002\u0002\u0002>?\b\u0003\u0001\u0002?\u0005\u0003",
    "\u0002\u0002\u0002@A\u0007\u0012\u0002\u0002A\u0007\u0003\u0002\u0002",
    "\u0002BG\u0007\'\u0002\u0002CD\u0007\r\u0002\u0002DF\u0007\'\u0002\u0002",
    "EC\u0003\u0002\u0002\u0002FI\u0003\u0002\u0002\u0002GE\u0003\u0002\u0002",
    "\u0002GH\u0003\u0002\u0002\u0002H\t\u0003\u0002\u0002\u0002IG\u0003",
    "\u0002\u0002\u0002JK\u0007$\u0002\u0002KL\u0007\'\u0002\u0002LN\u0007",
    "\n\u0002\u0002MO\u0005\b\u0005\u0002NM\u0003\u0002\u0002\u0002NO\u0003",
    "\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002PR\u0007\u000b\u0002\u0002",
    "QS\u0005\u0006\u0004\u0002RQ\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002",
    "\u0002ST\u0003\u0002\u0002\u0002TU\u0007\u000e\u0002\u0002UY\b\u0006",
    "\u0001\u0002VX\u0005\f\u0007\u0002WV\u0003\u0002\u0002\u0002X[\u0003",
    "\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002",
    "Z\\\u0003\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002\\]\u0007\u000f",
    "\u0002\u0002]^\b\u0006\u0001\u0002^\u000b\u0003\u0002\u0002\u0002_k",
    "\u0005\u0016\f\u0002`k\u0005\u0018\r\u0002ak\u0005\u000e\b\u0002bk\u0005",
    "\u0010\t\u0002ck\u0005\u0012\n\u0002dk\u0005\u0014\u000b\u0002ek\u0005",
    "\u001a\u000e\u0002fk\u0005\u001c\u000f\u0002gk\u0005\u001e\u0010\u0002",
    "hk\u0005 \u0011\u0002ik\u0005\"\u0012\u0002j_\u0003\u0002\u0002\u0002",
    "j`\u0003\u0002\u0002\u0002ja\u0003\u0002\u0002\u0002jb\u0003\u0002\u0002",
    "\u0002jc\u0003\u0002\u0002\u0002jd\u0003\u0002\u0002\u0002je\u0003\u0002",
    "\u0002\u0002jf\u0003\u0002\u0002\u0002jg\u0003\u0002\u0002\u0002jh\u0003",
    "\u0002\u0002\u0002ji\u0003\u0002\u0002\u0002k\r\u0003\u0002\u0002\u0002",
    "lm\u0007\u001c\u0002\u0002mn\u0005&\u0014\u0002no\b\b\u0001\u0002oq",
    "\u0007\u000e\u0002\u0002pr\u0005\f\u0007\u0002qp\u0003\u0002\u0002\u0002",
    "rs\u0003\u0002\u0002\u0002sq\u0003\u0002\u0002\u0002st\u0003\u0002\u0002",
    "\u0002tu\u0003\u0002\u0002\u0002uv\u0007\u000f\u0002\u0002v\u0080\b",
    "\b\u0001\u0002wx\u0007\u001d\u0002\u0002xz\u0007\u000e\u0002\u0002y",
    "{\u0005\f\u0007\u0002zy\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002",
    "\u0002|z\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002}~\u0003\u0002",
    "\u0002\u0002~\u007f\u0007\u000f\u0002\u0002\u007f\u0081\u0003\u0002",
    "\u0002\u0002\u0080w\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002",
    "\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0083\b\b\u0001",
    "\u0002\u0083\u000f\u0003\u0002\u0002\u0002\u0084\u0085\b\t\u0001\u0002",
    "\u0085\u0086\u0007\u001e\u0002\u0002\u0086\u0087\u0005&\u0014\u0002",
    "\u0087\u0088\b\t\u0001\u0002\u0088\u008a\u0007\u000e\u0002\u0002\u0089",
    "\u008b\u0005\f\u0007\u0002\u008a\u0089\u0003\u0002\u0002\u0002\u008b",
    "\u008c\u0003\u0002\u0002\u0002\u008c\u008a\u0003\u0002\u0002\u0002\u008c",
    "\u008d\u0003\u0002\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e",
    "\u008f\u0007\u000f\u0002\u0002\u008f\u0090\b\t\u0001\u0002\u0090\u0011",
    "\u0003\u0002\u0002\u0002\u0091\u0092\u0007\u001f\u0002\u0002\u0092\u0093",
    "\b\n\u0001\u0002\u0093\u0013\u0003\u0002\u0002\u0002\u0094\u0095\u0007",
    " \u0002\u0002\u0095\u0096\b\u000b\u0001\u0002\u0096\u0015\u0003\u0002",
    "\u0002\u0002\u0097\u0098\u0007\u0019\u0002\u0002\u0098\u0099\u0007\n",
    "\u0002\u0002\u0099\u009a\b\f\u0001\u0002\u009a\u009b\u0005(\u0015\u0002",
    "\u009b\u00a3\b\f\u0001\u0002\u009c\u009d\u0007\r\u0002\u0002\u009d\u009e",
    "\b\f\u0001\u0002\u009e\u009f\u0005(\u0015\u0002\u009f\u00a0\b\f\u0001",
    "\u0002\u00a0\u00a2\u0003\u0002\u0002\u0002\u00a1\u009c\u0003\u0002\u0002",
    "\u0002\u00a2\u00a5\u0003\u0002\u0002\u0002\u00a3\u00a1\u0003\u0002\u0002",
    "\u0002\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a6\u0003\u0002\u0002",
    "\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a6\u00a7\u0007\u000b\u0002",
    "\u0002\u00a7\u00a8\b\f\u0001\u0002\u00a8\u0017\u0003\u0002\u0002\u0002",
    "\u00a9\u00aa\u0007\'\u0002\u0002\u00aa\u00ab\u0007\f\u0002\u0002\u00ab",
    "\u00ac\u0005(\u0015\u0002\u00ac\u00ad\b\r\u0001\u0002\u00ad\u0019\u0003",
    "\u0002\u0002\u0002\u00ae\u00af\u0007\'\u0002\u0002\u00af\u00b0\u0007",
    "\f\u0002\u0002\u00b0\u00b1\u0007\u0010\u0002\u0002\u00b1\u00b2\u0007",
    "\u0011\u0002\u0002\u00b2\u00b3\b\u000e\u0001\u0002\u00b3\u001b\u0003",
    "\u0002\u0002\u0002\u00b4\u00b5\u0007\'\u0002\u0002\u00b5\u00b6\b\u000f",
    "\u0001\u0002\u00b6\u00b7\u0007!\u0002\u0002\u00b7\u00b8\u0007\"\u0002",
    "\u0002\u00b8\u00b9\u0007\n\u0002\u0002\u00b9\u00ba\u0005(\u0015\u0002",
    "\u00ba\u00bb\b\u000f\u0001\u0002\u00bb\u00bc\u0007\u000b\u0002\u0002",
    "\u00bc\u001d\u0003\u0002\u0002\u0002\u00bd\u00be\u0007\'\u0002\u0002",
    "\u00be\u00bf\b\u0010\u0001\u0002\u00bf\u00c0\u0007\u0010\u0002\u0002",
    "\u00c0\u00c1\u0005(\u0015\u0002\u00c1\u00c2\u0007\u0011\u0002\u0002",
    "\u00c2\u00c3\u0007\f\u0002\u0002\u00c3\u00c4\u0005(\u0015\u0002\u00c4",
    "\u00c5\b\u0010\u0001\u0002\u00c5\u001f\u0003\u0002\u0002\u0002\u00c6",
    "\u00c7\u0007\'\u0002\u0002\u00c7\u00c9\u0007\n\u0002\u0002\u00c8\u00ca",
    "\u0005$\u0013\u0002\u00c9\u00c8\u0003\u0002\u0002\u0002\u00c9\u00ca",
    "\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003\u0002\u0002\u0002\u00cb\u00cc",
    "\u0007\u000b\u0002\u0002\u00cc\u00cd\b\u0011\u0001\u0002\u00cd!\u0003",
    "\u0002\u0002\u0002\u00ce\u00cf\u0007%\u0002\u0002\u00cf\u00d0\u0005",
    "(\u0015\u0002\u00d0\u00d1\b\u0012\u0001\u0002\u00d1#\u0003\u0002\u0002",
    "\u0002\u00d2\u00d3\u0005(\u0015\u0002\u00d3\u00da\b\u0013\u0001\u0002",
    "\u00d4\u00d5\u0007\r\u0002\u0002\u00d5\u00d6\u0005(\u0015\u0002\u00d6",
    "\u00d7\b\u0013\u0001\u0002\u00d7\u00d9\u0003\u0002\u0002\u0002\u00d8",
    "\u00d4\u0003\u0002\u0002\u0002\u00d9\u00dc\u0003\u0002\u0002\u0002\u00da",
    "\u00d8\u0003\u0002\u0002\u0002\u00da\u00db\u0003\u0002\u0002\u0002\u00db",
    "%\u0003\u0002\u0002\u0002\u00dc\u00da\u0003\u0002\u0002\u0002\u00dd",
    "\u00de\u0005(\u0015\u0002\u00de\u00df\t\u0002\u0002\u0002\u00df\u00e0",
    "\u0005(\u0015\u0002\u00e0\u00e1\b\u0014\u0001\u0002\u00e1\'\u0003\u0002",
    "\u0002\u0002\u00e2\u00e9\u0005*\u0016\u0002\u00e3\u00e4\t\u0003\u0002",
    "\u0002\u00e4\u00e5\u0005*\u0016\u0002\u00e5\u00e6\b\u0015\u0001\u0002",
    "\u00e6\u00e8\u0003\u0002\u0002\u0002\u00e7\u00e3\u0003\u0002\u0002\u0002",
    "\u00e8\u00eb\u0003\u0002\u0002\u0002\u00e9\u00e7\u0003\u0002\u0002\u0002",
    "\u00e9\u00ea\u0003\u0002\u0002\u0002\u00ea\u00ec\u0003\u0002\u0002\u0002",
    "\u00eb\u00e9\u0003\u0002\u0002\u0002\u00ec\u00ed\b\u0015\u0001\u0002",
    "\u00ed)\u0003\u0002\u0002\u0002\u00ee\u00f5\u0005,\u0017\u0002\u00ef",
    "\u00f0\t\u0004\u0002\u0002\u00f0\u00f1\u0005,\u0017\u0002\u00f1\u00f2",
    "\b\u0016\u0001\u0002\u00f2\u00f4\u0003\u0002\u0002\u0002\u00f3\u00ef",
    "\u0003\u0002\u0002\u0002\u00f4\u00f7\u0003\u0002\u0002\u0002\u00f5\u00f3",
    "\u0003\u0002\u0002\u0002\u00f5\u00f6\u0003\u0002\u0002\u0002\u00f6\u00f8",
    "\u0003\u0002\u0002\u0002\u00f7\u00f5\u0003\u0002\u0002\u0002\u00f8\u00f9",
    "\b\u0016\u0001\u0002\u00f9+\u0003\u0002\u0002\u0002\u00fa\u00fb\u0007",
    "&\u0002\u0002\u00fb\u0120\b\u0017\u0001\u0002\u00fc\u00fd\u0007(\u0002",
    "\u0002\u00fd\u0120\b\u0017\u0001\u0002\u00fe\u00ff\u0007\n\u0002\u0002",
    "\u00ff\u0100\u0005(\u0015\u0002\u0100\u0101\u0007\u000b\u0002\u0002",
    "\u0101\u0102\b\u0017\u0001\u0002\u0102\u0120\u0003\u0002\u0002\u0002",
    "\u0103\u0104\u0007\'\u0002\u0002\u0104\u0120\b\u0017\u0001\u0002\u0105",
    "\u0106\u0007\u001a\u0002\u0002\u0106\u0107\u0007\n\u0002\u0002\u0107",
    "\u0108\u0007\u000b\u0002\u0002\u0108\u0120\b\u0017\u0001\u0002\u0109",
    "\u010a\u0007\u001b\u0002\u0002\u010a\u010b\u0007\n\u0002\u0002\u010b",
    "\u010c\u0007\u000b\u0002\u0002\u010c\u0120\b\u0017\u0001\u0002\u010d",
    "\u010e\u0007\'\u0002\u0002\u010e\u010f\u0007!\u0002\u0002\u010f\u0110",
    "\u0007#\u0002\u0002\u0110\u0120\b\u0017\u0001\u0002\u0111\u0112\u0007",
    "\'\u0002\u0002\u0112\u0113\b\u0017\u0001\u0002\u0113\u0114\u0007\u0010",
    "\u0002\u0002\u0114\u0115\u0005(\u0015\u0002\u0115\u0116\b\u0017\u0001",
    "\u0002\u0116\u0117\u0007\u0011\u0002\u0002\u0117\u0120\u0003\u0002\u0002",
    "\u0002\u0118\u0119\u0007\'\u0002\u0002\u0119\u011b\u0007\n\u0002\u0002",
    "\u011a\u011c\u0005$\u0013\u0002\u011b\u011a\u0003\u0002\u0002\u0002",
    "\u011b\u011c\u0003\u0002\u0002\u0002\u011c\u011d\u0003\u0002\u0002\u0002",
    "\u011d\u011e\b\u0017\u0001\u0002\u011e\u0120\u0007\u000b\u0002\u0002",
    "\u011f\u00fa\u0003\u0002\u0002\u0002\u011f\u00fc\u0003\u0002\u0002\u0002",
    "\u011f\u00fe\u0003\u0002\u0002\u0002\u011f\u0103\u0003\u0002\u0002\u0002",
    "\u011f\u0105\u0003\u0002\u0002\u0002\u011f\u0109\u0003\u0002\u0002\u0002",
    "\u011f\u010d\u0003\u0002\u0002\u0002\u011f\u0111\u0003\u0002\u0002\u0002",
    "\u011f\u0118\u0003\u0002\u0002\u0002\u0120-\u0003\u0002\u0002\u0002",
    "\u00142;GNRYjs|\u0080\u008c\u00a3\u00c9\u00da\u00e9\u00f5\u011b\u011f"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ExpParser extends antlr4.Parser {

    static grammarFileName = "Exp.g4";
    static literalNames = [ null, null, null, "'+'", "'-'", "'*'", "'/'", 
                            "'%'", "'('", "')'", "'='", "','", "'{'", "'}'", 
                            "'['", "']'", "'int'", "'=='", "'!='", "'>'", 
                            "'>='", "'<'", "'<='", "'print'", "'read_int'", 
                            "'read_str'", "'if'", "'else'", "'while'", "'break'", 
                            "'continue'", "'.'", "'push'", "'length'", "'def'", 
                            "'return'" ];
    static symbolicNames = [ null, "COMMENT", "SPACE", "PLUS", "MINUS", 
                             "TIMES", "OVER", "REM", "OP_PAR", "CL_PAR", 
                             "ATTRIB", "COMMA", "OP_CUR", "CL_CUR", "OP_BRA", 
                             "CL_BRA", "INT", "EQ", "NE", "GT", "GE", "LT", 
                             "LE", "PRINT", "READ_INT", "READ_STR", "IF", 
                             "ELSE", "WHILE", "BREAK", "CONTINUE", "DOT", 
                             "PUSH", "LENGTH", "DEF", "RETURN", "NUMBER", 
                             "NAME", "STRING" ];
    static ruleNames = [ "program", "main", "func_return_type", "parameters", 
                         "func", "statement", "st_if", "st_while", "st_break", 
                         "st_continue", "st_print", "st_attrib", "st_array_new", 
                         "st_array_push", "st_array_set", "st_call", "st_return", 
                         "arguments", "comparison", "expression", "term", 
                         "factor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ExpParser.ruleNames;
        this.literalNames = ExpParser.literalNames;
        this.symbolicNames = ExpParser.symbolicNames;


    }

    get atn() {
        return atn;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ExpParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);

	              console.log(".source Test.src");
	              console.log(".class  public Test");
	              console.log(".super  java/lang/Object\n");
	              console.log(".method public <init>()V");
	              console.log("    aload_0");
	              console.log("    invokenonvirtual java/lang/Object/<init>()V");
	              console.log("    return");
	              console.log(".end method\n");
	            
	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ExpParser.DEF) {
	            this.state = 45;
	            this.func();
	            this.state = 50;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 51;
	        this.main();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	main() {
	    let localctx = new MainContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ExpParser.RULE_main);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);

	              console.log(".method public static main([Ljava/lang/String;)V\n");
	            
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (ExpParser.PRINT - 23)) | (1 << (ExpParser.IF - 23)) | (1 << (ExpParser.WHILE - 23)) | (1 << (ExpParser.BREAK - 23)) | (1 << (ExpParser.CONTINUE - 23)) | (1 << (ExpParser.RETURN - 23)) | (1 << (ExpParser.NAME - 23)))) !== 0)) {
	            this.state = 54;
	            this.statement();
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }

	              console.log("    return");
	              console.log(`    .limit stack ${maxStack}`);
	              console.log(`    .limit locals ${symbolsTable.length}`);
	              console.log(".end method");
	              console.log("\n; symbolsTable: ", symbolsTable);
	              console.log("\n; typesTable: ", typesTable);
	              console.log("\n; funcsTable: ", funcsTable.map(fn => `${fn.funcName}`));
	              console.log("\n");
	              checkUnusedVars();
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	func_return_type() {
	    let localctx = new Func_return_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ExpParser.RULE_func_return_type);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(ExpParser.INT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameters() {
	    let localctx = new ParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ExpParser.RULE_parameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(ExpParser.NAME);
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ExpParser.COMMA) {
	            this.state = 65;
	            this.match(ExpParser.COMMA);
	            this.state = 66;
	            this.match(ExpParser.NAME);
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	func() {
	    let localctx = new FuncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ExpParser.RULE_func);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(ExpParser.DEF);
	        this.state = 73;
	        localctx._NAME = this.match(ExpParser.NAME);
	        this.state = 74;
	        this.match(ExpParser.OP_PAR);
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ExpParser.NAME) {
	            this.state = 75;
	            localctx.p = this.parameters();
	        }

	        this.state = 78;
	        this.match(ExpParser.CL_PAR);
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ExpParser.INT) {
	            this.state = 79;
	            localctx.frt = this.func_return_type();
	        }

	        this.state = 82;
	        this.match(ExpParser.OP_CUR);

	              const funcName = (localctx._NAME===null ? null : localctx._NAME.text);

	              const findFunc = funcsTable.find(f => f.funcName === funcName);

	              if (findFunc) {
	                console.error(`ERROR: function '${funcName}' is already declared`);
	                process.exit(1);
	              } else {
	                const paramsArray = (localctx.p===null ? null : this._input.getText(new antlr4.Interval(localctx.p.start,localctx.p.stop))) ? (localctx.p===null ? null : this._input.getText(new antlr4.Interval(localctx.p.start,localctx.p.stop))).split(',') : [];

	                if (paramsArray.length !== [...new Set(paramsArray)].length) {
	                  console.error(`ERROR: parameter names must be unique`);
	                  process.exit(1);
	                } else {
	                  const repeatable = paramsArray.length > 0 ? 'I'.repeat(paramsArray.length) : '';

	                  const isVoid = (localctx.frt===null ? null : this._input.getText(new antlr4.Interval(localctx.frt.start,localctx.frt.stop))) ? false : true;

	                  console.log(`.method public static ${funcName}(${repeatable})${isVoid ? 'V' : 'I'}\n`);

	                  symbolsTable.push(...paramsArray);
	                  usedTable.push(...paramsArray);
	                  paramsArray.length > 0 ? paramsArray.map(par => typesTable.push('i')) : typesTable.push('i');
	                  funcsTable.push({ funcName, paramsCount: paramsArray.length, isVoid });
	                }
	              }
	            
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (ExpParser.PRINT - 23)) | (1 << (ExpParser.IF - 23)) | (1 << (ExpParser.WHILE - 23)) | (1 << (ExpParser.BREAK - 23)) | (1 << (ExpParser.CONTINUE - 23)) | (1 << (ExpParser.RETURN - 23)) | (1 << (ExpParser.NAME - 23)))) !== 0)) {
	            this.state = 84;
	            localctx.st = this.statement();
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 90;
	        this.match(ExpParser.CL_CUR);

	              const returnText = (localctx.frt===null ? null : this._input.getText(new antlr4.Interval(localctx.frt.start,localctx.frt.stop)));
	              const statementText = (localctx.st===null ? null : this._input.getText(new antlr4.Interval(localctx.st.start,localctx.st.stop)));
	              console.log(`; returnText => ${returnText}`);
	              console.log(`; statementText => ${statementText}`);
	              if (returnText && !statementText.includes('return')) {
	                console.error(`ERROR: missing return statement in returning function`);
	                process.exit(1);
	              } else if (!returnText && statementText.includes('return')) {
	                console.error(`ERROR: void function does not return a value`);
	                process.exit(1);
	              } else {
	                console.log("    return");
	                console.log(`    .limit stack ${maxStack}`);
	                console.log(`    .limit locals ${symbolsTable.length}`);
	                console.log(".end method");
	                console.log("\n; symbolsTable: ", symbolsTable);
	                console.log("\n; typesTable: ", typesTable);
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
	              }
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ExpParser.RULE_statement);
	    try {
	        this.state = 104;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 93;
	            this.st_print();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 94;
	            this.st_attrib();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 95;
	            this.st_if();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 96;
	            this.st_while();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 97;
	            this.st_break();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 98;
	            this.st_continue();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 99;
	            this.st_array_new();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 100;
	            this.st_array_push();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 101;
	            this.st_array_set();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 102;
	            this.st_call();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 103;
	            this.st_return();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	st_if() {
	    let localctx = new St_ifContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ExpParser.RULE_st_if);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.match(ExpParser.IF);
	        this.state = 107;
	        localctx.bytecode = this.comparison();

	              let ifLocal = ifStack;
	              ifStack += 1;
	              const { bytecode } = this._ctx.bytecode;
	              emit(`${bytecode} NOT_IF_${ifLocal}`, -2);
	            
	        this.state = 109;
	        this.match(ExpParser.OP_CUR);
	        this.state = 111; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 110;
	            this.statement();
	            this.state = 113; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (ExpParser.PRINT - 23)) | (1 << (ExpParser.IF - 23)) | (1 << (ExpParser.WHILE - 23)) | (1 << (ExpParser.BREAK - 23)) | (1 << (ExpParser.CONTINUE - 23)) | (1 << (ExpParser.RETURN - 23)) | (1 << (ExpParser.NAME - 23)))) !== 0));
	        this.state = 115;
	        this.match(ExpParser.CL_CUR);

	              emit(`goto END_ELSE_${ifLocal}`, 0);
	              console.log(`NOT_IF_${ifLocal}:`)
	            
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ExpParser.ELSE) {
	            this.state = 117;
	            this.match(ExpParser.ELSE);
	            this.state = 118;
	            this.match(ExpParser.OP_CUR);
	            this.state = 120; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 119;
	                this.statement();
	                this.state = 122; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (ExpParser.PRINT - 23)) | (1 << (ExpParser.IF - 23)) | (1 << (ExpParser.WHILE - 23)) | (1 << (ExpParser.BREAK - 23)) | (1 << (ExpParser.CONTINUE - 23)) | (1 << (ExpParser.RETURN - 23)) | (1 << (ExpParser.NAME - 23)))) !== 0));
	            this.state = 124;
	            this.match(ExpParser.CL_CUR);
	        }


	              console.log(`END_ELSE_${ifLocal}:`);
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	st_while() {
	    let localctx = new St_whileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ExpParser.RULE_st_while);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);

	              let whileLocal = whileStack;
	              whileLocalCounter = whileLocal;
	              isWhile = true;
	              whileStack += 1;
	              console.log(`BEGIN_WHILE_${whileLocal}:`);
	            
	        this.state = 131;
	        this.match(ExpParser.WHILE);
	        this.state = 132;
	        localctx.bytecode = this.comparison();

	              const { bytecode } = this._ctx.bytecode;
	              emit(`${bytecode} END_WHILE_${whileLocal}`, -2);
	            
	        this.state = 134;
	        this.match(ExpParser.OP_CUR);
	        this.state = 136; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 135;
	            this.statement();
	            this.state = 138; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (ExpParser.PRINT - 23)) | (1 << (ExpParser.IF - 23)) | (1 << (ExpParser.WHILE - 23)) | (1 << (ExpParser.BREAK - 23)) | (1 << (ExpParser.CONTINUE - 23)) | (1 << (ExpParser.RETURN - 23)) | (1 << (ExpParser.NAME - 23)))) !== 0));
	        this.state = 140;
	        this.match(ExpParser.CL_CUR);

	              emit(`goto BEGIN_WHILE_${whileLocal}`, 0);
	              console.log(`END_WHILE_${whileLocal}:`);
	              isWhile = false;
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	st_break() {
	    let localctx = new St_breakContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ExpParser.RULE_st_break);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.match(ExpParser.BREAK);

	              if(isWhile) {
	                emit(`goto END_WHILE_${whileLocalCounter}`, 0);
	              }
	              else {
	                console.error('ERROR: BREAK is outside the while loop');
	                process.exit(1);
	              }
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	st_continue() {
	    let localctx = new St_continueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ExpParser.RULE_st_continue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.match(ExpParser.CONTINUE);

	              if(isWhile) {
	                emit(`goto BEGIN_WHILE_${whileLocalCounter}`, 0);
	              }
	              else {
	                console.error('ERROR: CONTINUE is outside the while loop');
	                process.exit(1);
	              }
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	st_print() {
	    let localctx = new St_printContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ExpParser.RULE_st_print);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.match(ExpParser.PRINT);
	        this.state = 150;
	        this.match(ExpParser.OP_PAR);

	              emit("getstatic java/lang/System/out Ljava/io/PrintStream;", 1);
	            
	        this.state = 152;
	        localctx.e1 = this.expression();

	              printResolver(localctx.e1.type);
	            
	        this.state = 161;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ExpParser.COMMA) {
	            this.state = 154;
	            this.match(ExpParser.COMMA);

	                  emit("getstatic java/lang/System/out Ljava/io/PrintStream;", 1);
	                
	            this.state = 156;
	            localctx.e2 = this.expression();

	                  printResolver(localctx.e2.type);
	                
	            this.state = 163;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 164;
	        this.match(ExpParser.CL_PAR);

	              emit("getstatic java/lang/System/out Ljava/io/PrintStream;", 1);
	              emit("invokevirtual java/io/PrintStream/println()V\n", -1);
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	st_attrib() {
	    let localctx = new St_attribContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ExpParser.RULE_st_attrib);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        localctx._NAME = this.match(ExpParser.NAME);
	        this.state = 168;
	        this.match(ExpParser.ATTRIB);
	        this.state = 169;
	        localctx.exp = this.expression();

	              const variable = (localctx._NAME===null ? null : localctx._NAME.text);
	              const expType = localctx.exp.type;

	              if (!symbolsTable.find(symbol => symbol === variable)) {
	                symbolsTable.push(variable);
	                typesTable.push(expType);
	              }

	              const index = symbolsTable.findIndex(symbol => symbol === variable);

	              const savedType = typesTable[index];

	              validateTypesToStore(expType, savedType, index, variable);
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	st_array_new() {
	    let localctx = new St_array_newContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, ExpParser.RULE_st_array_new);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        localctx._NAME = this.match(ExpParser.NAME);
	        this.state = 173;
	        this.match(ExpParser.ATTRIB);
	        this.state = 174;
	        this.match(ExpParser.OP_BRA);
	        this.state = 175;
	        this.match(ExpParser.CL_BRA);

	              const variable = (localctx._NAME===null ? null : localctx._NAME.text);

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
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	st_array_push() {
	    let localctx = new St_array_pushContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, ExpParser.RULE_st_array_push);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        localctx._NAME = this.match(ExpParser.NAME);

	              const variable = (localctx._NAME===null ? null : localctx._NAME.text);

	              const index = symbolsTable.findIndex(symbol => symbol === variable);

	              if (index === -1)  {
	                console.error(`ERROR: operation not allowed! Variable '${variable}' needs to be declared first!`);
	                process.exit(1);
	              }

	              if (!usedTable.find(symbol => symbol === variable)) {
	                usedTable.push(variable);
	              }

	              emit(`aload ${index}`, 1);
	            
	        this.state = 180;
	        this.match(ExpParser.DOT);
	        this.state = 181;
	        this.match(ExpParser.PUSH);
	        this.state = 182;
	        this.match(ExpParser.OP_PAR);
	        this.state = 183;
	        localctx.e1 = this.expression();

	              if (localctx.e1.type === 'i') {
	                emit(`invokevirtual Array/push(I)V`, -2);
	              } else {
	                console.error(`ERROR: operation not allowed! Variable '${variable}' needs to be type of number`);
	                process.exit(1);
	              }
	            
	        this.state = 185;
	        this.match(ExpParser.CL_PAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	st_array_set() {
	    let localctx = new St_array_setContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, ExpParser.RULE_st_array_set);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        localctx._NAME = this.match(ExpParser.NAME);

	              const variable = (localctx._NAME===null ? null : localctx._NAME.text);

	              const index = symbolsTable.findIndex(symbol => symbol === variable);

	              if (index === -1)  {
	                console.error(`ERROR: operation not allowed! Variable '${variable}' needs to be declared first!`);
	                process.exit(1);
	              }

	              if (!usedTable.find(symbol => symbol === variable)) {
	                usedTable.push(variable);
	              }

	              emit(`aload ${index}`, 1);
	            
	        this.state = 189;
	        this.match(ExpParser.OP_BRA);
	        this.state = 190;
	        localctx.e1 = this.expression();
	        this.state = 191;
	        this.match(ExpParser.CL_BRA);
	        this.state = 192;
	        this.match(ExpParser.ATTRIB);
	        this.state = 193;
	        localctx.e2 = this.expression();

	              emit(`invokevirtual Array/set(II)V \n`, -3);
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	st_call() {
	    let localctx = new St_callContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, ExpParser.RULE_st_call);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        localctx._NAME = this.match(ExpParser.NAME);
	        this.state = 197;
	        this.match(ExpParser.OP_PAR);
	        this.state = 199;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 8)) & ~0x1f) == 0 && ((1 << (_la - 8)) & ((1 << (ExpParser.OP_PAR - 8)) | (1 << (ExpParser.READ_INT - 8)) | (1 << (ExpParser.READ_STR - 8)) | (1 << (ExpParser.NUMBER - 8)) | (1 << (ExpParser.NAME - 8)) | (1 << (ExpParser.STRING - 8)))) !== 0)) {
	            this.state = 198;
	            localctx.args = this.arguments();
	        }

	        this.state = 201;
	        this.match(ExpParser.CL_PAR);

	              const name = (localctx._NAME===null ? null : localctx._NAME.text);

	              const findFunc = funcsTable.find(f => f.funcName === name);

	              if (!findFunc) {
	                console.error(`ERROR: function '${name}' is not defined`);
	                process.exit(1);
	              } else {
	                const argsArray = (localctx.args===null ? null : this._input.getText(new antlr4.Interval(localctx.args.start,localctx.args.stop))) ? (localctx.args===null ? null : this._input.getText(new antlr4.Interval(localctx.args.start,localctx.args.stop))).split(',') : [];
	                if (findFunc.paramsCount !== argsArray.length) {
	                  console.error(`ERROR: wrong number of arguments`);
	                  process.exit(1);
	                } else if (!findFunc.isVoid) {
	                  console.error(`ERROR: return value cannot be ignored`);
	                  process.exit(1);
	                } else {
	                  const repeatable = argsArray.length > 0 ? 'I'.repeat(argsArray.length) : '';
	                  emit(`invokestatic Test/${name}(${repeatable})V \n`, 0);
	                }
	              }
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	st_return() {
	    let localctx = new St_returnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, ExpParser.RULE_st_return);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
	        this.match(ExpParser.RETURN);
	        this.state = 205;
	        localctx._expression = this.expression();

	              const eType = localctx._expression.type;
	              if (eType !== 'i') {
	                console.error(`ERROR: return value must be of integer type`);
	                process.exit(1);
	              } else {
	                emit('ireturn', 0);
	              }
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arguments() {
	    let localctx = new ArgumentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, ExpParser.RULE_arguments);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208;
	        localctx.e1 = this.expression();

	              if (localctx.e1.type !== 'i') {
	                console.error(`ERROR: all arguments must be integer`);
	                process.exit(1);
	              } else {
	                const v1 = (localctx.e1===null ? null : this._input.getText(new antlr4.Interval(localctx.e1.start,localctx.e1.stop)));
	                symbolsTable.push(v1);
	                usedTable.push(v1);
	                typesTable.push('i');
	              }
	            
	        this.state = 216;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ExpParser.COMMA) {
	            this.state = 210;
	            this.match(ExpParser.COMMA);
	            this.state = 211;
	            localctx.e2 = this.expression();

	                  if (localctx.e2.type !== 'i') {
	                    console.error(`ERROR: all arguments must be integer`);
	                    process.exit(1);
	                  } else {
	                    const v2 = (localctx.e2===null ? null : this._input.getText(new antlr4.Interval(localctx.e2.start,localctx.e2.stop)));
	                    symbolsTable.push(v2);
	                    usedTable.push(v2);
	                    typesTable.push('i');
	                  }
	                
	            this.state = 218;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparison() {
	    let localctx = new ComparisonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, ExpParser.RULE_comparison);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        localctx.e1 = this.expression();
	        this.state = 220;
	        localctx.op = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExpParser.EQ) | (1 << ExpParser.NE) | (1 << ExpParser.GT) | (1 << ExpParser.GE) | (1 << ExpParser.LT) | (1 << ExpParser.LE))) !== 0))) {
	            localctx.op = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 221;
	        localctx.e2 = this.expression();

	              if (localctx.e1.type !== localctx.e2.type) {
	                console.error(`ERROR: operation not allowed! you cannot mix types`);
	                process.exit(1);
	              }

	              if ((localctx.op === null ? 0 : localctx.op.type) === ExpParser.EQ) localctx.bytecode =  'if_icmpne'
	              if ((localctx.op === null ? 0 : localctx.op.type) === ExpParser.NE) localctx.bytecode =  'if_icmpeq'
	              if ((localctx.op === null ? 0 : localctx.op.type) === ExpParser.LT) localctx.bytecode =  'if_icmpge'
	              if ((localctx.op === null ? 0 : localctx.op.type) === ExpParser.GT) localctx.bytecode =  'if_icmple'
	              if ((localctx.op === null ? 0 : localctx.op.type) === ExpParser.LE) localctx.bytecode =  'if_icmpgt'
	              if ((localctx.op === null ? 0 : localctx.op.type) === ExpParser.GE) localctx.bytecode =  'if_icmplt'
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, ExpParser.RULE_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        localctx.t1 = this.term();
	        this.state = 231;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ExpParser.PLUS || _la===ExpParser.MINUS) {
	            this.state = 225;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===ExpParser.PLUS || _la===ExpParser.MINUS)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 226;
	            localctx.t2 = this.term();

	                  if (localctx.t1.type !== localctx.t2.type) {
	                    console.error(`ERROR: operation not allowed! you cannot mix types`);
	                    process.exit(1);
	                  }

	                  if ((localctx.op === null ? 0 : localctx.op.type) === ExpParser.PLUS) emit("iadd", -1)
	                  if ((localctx.op === null ? 0 : localctx.op.type) === ExpParser.MINUS) emit("isub", -1)
	                
	            this.state = 233;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }

	              localctx.type = localctx.t1.type
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, ExpParser.RULE_term);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 236;
	        localctx.f1 = this.factor();
	        this.state = 243;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExpParser.TIMES) | (1 << ExpParser.OVER) | (1 << ExpParser.REM))) !== 0)) {
	            this.state = 237;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExpParser.TIMES) | (1 << ExpParser.OVER) | (1 << ExpParser.REM))) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 238;
	            localctx.f2 = this.factor();

	                  if (localctx.f1.type !== localctx.f2.type) {
	                    console.error(`ERROR: operation not allowed! you cannot mix types`);
	                    process.exit(1);
	                  }

	                  if ((localctx.op === null ? 0 : localctx.op.type) == ExpParser.TIMES) emit("imul", -1)
	                  if ((localctx.op === null ? 0 : localctx.op.type) == ExpParser.OVER) emit("idiv", -1)
	                  if ((localctx.op === null ? 0 : localctx.op.type) == ExpParser.REM) emit("irem", -1)
	                
	            this.state = 245;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }

	              localctx.type = localctx.f1.type
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, ExpParser.RULE_factor);
	    var _la = 0; // Token type
	    try {
	        this.state = 285;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 248;
	            localctx._NUMBER = this.match(ExpParser.NUMBER);

	                  emit(`ldc ${(localctx._NUMBER===null ? null : localctx._NUMBER.text)}`, 1);
	                  localctx.type =  'i'
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 250;
	            localctx._STRING = this.match(ExpParser.STRING);

	                  emit(`ldc ${(localctx._STRING===null ? null : localctx._STRING.text)}`, 1);
	                  localctx.type =  's'
	                
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 252;
	            this.match(ExpParser.OP_PAR);
	            this.state = 253;
	            localctx._expression = this.expression();
	            this.state = 254;
	            this.match(ExpParser.CL_PAR);

	                  localctx.type = localctx._expression.type
	                
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 257;
	            localctx._NAME = this.match(ExpParser.NAME);

	                  const variable = (localctx._NAME===null ? null : localctx._NAME.text);

	                  const index = symbolsTable.findIndex(symbol => symbol === variable);

	                  if (index === -1) {
	                    console.error(`ERROR: Variable '${variable}' is not defined`);
	                    process.exit(1);
	                  } else {
	                    const type = typesTable[index];

	                    if (type === 'i') {
	                      emit(`iload ${index}`, 1);
	                      localctx.type =  type
	                    } else if (type === 's') {
	                      emit(`aload ${index}`, 1);
	                      localctx.type =  type
	                    } else if (type === 'a') {
	                      emit(`aload ${index}`, 1);
	                      localctx.type =  type
	                    }
	                    usedTable.push(variable);
	                  }
	                
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 259;
	            this.match(ExpParser.READ_INT);
	            this.state = 260;
	            this.match(ExpParser.OP_PAR);
	            this.state = 261;
	            this.match(ExpParser.CL_PAR);

	                  emit("invokestatic Runtime/readInt()I", 1);
	                  localctx.type =  'i'
	                
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 263;
	            this.match(ExpParser.READ_STR);
	            this.state = 264;
	            this.match(ExpParser.OP_PAR);
	            this.state = 265;
	            this.match(ExpParser.CL_PAR);

	                  emit("invokestatic Runtime/readString()Ljava/lang/String;", 1);
	                  localctx.type =  's'
	                
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 267;
	            localctx._NAME = this.match(ExpParser.NAME);
	            this.state = 268;
	            this.match(ExpParser.DOT);
	            this.state = 269;
	            this.match(ExpParser.LENGTH);

	                  localctx.type =  'i'

	                  const name = (localctx._NAME===null ? null : localctx._NAME.text);
	                  const i = symbolsTable.findIndex(symbol => symbol === name);

	                  const t = typesTable[i];

	                  if (t !== 'a') {
	                    console.error(`ERROR: operation not allowed! Variable '${name}' is not an array`);
	                    process.exit(1);
	                  } else {
	                    emit(`aload ${i}`, 1);
	                    emit(`invokevirtual Array/length()I`, 0);
	                  }
	                
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 271;
	            localctx._NAME = this.match(ExpParser.NAME);

	                  const variableName = (localctx._NAME===null ? null : localctx._NAME.text);
	                  const idx = symbolsTable.findIndex(symbol => symbol === variableName);

	                  const tp = typesTable[idx];

	                  if (tp !== 'a') {
	                    console.error(`ERROR: operation not allowed! Variable '${variableName}' is not an array`);
	                    process.exit(1);
	                  } else {
	                    emit(`aload ${idx}`, 1);
	                  }
	                
	            this.state = 273;
	            this.match(ExpParser.OP_BRA);
	            this.state = 274;
	            localctx.exp = this.expression();

	                  if (localctx.exp.type === 'i') {
	                    emit(`invokevirtual Array/get(I)I`, -1);
	                    localctx.type =  'i'
	                  } else {
	                    console.error(`ERROR: The expression '${localctx.exp.type}' must be a number to access the specific array item`);
	                    process.exit(1);
	                  }
	                
	            this.state = 276;
	            this.match(ExpParser.CL_BRA);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 278;
	            localctx._NAME = this.match(ExpParser.NAME);
	            this.state = 279;
	            this.match(ExpParser.OP_PAR);
	            this.state = 281;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 8)) & ~0x1f) == 0 && ((1 << (_la - 8)) & ((1 << (ExpParser.OP_PAR - 8)) | (1 << (ExpParser.READ_INT - 8)) | (1 << (ExpParser.READ_STR - 8)) | (1 << (ExpParser.NUMBER - 8)) | (1 << (ExpParser.NAME - 8)) | (1 << (ExpParser.STRING - 8)))) !== 0)) {
	                this.state = 280;
	                localctx.args = this.arguments();
	            }


	                  const fName = (localctx._NAME===null ? null : localctx._NAME.text);

	                  const findFunc = funcsTable.find(f => f.funcName === fName);

	                  if (!findFunc) {
	                    console.error(`ERROR: function '${fName}' was not defined `);
	                    process.exit(1);
	                  } else if (findFunc.isVoid) {
	                    console.error(`ERROR: a void function '${fName}' does not return a value `);
	                    process.exit(1);
	                  } else {
	                    const argsArray = (localctx.args===null ? null : this._input.getText(new antlr4.Interval(localctx.args.start,localctx.args.stop))) ? (localctx.args===null ? null : this._input.getText(new antlr4.Interval(localctx.args.start,localctx.args.stop))).split(',') : [];

	                    if (findFunc.paramsCount !== argsArray.length) {
	                      console.error(`ERROR: wrong number of arguments`);
	                      process.exit(1);
	                    } else {
	                      const repeatable = 'I'.repeat(findFunc.paramsCount);
	                      emit(`invokestatic Test/${fName}(${repeatable})I \n`, 0);
	                      localctx.type =  'i'
	                    }
	                  }
	                
	            this.state = 284;
	            this.match(ExpParser.CL_PAR);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ExpParser.EOF = antlr4.Token.EOF;
ExpParser.COMMENT = 1;
ExpParser.SPACE = 2;
ExpParser.PLUS = 3;
ExpParser.MINUS = 4;
ExpParser.TIMES = 5;
ExpParser.OVER = 6;
ExpParser.REM = 7;
ExpParser.OP_PAR = 8;
ExpParser.CL_PAR = 9;
ExpParser.ATTRIB = 10;
ExpParser.COMMA = 11;
ExpParser.OP_CUR = 12;
ExpParser.CL_CUR = 13;
ExpParser.OP_BRA = 14;
ExpParser.CL_BRA = 15;
ExpParser.INT = 16;
ExpParser.EQ = 17;
ExpParser.NE = 18;
ExpParser.GT = 19;
ExpParser.GE = 20;
ExpParser.LT = 21;
ExpParser.LE = 22;
ExpParser.PRINT = 23;
ExpParser.READ_INT = 24;
ExpParser.READ_STR = 25;
ExpParser.IF = 26;
ExpParser.ELSE = 27;
ExpParser.WHILE = 28;
ExpParser.BREAK = 29;
ExpParser.CONTINUE = 30;
ExpParser.DOT = 31;
ExpParser.PUSH = 32;
ExpParser.LENGTH = 33;
ExpParser.DEF = 34;
ExpParser.RETURN = 35;
ExpParser.NUMBER = 36;
ExpParser.NAME = 37;
ExpParser.STRING = 38;

ExpParser.RULE_program = 0;
ExpParser.RULE_main = 1;
ExpParser.RULE_func_return_type = 2;
ExpParser.RULE_parameters = 3;
ExpParser.RULE_func = 4;
ExpParser.RULE_statement = 5;
ExpParser.RULE_st_if = 6;
ExpParser.RULE_st_while = 7;
ExpParser.RULE_st_break = 8;
ExpParser.RULE_st_continue = 9;
ExpParser.RULE_st_print = 10;
ExpParser.RULE_st_attrib = 11;
ExpParser.RULE_st_array_new = 12;
ExpParser.RULE_st_array_push = 13;
ExpParser.RULE_st_array_set = 14;
ExpParser.RULE_st_call = 15;
ExpParser.RULE_st_return = 16;
ExpParser.RULE_arguments = 17;
ExpParser.RULE_comparison = 18;
ExpParser.RULE_expression = 19;
ExpParser.RULE_term = 20;
ExpParser.RULE_factor = 21;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpParser.RULE_program;
    }

	main() {
	    return this.getTypedRuleContext(MainContext,0);
	};

	func = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncContext);
	    } else {
	        return this.getTypedRuleContext(FuncContext,i);
	    }
	};


}



class MainContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpParser.RULE_main;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};


}



class Func_return_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpParser.RULE_func_return_type;
    }

	INT() {
	    return this.getToken(ExpParser.INT, 0);
	};


}



class ParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpParser.RULE_parameters;
    }

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ExpParser.NAME);
	    } else {
	        return this.getToken(ExpParser.NAME, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ExpParser.COMMA);
	    } else {
	        return this.getToken(ExpParser.COMMA, i);
	    }
	};



}



class FuncContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpParser.RULE_func;
        this._NAME = null; // Token
        this.p = null; // ParametersContext
        this.frt = null; // Func_return_typeContext
        this.st = null; // StatementContext
    }

	DEF() {
	    return this.getToken(ExpParser.DEF, 0);
	};

	NAME() {
	    return this.getToken(ExpParser.NAME, 0);
	};

	OP_PAR() {
	    return this.getToken(ExpParser.OP_PAR, 0);
	};

	CL_PAR() {
	    return this.getToken(ExpParser.CL_PAR, 0);
	};

	OP_CUR() {
	    return this.getToken(ExpParser.OP_CUR, 0);
	};

	CL_CUR() {
	    return this.getToken(ExpParser.CL_CUR, 0);
	};

	parameters() {
	    return this.getTypedRuleContext(ParametersContext,0);
	};

	func_return_type() {
	    return this.getTypedRuleContext(Func_return_typeContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpParser.RULE_statement;
    }

	st_print() {
	    return this.getTypedRuleContext(St_printContext,0);
	};

	st_attrib() {
	    return this.getTypedRuleContext(St_attribContext,0);
	};

	st_if() {
	    return this.getTypedRuleContext(St_ifContext,0);
	};

	st_while() {
	    return this.getTypedRuleContext(St_whileContext,0);
	};

	st_break() {
	    return this.getTypedRuleContext(St_breakContext,0);
	};

	st_continue() {
	    return this.getTypedRuleContext(St_continueContext,0);
	};

	st_array_new() {
	    return this.getTypedRuleContext(St_array_newContext,0);
	};

	st_array_push() {
	    return this.getTypedRuleContext(St_array_pushContext,0);
	};

	st_array_set() {
	    return this.getTypedRuleContext(St_array_setContext,0);
	};

	st_call() {
	    return this.getTypedRuleContext(St_callContext,0);
	};

	st_return() {
	    return this.getTypedRuleContext(St_returnContext,0);
	};


}



class St_ifContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpParser.RULE_st_if;
        this.bytecode = null; // ComparisonContext
    }

	IF() {
	    return this.getToken(ExpParser.IF, 0);
	};

	OP_CUR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ExpParser.OP_CUR);
	    } else {
	        return this.getToken(ExpParser.OP_CUR, i);
	    }
	};


	CL_CUR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ExpParser.CL_CUR);
	    } else {
	        return this.getToken(ExpParser.CL_CUR, i);
	    }
	};


	comparison() {
	    return this.getTypedRuleContext(ComparisonContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(ExpParser.ELSE, 0);
	};


}



class St_whileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpParser.RULE_st_while;
        this.bytecode = null; // ComparisonContext
    }

	WHILE() {
	    return this.getToken(ExpParser.WHILE, 0);
	};

	OP_CUR() {
	    return this.getToken(ExpParser.OP_CUR, 0);
	};

	CL_CUR() {
	    return this.getToken(ExpParser.CL_CUR, 0);
	};

	comparison() {
	    return this.getTypedRuleContext(ComparisonContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};


}



class St_breakContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpParser.RULE_st_break;
    }

	BREAK() {
	    return this.getToken(ExpParser.BREAK, 0);
	};


}



class St_continueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpParser.RULE_st_continue;
    }

	CONTINUE() {
	    return this.getToken(ExpParser.CONTINUE, 0);
	};


}



class St_printContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpParser.RULE_st_print;
        this.e1 = null; // ExpressionContext
        this.e2 = null; // ExpressionContext
    }

	PRINT() {
	    return this.getToken(ExpParser.PRINT, 0);
	};

	OP_PAR() {
	    return this.getToken(ExpParser.OP_PAR, 0);
	};

	CL_PAR() {
	    return this.getToken(ExpParser.CL_PAR, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ExpParser.COMMA);
	    } else {
	        return this.getToken(ExpParser.COMMA, i);
	    }
	};



}



class St_attribContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpParser.RULE_st_attrib;
        this._NAME = null; // Token
        this.exp = null; // ExpressionContext
    }

	NAME() {
	    return this.getToken(ExpParser.NAME, 0);
	};

	ATTRIB() {
	    return this.getToken(ExpParser.ATTRIB, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};


}



class St_array_newContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpParser.RULE_st_array_new;
        this._NAME = null; // Token
    }

	NAME() {
	    return this.getToken(ExpParser.NAME, 0);
	};

	ATTRIB() {
	    return this.getToken(ExpParser.ATTRIB, 0);
	};

	OP_BRA() {
	    return this.getToken(ExpParser.OP_BRA, 0);
	};

	CL_BRA() {
	    return this.getToken(ExpParser.CL_BRA, 0);
	};


}



class St_array_pushContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpParser.RULE_st_array_push;
        this._NAME = null; // Token
        this.e1 = null; // ExpressionContext
    }

	NAME() {
	    return this.getToken(ExpParser.NAME, 0);
	};

	DOT() {
	    return this.getToken(ExpParser.DOT, 0);
	};

	PUSH() {
	    return this.getToken(ExpParser.PUSH, 0);
	};

	OP_PAR() {
	    return this.getToken(ExpParser.OP_PAR, 0);
	};

	CL_PAR() {
	    return this.getToken(ExpParser.CL_PAR, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};


}



class St_array_setContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpParser.RULE_st_array_set;
        this._NAME = null; // Token
        this.e1 = null; // ExpressionContext
        this.e2 = null; // ExpressionContext
    }

	NAME() {
	    return this.getToken(ExpParser.NAME, 0);
	};

	OP_BRA() {
	    return this.getToken(ExpParser.OP_BRA, 0);
	};

	CL_BRA() {
	    return this.getToken(ExpParser.CL_BRA, 0);
	};

	ATTRIB() {
	    return this.getToken(ExpParser.ATTRIB, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};


}



class St_callContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpParser.RULE_st_call;
        this._NAME = null; // Token
        this.args = null; // ArgumentsContext
    }

	NAME() {
	    return this.getToken(ExpParser.NAME, 0);
	};

	OP_PAR() {
	    return this.getToken(ExpParser.OP_PAR, 0);
	};

	CL_PAR() {
	    return this.getToken(ExpParser.CL_PAR, 0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};


}



class St_returnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpParser.RULE_st_return;
        this._expression = null; // ExpressionContext
    }

	RETURN() {
	    return this.getToken(ExpParser.RETURN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};


}



class ArgumentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpParser.RULE_arguments;
        this.e1 = null; // ExpressionContext
        this.e2 = null; // ExpressionContext
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ExpParser.COMMA);
	    } else {
	        return this.getToken(ExpParser.COMMA, i);
	    }
	};



}



class ComparisonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpParser.RULE_comparison;
        this.bytecode = null
        this.e1 = null; // ExpressionContext
        this.op = null; // Token
        this.e2 = null; // ExpressionContext
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	EQ() {
	    return this.getToken(ExpParser.EQ, 0);
	};

	NE() {
	    return this.getToken(ExpParser.NE, 0);
	};

	LT() {
	    return this.getToken(ExpParser.LT, 0);
	};

	LE() {
	    return this.getToken(ExpParser.LE, 0);
	};

	GT() {
	    return this.getToken(ExpParser.GT, 0);
	};

	GE() {
	    return this.getToken(ExpParser.GE, 0);
	};


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpParser.RULE_expression;
        this.type = null
        this.t1 = null; // TermContext
        this.op = null; // Token
        this.t2 = null; // TermContext
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ExpParser.PLUS);
	    } else {
	        return this.getToken(ExpParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ExpParser.MINUS);
	    } else {
	        return this.getToken(ExpParser.MINUS, i);
	    }
	};



}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpParser.RULE_term;
        this.type = null
        this.f1 = null; // FactorContext
        this.op = null; // Token
        this.f2 = null; // FactorContext
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	TIMES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ExpParser.TIMES);
	    } else {
	        return this.getToken(ExpParser.TIMES, i);
	    }
	};


	OVER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ExpParser.OVER);
	    } else {
	        return this.getToken(ExpParser.OVER, i);
	    }
	};


	REM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ExpParser.REM);
	    } else {
	        return this.getToken(ExpParser.REM, i);
	    }
	};



}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpParser.RULE_factor;
        this.type = null
        this._NUMBER = null; // Token
        this._STRING = null; // Token
        this._expression = null; // ExpressionContext
        this._NAME = null; // Token
        this.exp = null; // ExpressionContext
        this.args = null; // ArgumentsContext
    }

	NUMBER() {
	    return this.getToken(ExpParser.NUMBER, 0);
	};

	STRING() {
	    return this.getToken(ExpParser.STRING, 0);
	};

	OP_PAR() {
	    return this.getToken(ExpParser.OP_PAR, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CL_PAR() {
	    return this.getToken(ExpParser.CL_PAR, 0);
	};

	NAME() {
	    return this.getToken(ExpParser.NAME, 0);
	};

	READ_INT() {
	    return this.getToken(ExpParser.READ_INT, 0);
	};

	READ_STR() {
	    return this.getToken(ExpParser.READ_STR, 0);
	};

	DOT() {
	    return this.getToken(ExpParser.DOT, 0);
	};

	LENGTH() {
	    return this.getToken(ExpParser.LENGTH, 0);
	};

	OP_BRA() {
	    return this.getToken(ExpParser.OP_BRA, 0);
	};

	CL_BRA() {
	    return this.getToken(ExpParser.CL_BRA, 0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};


}




ExpParser.ProgramContext = ProgramContext; 
ExpParser.MainContext = MainContext; 
ExpParser.Func_return_typeContext = Func_return_typeContext; 
ExpParser.ParametersContext = ParametersContext; 
ExpParser.FuncContext = FuncContext; 
ExpParser.StatementContext = StatementContext; 
ExpParser.St_ifContext = St_ifContext; 
ExpParser.St_whileContext = St_whileContext; 
ExpParser.St_breakContext = St_breakContext; 
ExpParser.St_continueContext = St_continueContext; 
ExpParser.St_printContext = St_printContext; 
ExpParser.St_attribContext = St_attribContext; 
ExpParser.St_array_newContext = St_array_newContext; 
ExpParser.St_array_pushContext = St_array_pushContext; 
ExpParser.St_array_setContext = St_array_setContext; 
ExpParser.St_callContext = St_callContext; 
ExpParser.St_returnContext = St_returnContext; 
ExpParser.ArgumentsContext = ArgumentsContext; 
ExpParser.ComparisonContext = ComparisonContext; 
ExpParser.ExpressionContext = ExpressionContext; 
ExpParser.TermContext = TermContext; 
ExpParser.FactorContext = FactorContext; 
