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
        console.error(`ERROR: '${variable}' is a ${savedType === 'i' ? 'number' : 'string'}`);
        process.exit(1);
      }
    }


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003&\u010d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0003\u0002\u0003\u0002\u0007\u0002-\n",
    "\u0002\f\u0002\u000e\u00020\u000b\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0007\u00036\n\u0003\f\u0003\u000e\u00039\u000b\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u0004G\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0005\u0005M\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0007\u0005S\n\u0005\f\u0005\u000e\u0005V\u000b\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006^",
    "\n\u0006\f\u0006\u000e\u0006a\u000b\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0006\u0007h\n\u0007\r\u0007\u000e\u0007",
    "i\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0006",
    "\u0007q\n\u0007\r\u0007\u000e\u0007r\u0003\u0007\u0003\u0007\u0005\u0007",
    "w\n\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0006\b\u0081\n\b\r\b\u000e\b\u0082\u0003\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u0098\n\u000b\f\u000b\u000e",
    "\u000b\u009b\u000b\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00c0\n",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u00cb\n\u0011",
    "\f\u0011\u000e\u0011\u00ce\u000b\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0007\u0013\u00da\n\u0013\f\u0013\u000e\u0013\u00dd",
    "\u000b\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0007\u0014\u00e6\n\u0014\f\u0014\u000e\u0014",
    "\u00e9\u000b\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u010b\n\u0015",
    "\u0003\u0015\u0002\u0002\u0016\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(\u0002\u0005\u0003\u0002\u0012",
    "\u0017\u0003\u0002\u0005\u0006\u0003\u0002\u0007\t\u0002\u0116\u0002",
    "*\u0003\u0002\u0002\u0002\u00043\u0003\u0002\u0002\u0002\u0006F\u0003",
    "\u0002\u0002\u0002\bH\u0003\u0002\u0002\u0002\nZ\u0003\u0002\u0002\u0002",
    "\fb\u0003\u0002\u0002\u0002\u000ez\u0003\u0002\u0002\u0002\u0010\u0087",
    "\u0003\u0002\u0002\u0002\u0012\u008a\u0003\u0002\u0002\u0002\u0014\u008d",
    "\u0003\u0002\u0002\u0002\u0016\u009f\u0003\u0002\u0002\u0002\u0018\u00a4",
    "\u0003\u0002\u0002\u0002\u001a\u00aa\u0003\u0002\u0002\u0002\u001c\u00b3",
    "\u0003\u0002\u0002\u0002\u001e\u00bc\u0003\u0002\u0002\u0002 \u00c4",
    "\u0003\u0002\u0002\u0002\"\u00cf\u0003\u0002\u0002\u0002$\u00d4\u0003",
    "\u0002\u0002\u0002&\u00e0\u0003\u0002\u0002\u0002(\u010a\u0003\u0002",
    "\u0002\u0002*.\b\u0002\u0001\u0002+-\u0005\b\u0005\u0002,+\u0003\u0002",
    "\u0002\u0002-0\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002./\u0003",
    "\u0002\u0002\u0002/1\u0003\u0002\u0002\u00020.\u0003\u0002\u0002\u0002",
    "12\u0005\u0004\u0003\u00022\u0003\u0003\u0002\u0002\u000237\b\u0003",
    "\u0001\u000246\u0005\u0006\u0004\u000254\u0003\u0002\u0002\u000269\u0003",
    "\u0002\u0002\u000275\u0003\u0002\u0002\u000278\u0003\u0002\u0002\u0002",
    "8:\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u0002:;\b\u0003\u0001",
    "\u0002;\u0005\u0003\u0002\u0002\u0002<G\u0005\u0014\u000b\u0002=G\u0005",
    "\u0016\f\u0002>G\u0005\f\u0007\u0002?G\u0005\u000e\b\u0002@G\u0005\u0010",
    "\t\u0002AG\u0005\u0012\n\u0002BG\u0005\u0018\r\u0002CG\u0005\u001a\u000e",
    "\u0002DG\u0005\u001c\u000f\u0002EG\u0005\u001e\u0010\u0002F<\u0003\u0002",
    "\u0002\u0002F=\u0003\u0002\u0002\u0002F>\u0003\u0002\u0002\u0002F?\u0003",
    "\u0002\u0002\u0002F@\u0003\u0002\u0002\u0002FA\u0003\u0002\u0002\u0002",
    "FB\u0003\u0002\u0002\u0002FC\u0003\u0002\u0002\u0002FD\u0003\u0002\u0002",
    "\u0002FE\u0003\u0002\u0002\u0002G\u0007\u0003\u0002\u0002\u0002HI\u0007",
    "#\u0002\u0002IJ\u0007%\u0002\u0002JL\u0007\n\u0002\u0002KM\u0005\n\u0006",
    "\u0002LK\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002MN\u0003\u0002",
    "\u0002\u0002NO\u0007\u000b\u0002\u0002OP\u0007\u000e\u0002\u0002PT\b",
    "\u0005\u0001\u0002QS\u0005\u0006\u0004\u0002RQ\u0003\u0002\u0002\u0002",
    "SV\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002",
    "\u0002UW\u0003\u0002\u0002\u0002VT\u0003\u0002\u0002\u0002WX\u0007\u000f",
    "\u0002\u0002XY\b\u0005\u0001\u0002Y\t\u0003\u0002\u0002\u0002Z_\u0007",
    "%\u0002\u0002[\\\u0007\r\u0002\u0002\\^\u0007%\u0002\u0002][\u0003\u0002",
    "\u0002\u0002^a\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002_`\u0003",
    "\u0002\u0002\u0002`\u000b\u0003\u0002\u0002\u0002a_\u0003\u0002\u0002",
    "\u0002bc\u0007\u001b\u0002\u0002cd\u0005\"\u0012\u0002de\b\u0007\u0001",
    "\u0002eg\u0007\u000e\u0002\u0002fh\u0005\u0006\u0004\u0002gf\u0003\u0002",
    "\u0002\u0002hi\u0003\u0002\u0002\u0002ig\u0003\u0002\u0002\u0002ij\u0003",
    "\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002kl\u0007\u000f\u0002\u0002",
    "lv\b\u0007\u0001\u0002mn\u0007\u001c\u0002\u0002np\u0007\u000e\u0002",
    "\u0002oq\u0005\u0006\u0004\u0002po\u0003\u0002\u0002\u0002qr\u0003\u0002",
    "\u0002\u0002rp\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002st\u0003",
    "\u0002\u0002\u0002tu\u0007\u000f\u0002\u0002uw\u0003\u0002\u0002\u0002",
    "vm\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002",
    "\u0002xy\b\u0007\u0001\u0002y\r\u0003\u0002\u0002\u0002z{\b\b\u0001",
    "\u0002{|\u0007\u001d\u0002\u0002|}\u0005\"\u0012\u0002}~\b\b\u0001\u0002",
    "~\u0080\u0007\u000e\u0002\u0002\u007f\u0081\u0005\u0006\u0004\u0002",
    "\u0080\u007f\u0003\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002",
    "\u0082\u0080\u0003\u0002\u0002\u0002\u0082\u0083\u0003\u0002\u0002\u0002",
    "\u0083\u0084\u0003\u0002\u0002\u0002\u0084\u0085\u0007\u000f\u0002\u0002",
    "\u0085\u0086\b\b\u0001\u0002\u0086\u000f\u0003\u0002\u0002\u0002\u0087",
    "\u0088\u0007\u001e\u0002\u0002\u0088\u0089\b\t\u0001\u0002\u0089\u0011",
    "\u0003\u0002\u0002\u0002\u008a\u008b\u0007\u001f\u0002\u0002\u008b\u008c",
    "\b\n\u0001\u0002\u008c\u0013\u0003\u0002\u0002\u0002\u008d\u008e\u0007",
    "\u0018\u0002\u0002\u008e\u008f\u0007\n\u0002\u0002\u008f\u0090\b\u000b",
    "\u0001\u0002\u0090\u0091\u0005$\u0013\u0002\u0091\u0099\b\u000b\u0001",
    "\u0002\u0092\u0093\u0007\r\u0002\u0002\u0093\u0094\b\u000b\u0001\u0002",
    "\u0094\u0095\u0005$\u0013\u0002\u0095\u0096\b\u000b\u0001\u0002\u0096",
    "\u0098\u0003\u0002\u0002\u0002\u0097\u0092\u0003\u0002\u0002\u0002\u0098",
    "\u009b\u0003\u0002\u0002\u0002\u0099\u0097\u0003\u0002\u0002\u0002\u0099",
    "\u009a\u0003\u0002\u0002\u0002\u009a\u009c\u0003\u0002\u0002\u0002\u009b",
    "\u0099\u0003\u0002\u0002\u0002\u009c\u009d\u0007\u000b\u0002\u0002\u009d",
    "\u009e\b\u000b\u0001\u0002\u009e\u0015\u0003\u0002\u0002\u0002\u009f",
    "\u00a0\u0007%\u0002\u0002\u00a0\u00a1\u0007\f\u0002\u0002\u00a1\u00a2",
    "\u0005$\u0013\u0002\u00a2\u00a3\b\f\u0001\u0002\u00a3\u0017\u0003\u0002",
    "\u0002\u0002\u00a4\u00a5\u0007%\u0002\u0002\u00a5\u00a6\u0007\f\u0002",
    "\u0002\u00a6\u00a7\u0007\u0010\u0002\u0002\u00a7\u00a8\u0007\u0011\u0002",
    "\u0002\u00a8\u00a9\b\r\u0001\u0002\u00a9\u0019\u0003\u0002\u0002\u0002",
    "\u00aa\u00ab\u0007%\u0002\u0002\u00ab\u00ac\b\u000e\u0001\u0002\u00ac",
    "\u00ad\u0007 \u0002\u0002\u00ad\u00ae\u0007!\u0002\u0002\u00ae\u00af",
    "\u0007\n\u0002\u0002\u00af\u00b0\u0005$\u0013\u0002\u00b0\u00b1\b\u000e",
    "\u0001\u0002\u00b1\u00b2\u0007\u000b\u0002\u0002\u00b2\u001b\u0003\u0002",
    "\u0002\u0002\u00b3\u00b4\u0007%\u0002\u0002\u00b4\u00b5\b\u000f\u0001",
    "\u0002\u00b5\u00b6\u0007\u0010\u0002\u0002\u00b6\u00b7\u0005$\u0013",
    "\u0002\u00b7\u00b8\u0007\u0011\u0002\u0002\u00b8\u00b9\u0007\f\u0002",
    "\u0002\u00b9\u00ba\u0005$\u0013\u0002\u00ba\u00bb\b\u000f\u0001\u0002",
    "\u00bb\u001d\u0003\u0002\u0002\u0002\u00bc\u00bd\u0007%\u0002\u0002",
    "\u00bd\u00bf\u0007\n\u0002\u0002\u00be\u00c0\u0005 \u0011\u0002\u00bf",
    "\u00be\u0003\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002\u00c0",
    "\u00c1\u0003\u0002\u0002\u0002\u00c1\u00c2\u0007\u000b\u0002\u0002\u00c2",
    "\u00c3\b\u0010\u0001\u0002\u00c3\u001f\u0003\u0002\u0002\u0002\u00c4",
    "\u00c5\u0005$\u0013\u0002\u00c5\u00cc\b\u0011\u0001\u0002\u00c6\u00c7",
    "\u0007\r\u0002\u0002\u00c7\u00c8\u0005$\u0013\u0002\u00c8\u00c9\b\u0011",
    "\u0001\u0002\u00c9\u00cb\u0003\u0002\u0002\u0002\u00ca\u00c6\u0003\u0002",
    "\u0002\u0002\u00cb\u00ce\u0003\u0002\u0002\u0002\u00cc\u00ca\u0003\u0002",
    "\u0002\u0002\u00cc\u00cd\u0003\u0002\u0002\u0002\u00cd!\u0003\u0002",
    "\u0002\u0002\u00ce\u00cc\u0003\u0002\u0002\u0002\u00cf\u00d0\u0005$",
    "\u0013\u0002\u00d0\u00d1\t\u0002\u0002\u0002\u00d1\u00d2\u0005$\u0013",
    "\u0002\u00d2\u00d3\b\u0012\u0001\u0002\u00d3#\u0003\u0002\u0002\u0002",
    "\u00d4\u00db\u0005&\u0014\u0002\u00d5\u00d6\t\u0003\u0002\u0002\u00d6",
    "\u00d7\u0005&\u0014\u0002\u00d7\u00d8\b\u0013\u0001\u0002\u00d8\u00da",
    "\u0003\u0002\u0002\u0002\u00d9\u00d5\u0003\u0002\u0002\u0002\u00da\u00dd",
    "\u0003\u0002\u0002\u0002\u00db\u00d9\u0003\u0002\u0002\u0002\u00db\u00dc",
    "\u0003\u0002\u0002\u0002\u00dc\u00de\u0003\u0002\u0002\u0002\u00dd\u00db",
    "\u0003\u0002\u0002\u0002\u00de\u00df\b\u0013\u0001\u0002\u00df%\u0003",
    "\u0002\u0002\u0002\u00e0\u00e7\u0005(\u0015\u0002\u00e1\u00e2\t\u0004",
    "\u0002\u0002\u00e2\u00e3\u0005(\u0015\u0002\u00e3\u00e4\b\u0014\u0001",
    "\u0002\u00e4\u00e6\u0003\u0002\u0002\u0002\u00e5\u00e1\u0003\u0002\u0002",
    "\u0002\u00e6\u00e9\u0003\u0002\u0002\u0002\u00e7\u00e5\u0003\u0002\u0002",
    "\u0002\u00e7\u00e8\u0003\u0002\u0002\u0002\u00e8\u00ea\u0003\u0002\u0002",
    "\u0002\u00e9\u00e7\u0003\u0002\u0002\u0002\u00ea\u00eb\b\u0014\u0001",
    "\u0002\u00eb\'\u0003\u0002\u0002\u0002\u00ec\u00ed\u0007$\u0002\u0002",
    "\u00ed\u010b\b\u0015\u0001\u0002\u00ee\u00ef\u0007&\u0002\u0002\u00ef",
    "\u010b\b\u0015\u0001\u0002\u00f0\u00f1\u0007\n\u0002\u0002\u00f1\u00f2",
    "\u0005$\u0013\u0002\u00f2\u00f3\u0007\u000b\u0002\u0002\u00f3\u00f4",
    "\b\u0015\u0001\u0002\u00f4\u010b\u0003\u0002\u0002\u0002\u00f5\u00f6",
    "\u0007%\u0002\u0002\u00f6\u010b\b\u0015\u0001\u0002\u00f7\u00f8\u0007",
    "\u0019\u0002\u0002\u00f8\u00f9\u0007\n\u0002\u0002\u00f9\u00fa\u0007",
    "\u000b\u0002\u0002\u00fa\u010b\b\u0015\u0001\u0002\u00fb\u00fc\u0007",
    "\u001a\u0002\u0002\u00fc\u00fd\u0007\n\u0002\u0002\u00fd\u00fe\u0007",
    "\u000b\u0002\u0002\u00fe\u010b\b\u0015\u0001\u0002\u00ff\u0100\u0007",
    "%\u0002\u0002\u0100\u0101\u0007 \u0002\u0002\u0101\u0102\u0007\"\u0002",
    "\u0002\u0102\u010b\b\u0015\u0001\u0002\u0103\u0104\u0007%\u0002\u0002",
    "\u0104\u0105\b\u0015\u0001\u0002\u0105\u0106\u0007\u0010\u0002\u0002",
    "\u0106\u0107\u0005$\u0013\u0002\u0107\u0108\b\u0015\u0001\u0002\u0108",
    "\u0109\u0007\u0011\u0002\u0002\u0109\u010b\u0003\u0002\u0002\u0002\u010a",
    "\u00ec\u0003\u0002\u0002\u0002\u010a\u00ee\u0003\u0002\u0002\u0002\u010a",
    "\u00f0\u0003\u0002\u0002\u0002\u010a\u00f5\u0003\u0002\u0002\u0002\u010a",
    "\u00f7\u0003\u0002\u0002\u0002\u010a\u00fb\u0003\u0002\u0002\u0002\u010a",
    "\u00ff\u0003\u0002\u0002\u0002\u010a\u0103\u0003\u0002\u0002\u0002\u010b",
    ")\u0003\u0002\u0002\u0002\u0012.7FLT_irv\u0082\u0099\u00bf\u00cc\u00db",
    "\u00e7\u010a"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ExpParser extends antlr4.Parser {

    static grammarFileName = "Exp.g4";
    static literalNames = [ null, null, null, "'+'", "'-'", "'*'", "'/'", 
                            "'%'", "'('", "')'", "'='", "','", "'{'", "'}'", 
                            "'['", "']'", "'=='", "'!='", "'>'", "'>='", 
                            "'<'", "'<='", "'print'", "'read_int'", "'read_str'", 
                            "'if'", "'else'", "'while'", "'break'", "'continue'", 
                            "'.'", "'push'", "'length'", "'def'" ];
    static symbolicNames = [ null, "COMMENT", "SPACE", "PLUS", "MINUS", 
                             "TIMES", "OVER", "REM", "OP_PAR", "CL_PAR", 
                             "ATTRIB", "COMMA", "OP_CUR", "CL_CUR", "OP_BRA", 
                             "CL_BRA", "EQ", "NE", "GT", "GE", "LT", "LE", 
                             "PRINT", "READ_INT", "READ_STR", "IF", "ELSE", 
                             "WHILE", "BREAK", "CONTINUE", "DOT", "PUSH", 
                             "LENGTH", "DEF", "NUMBER", "NAME", "STRING" ];
    static ruleNames = [ "program", "main", "statement", "func", "parameters", 
                         "st_if", "st_while", "st_break", "st_continue", 
                         "st_print", "st_attrib", "st_array_new", "st_array_push", 
                         "st_array_set", "st_call", "arguments", "comparison", 
                         "expression", "term", "factor" ];

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
	            
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ExpParser.DEF) {
	            this.state = 41;
	            this.func();
	            this.state = 46;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 47;
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
	              // symbolsTable.push('args');
	            
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 22)) & ~0x1f) == 0 && ((1 << (_la - 22)) & ((1 << (ExpParser.PRINT - 22)) | (1 << (ExpParser.IF - 22)) | (1 << (ExpParser.WHILE - 22)) | (1 << (ExpParser.BREAK - 22)) | (1 << (ExpParser.CONTINUE - 22)) | (1 << (ExpParser.NAME - 22)))) !== 0)) {
	            this.state = 50;
	            this.statement();
	            this.state = 55;
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ExpParser.RULE_statement);
	    try {
	        this.state = 68;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 58;
	            this.st_print();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 59;
	            this.st_attrib();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 60;
	            this.st_if();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 61;
	            this.st_while();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 62;
	            this.st_break();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 63;
	            this.st_continue();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 64;
	            this.st_array_new();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 65;
	            this.st_array_push();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 66;
	            this.st_array_set();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 67;
	            this.st_call();
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



	func() {
	    let localctx = new FuncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ExpParser.RULE_func);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.match(ExpParser.DEF);
	        this.state = 71;
	        localctx._NAME = this.match(ExpParser.NAME);
	        this.state = 72;
	        this.match(ExpParser.OP_PAR);
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ExpParser.NAME) {
	            this.state = 73;
	            localctx.p = this.parameters();
	        }

	        this.state = 76;
	        this.match(ExpParser.CL_PAR);
	        this.state = 77;
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

	                  console.log(`.method public static ${funcName}(${repeatable})V\n`);

	                  symbolsTable.push(...paramsArray);
	                  usedTable.push(...paramsArray);
	                  paramsArray.length > 0 ? paramsArray.map(par => typesTable.push('i')) : typesTable.push('i');
	                  funcsTable.push({ funcName, paramsCount: paramsArray.length });
	                }
	              }
	            
	        this.state = 82;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 22)) & ~0x1f) == 0 && ((1 << (_la - 22)) & ((1 << (ExpParser.PRINT - 22)) | (1 << (ExpParser.IF - 22)) | (1 << (ExpParser.WHILE - 22)) | (1 << (ExpParser.BREAK - 22)) | (1 << (ExpParser.CONTINUE - 22)) | (1 << (ExpParser.NAME - 22)))) !== 0)) {
	            this.state = 79;
	            this.statement();
	            this.state = 84;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 85;
	        this.match(ExpParser.CL_CUR);

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
	    this.enterRule(localctx, 8, ExpParser.RULE_parameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(ExpParser.NAME);
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ExpParser.COMMA) {
	            this.state = 89;
	            this.match(ExpParser.COMMA);
	            this.state = 90;
	            this.match(ExpParser.NAME);
	            this.state = 95;
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



	st_if() {
	    let localctx = new St_ifContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ExpParser.RULE_st_if);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(ExpParser.IF);
	        this.state = 97;
	        localctx.bytecode = this.comparison();

	              let ifLocal = ifStack;
	              ifStack += 1;
	              const { bytecode } = this._ctx.bytecode;
	              emit(`${bytecode} NOT_IF_${ifLocal}`, -2);
	            
	        this.state = 99;
	        this.match(ExpParser.OP_CUR);
	        this.state = 101; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 100;
	            this.statement();
	            this.state = 103; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 22)) & ~0x1f) == 0 && ((1 << (_la - 22)) & ((1 << (ExpParser.PRINT - 22)) | (1 << (ExpParser.IF - 22)) | (1 << (ExpParser.WHILE - 22)) | (1 << (ExpParser.BREAK - 22)) | (1 << (ExpParser.CONTINUE - 22)) | (1 << (ExpParser.NAME - 22)))) !== 0));
	        this.state = 105;
	        this.match(ExpParser.CL_CUR);

	              emit(`goto END_ELSE_${ifLocal}`, 0);
	              console.log(`NOT_IF_${ifLocal}:`)
	            
	        this.state = 116;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ExpParser.ELSE) {
	            this.state = 107;
	            this.match(ExpParser.ELSE);
	            this.state = 108;
	            this.match(ExpParser.OP_CUR);
	            this.state = 110; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 109;
	                this.statement();
	                this.state = 112; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(((((_la - 22)) & ~0x1f) == 0 && ((1 << (_la - 22)) & ((1 << (ExpParser.PRINT - 22)) | (1 << (ExpParser.IF - 22)) | (1 << (ExpParser.WHILE - 22)) | (1 << (ExpParser.BREAK - 22)) | (1 << (ExpParser.CONTINUE - 22)) | (1 << (ExpParser.NAME - 22)))) !== 0));
	            this.state = 114;
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
	    this.enterRule(localctx, 12, ExpParser.RULE_st_while);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);

	              let whileLocal = whileStack;
	              whileLocalCounter = whileLocal;
	              isWhile = true;
	              whileStack += 1;
	              console.log(`BEGIN_WHILE_${whileLocal}:`);
	            
	        this.state = 121;
	        this.match(ExpParser.WHILE);
	        this.state = 122;
	        localctx.bytecode = this.comparison();

	              const { bytecode } = this._ctx.bytecode;
	              emit(`${bytecode} END_WHILE_${whileLocal}`, -2);
	            
	        this.state = 124;
	        this.match(ExpParser.OP_CUR);
	        this.state = 126; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 125;
	            this.statement();
	            this.state = 128; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 22)) & ~0x1f) == 0 && ((1 << (_la - 22)) & ((1 << (ExpParser.PRINT - 22)) | (1 << (ExpParser.IF - 22)) | (1 << (ExpParser.WHILE - 22)) | (1 << (ExpParser.BREAK - 22)) | (1 << (ExpParser.CONTINUE - 22)) | (1 << (ExpParser.NAME - 22)))) !== 0));
	        this.state = 130;
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
	    this.enterRule(localctx, 14, ExpParser.RULE_st_break);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
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
	    this.enterRule(localctx, 16, ExpParser.RULE_st_continue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
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
	    this.enterRule(localctx, 18, ExpParser.RULE_st_print);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        this.match(ExpParser.PRINT);
	        this.state = 140;
	        this.match(ExpParser.OP_PAR);

	              emit("getstatic java/lang/System/out Ljava/io/PrintStream;", 1);
	            
	        this.state = 142;
	        localctx.e1 = this.expression();

	              printResolver(localctx.e1.type);
	            
	        this.state = 151;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ExpParser.COMMA) {
	            this.state = 144;
	            this.match(ExpParser.COMMA);

	                  emit("getstatic java/lang/System/out Ljava/io/PrintStream;", 1);
	                
	            this.state = 146;
	            localctx.e2 = this.expression();

	                  printResolver(localctx.e2.type);
	                
	            this.state = 153;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 154;
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
	    this.enterRule(localctx, 20, ExpParser.RULE_st_attrib);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        localctx._NAME = this.match(ExpParser.NAME);
	        this.state = 158;
	        this.match(ExpParser.ATTRIB);
	        this.state = 159;
	        localctx._expression = this.expression();

	              const variable = (localctx._NAME===null ? null : localctx._NAME.text);
	              const expType = localctx._expression.type;

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
	    this.enterRule(localctx, 22, ExpParser.RULE_st_array_new);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        localctx._NAME = this.match(ExpParser.NAME);
	        this.state = 163;
	        this.match(ExpParser.ATTRIB);
	        this.state = 164;
	        this.match(ExpParser.OP_BRA);
	        this.state = 165;
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
	    this.enterRule(localctx, 24, ExpParser.RULE_st_array_push);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
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
	            
	        this.state = 170;
	        this.match(ExpParser.DOT);
	        this.state = 171;
	        this.match(ExpParser.PUSH);
	        this.state = 172;
	        this.match(ExpParser.OP_PAR);
	        this.state = 173;
	        localctx.e1 = this.expression();

	              if (localctx.e1.type === 'i') {
	                emit(`invokevirtual Array/push(I)V`, -2);
	              } else {
	                console.error(`ERROR: operation not allowed! Variable '${variable}' needs to be type of number`);
	                process.exit(1);
	              }
	            
	        this.state = 175;
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
	    this.enterRule(localctx, 26, ExpParser.RULE_st_array_set);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
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
	            
	        this.state = 179;
	        this.match(ExpParser.OP_BRA);
	        this.state = 180;
	        localctx.e1 = this.expression();
	        this.state = 181;
	        this.match(ExpParser.CL_BRA);
	        this.state = 182;
	        this.match(ExpParser.ATTRIB);
	        this.state = 183;
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
	    this.enterRule(localctx, 28, ExpParser.RULE_st_call);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        localctx._NAME = this.match(ExpParser.NAME);
	        this.state = 187;
	        this.match(ExpParser.OP_PAR);
	        this.state = 189;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 8)) & ~0x1f) == 0 && ((1 << (_la - 8)) & ((1 << (ExpParser.OP_PAR - 8)) | (1 << (ExpParser.READ_INT - 8)) | (1 << (ExpParser.READ_STR - 8)) | (1 << (ExpParser.NUMBER - 8)) | (1 << (ExpParser.NAME - 8)) | (1 << (ExpParser.STRING - 8)))) !== 0)) {
	            this.state = 188;
	            localctx.args = this.arguments();
	        }

	        this.state = 191;
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



	arguments() {
	    let localctx = new ArgumentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, ExpParser.RULE_arguments);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
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
	            
	        this.state = 202;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ExpParser.COMMA) {
	            this.state = 196;
	            this.match(ExpParser.COMMA);
	            this.state = 197;
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
	                
	            this.state = 204;
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
	    this.enterRule(localctx, 32, ExpParser.RULE_comparison);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        localctx.e1 = this.expression();
	        this.state = 206;
	        localctx.op = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExpParser.EQ) | (1 << ExpParser.NE) | (1 << ExpParser.GT) | (1 << ExpParser.GE) | (1 << ExpParser.LT) | (1 << ExpParser.LE))) !== 0))) {
	            localctx.op = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 207;
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
	    this.enterRule(localctx, 34, ExpParser.RULE_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        localctx.t1 = this.term();
	        this.state = 217;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ExpParser.PLUS || _la===ExpParser.MINUS) {
	            this.state = 211;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===ExpParser.PLUS || _la===ExpParser.MINUS)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 212;
	            localctx.t2 = this.term();

	                  if (localctx.t1.type !== localctx.t2.type) {
	                    console.error(`ERROR: operation not allowed! you cannot mix types`);
	                    process.exit(1);
	                  }

	                  if ((localctx.op === null ? 0 : localctx.op.type) === ExpParser.PLUS) emit("iadd", -1)
	                  if ((localctx.op === null ? 0 : localctx.op.type) === ExpParser.MINUS) emit("isub", -1)
	                
	            this.state = 219;
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
	    this.enterRule(localctx, 36, ExpParser.RULE_term);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        localctx.f1 = this.factor();
	        this.state = 229;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExpParser.TIMES) | (1 << ExpParser.OVER) | (1 << ExpParser.REM))) !== 0)) {
	            this.state = 223;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExpParser.TIMES) | (1 << ExpParser.OVER) | (1 << ExpParser.REM))) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 224;
	            localctx.f2 = this.factor();

	                  if (localctx.f1.type !== localctx.f2.type) {
	                    console.error(`ERROR: operation not allowed! you cannot mix types`);
	                    process.exit(1);
	                  }

	                  if ((localctx.op === null ? 0 : localctx.op.type) == ExpParser.TIMES) emit("imul", -1)
	                  if ((localctx.op === null ? 0 : localctx.op.type) == ExpParser.OVER) emit("idiv", -1)
	                  if ((localctx.op === null ? 0 : localctx.op.type) == ExpParser.REM) emit("irem", -1)
	                
	            this.state = 231;
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
	    this.enterRule(localctx, 38, ExpParser.RULE_factor);
	    try {
	        this.state = 264;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 234;
	            localctx._NUMBER = this.match(ExpParser.NUMBER);

	                  emit(`ldc ${(localctx._NUMBER===null ? null : localctx._NUMBER.text)}`, 1);
	                  localctx.type =  'i'
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 236;
	            localctx._STRING = this.match(ExpParser.STRING);

	                  emit(`ldc ${(localctx._STRING===null ? null : localctx._STRING.text)}`, 1);
	                  localctx.type =  's'
	                
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 238;
	            this.match(ExpParser.OP_PAR);
	            this.state = 239;
	            localctx._expression = this.expression();
	            this.state = 240;
	            this.match(ExpParser.CL_PAR);

	                  localctx.type = localctx._expression.type
	                
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 243;
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
	            this.state = 245;
	            this.match(ExpParser.READ_INT);
	            this.state = 246;
	            this.match(ExpParser.OP_PAR);
	            this.state = 247;
	            this.match(ExpParser.CL_PAR);

	                  emit("invokestatic Runtime/readInt()I", 1);
	                  localctx.type =  'i'
	                
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 249;
	            this.match(ExpParser.READ_STR);
	            this.state = 250;
	            this.match(ExpParser.OP_PAR);
	            this.state = 251;
	            this.match(ExpParser.CL_PAR);

	                  emit("invokestatic Runtime/readString()Ljava/lang/String;", 1);
	                  localctx.type =  's'
	                
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 253;
	            localctx._NAME = this.match(ExpParser.NAME);
	            this.state = 254;
	            this.match(ExpParser.DOT);
	            this.state = 255;
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
	            this.state = 257;
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
	                
	            this.state = 259;
	            this.match(ExpParser.OP_BRA);
	            this.state = 260;
	            localctx.exp = this.expression();

	                  if (localctx.exp.type === 'i') {
	                    emit(`invokevirtual Array/get(I)I`, -1);
	                    localctx.type =  'i'
	                  } else {
	                    console.error(`ERROR: The expression '${localctx.exp.type}' must be a number to access the specific array item`);
	                    process.exit(1);
	                  }
	                
	            this.state = 262;
	            this.match(ExpParser.CL_BRA);
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
ExpParser.EQ = 16;
ExpParser.NE = 17;
ExpParser.GT = 18;
ExpParser.GE = 19;
ExpParser.LT = 20;
ExpParser.LE = 21;
ExpParser.PRINT = 22;
ExpParser.READ_INT = 23;
ExpParser.READ_STR = 24;
ExpParser.IF = 25;
ExpParser.ELSE = 26;
ExpParser.WHILE = 27;
ExpParser.BREAK = 28;
ExpParser.CONTINUE = 29;
ExpParser.DOT = 30;
ExpParser.PUSH = 31;
ExpParser.LENGTH = 32;
ExpParser.DEF = 33;
ExpParser.NUMBER = 34;
ExpParser.NAME = 35;
ExpParser.STRING = 36;

ExpParser.RULE_program = 0;
ExpParser.RULE_main = 1;
ExpParser.RULE_statement = 2;
ExpParser.RULE_func = 3;
ExpParser.RULE_parameters = 4;
ExpParser.RULE_st_if = 5;
ExpParser.RULE_st_while = 6;
ExpParser.RULE_st_break = 7;
ExpParser.RULE_st_continue = 8;
ExpParser.RULE_st_print = 9;
ExpParser.RULE_st_attrib = 10;
ExpParser.RULE_st_array_new = 11;
ExpParser.RULE_st_array_push = 12;
ExpParser.RULE_st_array_set = 13;
ExpParser.RULE_st_call = 14;
ExpParser.RULE_arguments = 15;
ExpParser.RULE_comparison = 16;
ExpParser.RULE_expression = 17;
ExpParser.RULE_term = 18;
ExpParser.RULE_factor = 19;

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

	parameters() {
	    return this.getTypedRuleContext(ParametersContext,0);
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
        this._expression = null; // ExpressionContext
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


}




ExpParser.ProgramContext = ProgramContext; 
ExpParser.MainContext = MainContext; 
ExpParser.StatementContext = StatementContext; 
ExpParser.FuncContext = FuncContext; 
ExpParser.ParametersContext = ParametersContext; 
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
ExpParser.ArgumentsContext = ArgumentsContext; 
ExpParser.ComparisonContext = ComparisonContext; 
ExpParser.ExpressionContext = ExpressionContext; 
ExpParser.TermContext = TermContext; 
ExpParser.FactorContext = FactorContext; 
