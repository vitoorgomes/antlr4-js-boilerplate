// Generated from Exp.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';

    let current_stack = 0;
    let max_stack = 0;
    let if_stack = 0;
    let while_stack = 0;

    const symbols_table = [];
    const types_table = [];
    const used_symbols = [];

    let isWhile = false;
    let isElse = false;
    let whileLocalCounter = 0;

    function emit(bytecode, value) {
      current_stack += value;
      if (current_stack > max_stack) {
          max_stack = current_stack;
      }
      console.log(`    ${bytecode}`)
    }

    function checkUnusedVars() {
      return symbols_table.filter(v => !used_symbols.includes(v))
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
        console.log(`; type => ${type}`);
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
    "\u5964\u0003%\u00ce\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0006\u0003(\n\u0003\r\u0003\u000e\u0003)\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u00047\n\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0006\u0005>",
    "\n\u0005\r\u0005\u000e\u0005?\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0006\u0005G\n\u0005\r\u0005\u000e\u0005H\u0003\u0005",
    "\u0003\u0005\u0005\u0005M\n\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0006\u0006",
    "W\n\u0006\r\u0006\u000e\u0006X\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007",
    "\tn\n\t\f\t\u000e\tq\u000b\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0007\u000f\u009d\n\u000f\f\u000f\u000e\u000f\u00a0\u000b\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0007\u0010\u00a9\n\u0010\f\u0010\u000e\u0010\u00ac\u000b",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0005\u0011\u00cc\n\u0011\u0003\u0011\u0002\u0002\u0012\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e",
    " \u0002\u0005\u0003\u0002\u0012\u0017\u0003\u0002\u0005\u0006\u0003",
    "\u0002\u0007\t\u0002\u00d4\u0002\"\u0003\u0002\u0002\u0002\u0004%\u0003",
    "\u0002\u0002\u0002\u00066\u0003\u0002\u0002\u0002\b8\u0003\u0002\u0002",
    "\u0002\nP\u0003\u0002\u0002\u0002\f]\u0003\u0002\u0002\u0002\u000e`",
    "\u0003\u0002\u0002\u0002\u0010c\u0003\u0002\u0002\u0002\u0012u\u0003",
    "\u0002\u0002\u0002\u0014z\u0003\u0002\u0002\u0002\u0016\u0080\u0003",
    "\u0002\u0002\u0002\u0018\u0089\u0003\u0002\u0002\u0002\u001a\u0092\u0003",
    "\u0002\u0002\u0002\u001c\u0097\u0003\u0002\u0002\u0002\u001e\u00a3\u0003",
    "\u0002\u0002\u0002 \u00cb\u0003\u0002\u0002\u0002\"#\b\u0002\u0001\u0002",
    "#$\u0005\u0004\u0003\u0002$\u0003\u0003\u0002\u0002\u0002%\'\b\u0003",
    "\u0001\u0002&(\u0005\u0006\u0004\u0002\'&\u0003\u0002\u0002\u0002()",
    "\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002",
    "\u0002*+\u0003\u0002\u0002\u0002+,\b\u0003\u0001\u0002,\u0005\u0003",
    "\u0002\u0002\u0002-7\u0005\u0010\t\u0002.7\u0005\u0012\n\u0002/7\u0005",
    "\b\u0005\u000207\u0005\n\u0006\u000217\u0005\f\u0007\u000227\u0005\u000e",
    "\b\u000237\u0005\u0014\u000b\u000247\u0005\u0016\f\u000257\u0005\u0018",
    "\r\u00026-\u0003\u0002\u0002\u00026.\u0003\u0002\u0002\u00026/\u0003",
    "\u0002\u0002\u000260\u0003\u0002\u0002\u000261\u0003\u0002\u0002\u0002",
    "62\u0003\u0002\u0002\u000263\u0003\u0002\u0002\u000264\u0003\u0002\u0002",
    "\u000265\u0003\u0002\u0002\u00027\u0007\u0003\u0002\u0002\u000289\u0007",
    "\u001b\u0002\u00029:\u0005\u001a\u000e\u0002:;\b\u0005\u0001\u0002;",
    "=\u0007\u000e\u0002\u0002<>\u0005\u0006\u0004\u0002=<\u0003\u0002\u0002",
    "\u0002>?\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002?@\u0003\u0002",
    "\u0002\u0002@A\u0003\u0002\u0002\u0002AB\u0007\u000f\u0002\u0002BL\b",
    "\u0005\u0001\u0002CD\u0007\u001c\u0002\u0002DF\u0007\u000e\u0002\u0002",
    "EG\u0005\u0006\u0004\u0002FE\u0003\u0002\u0002\u0002GH\u0003\u0002\u0002",
    "\u0002HF\u0003\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002IJ\u0003\u0002",
    "\u0002\u0002JK\u0007\u000f\u0002\u0002KM\u0003\u0002\u0002\u0002LC\u0003",
    "\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002",
    "NO\b\u0005\u0001\u0002O\t\u0003\u0002\u0002\u0002PQ\b\u0006\u0001\u0002",
    "QR\u0007\u001d\u0002\u0002RS\u0005\u001a\u000e\u0002ST\b\u0006\u0001",
    "\u0002TV\u0007\u000e\u0002\u0002UW\u0005\u0006\u0004\u0002VU\u0003\u0002",
    "\u0002\u0002WX\u0003\u0002\u0002\u0002XV\u0003\u0002\u0002\u0002XY\u0003",
    "\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002Z[\u0007\u000f\u0002\u0002",
    "[\\\b\u0006\u0001\u0002\\\u000b\u0003\u0002\u0002\u0002]^\u0007\u001e",
    "\u0002\u0002^_\b\u0007\u0001\u0002_\r\u0003\u0002\u0002\u0002`a\u0007",
    "\u001f\u0002\u0002ab\b\b\u0001\u0002b\u000f\u0003\u0002\u0002\u0002",
    "cd\u0007\u0018\u0002\u0002de\u0007\n\u0002\u0002ef\b\t\u0001\u0002f",
    "g\u0005\u001c\u000f\u0002go\b\t\u0001\u0002hi\u0007\r\u0002\u0002ij",
    "\b\t\u0001\u0002jk\u0005\u001c\u000f\u0002kl\b\t\u0001\u0002ln\u0003",
    "\u0002\u0002\u0002mh\u0003\u0002\u0002\u0002nq\u0003\u0002\u0002\u0002",
    "om\u0003\u0002\u0002\u0002op\u0003\u0002\u0002\u0002pr\u0003\u0002\u0002",
    "\u0002qo\u0003\u0002\u0002\u0002rs\u0007\u000b\u0002\u0002st\b\t\u0001",
    "\u0002t\u0011\u0003\u0002\u0002\u0002uv\u0007$\u0002\u0002vw\u0007\f",
    "\u0002\u0002wx\u0005\u001c\u000f\u0002xy\b\n\u0001\u0002y\u0013\u0003",
    "\u0002\u0002\u0002z{\u0007$\u0002\u0002{|\u0007\f\u0002\u0002|}\u0007",
    "\u0010\u0002\u0002}~\u0007\u0011\u0002\u0002~\u007f\b\u000b\u0001\u0002",
    "\u007f\u0015\u0003\u0002\u0002\u0002\u0080\u0081\u0007$\u0002\u0002",
    "\u0081\u0082\b\f\u0001\u0002\u0082\u0083\u0007 \u0002\u0002\u0083\u0084",
    "\u0007!\u0002\u0002\u0084\u0085\u0007\n\u0002\u0002\u0085\u0086\u0005",
    "\u001c\u000f\u0002\u0086\u0087\b\f\u0001\u0002\u0087\u0088\u0007\u000b",
    "\u0002\u0002\u0088\u0017\u0003\u0002\u0002\u0002\u0089\u008a\u0007$",
    "\u0002\u0002\u008a\u008b\b\r\u0001\u0002\u008b\u008c\u0007\u0010\u0002",
    "\u0002\u008c\u008d\u0005\u001c\u000f\u0002\u008d\u008e\u0007\u0011\u0002",
    "\u0002\u008e\u008f\u0007\f\u0002\u0002\u008f\u0090\u0005\u001c\u000f",
    "\u0002\u0090\u0091\b\r\u0001\u0002\u0091\u0019\u0003\u0002\u0002\u0002",
    "\u0092\u0093\u0005\u001c\u000f\u0002\u0093\u0094\t\u0002\u0002\u0002",
    "\u0094\u0095\u0005\u001c\u000f\u0002\u0095\u0096\b\u000e\u0001\u0002",
    "\u0096\u001b\u0003\u0002\u0002\u0002\u0097\u009e\u0005\u001e\u0010\u0002",
    "\u0098\u0099\t\u0003\u0002\u0002\u0099\u009a\u0005\u001e\u0010\u0002",
    "\u009a\u009b\b\u000f\u0001\u0002\u009b\u009d\u0003\u0002\u0002\u0002",
    "\u009c\u0098\u0003\u0002\u0002\u0002\u009d\u00a0\u0003\u0002\u0002\u0002",
    "\u009e\u009c\u0003\u0002\u0002\u0002\u009e\u009f\u0003\u0002\u0002\u0002",
    "\u009f\u00a1\u0003\u0002\u0002\u0002\u00a0\u009e\u0003\u0002\u0002\u0002",
    "\u00a1\u00a2\b\u000f\u0001\u0002\u00a2\u001d\u0003\u0002\u0002\u0002",
    "\u00a3\u00aa\u0005 \u0011\u0002\u00a4\u00a5\t\u0004\u0002\u0002\u00a5",
    "\u00a6\u0005 \u0011\u0002\u00a6\u00a7\b\u0010\u0001\u0002\u00a7\u00a9",
    "\u0003\u0002\u0002\u0002\u00a8\u00a4\u0003\u0002\u0002\u0002\u00a9\u00ac",
    "\u0003\u0002\u0002\u0002\u00aa\u00a8\u0003\u0002\u0002\u0002\u00aa\u00ab",
    "\u0003\u0002\u0002\u0002\u00ab\u00ad\u0003\u0002\u0002\u0002\u00ac\u00aa",
    "\u0003\u0002\u0002\u0002\u00ad\u00ae\b\u0010\u0001\u0002\u00ae\u001f",
    "\u0003\u0002\u0002\u0002\u00af\u00b0\u0007#\u0002\u0002\u00b0\u00cc",
    "\b\u0011\u0001\u0002\u00b1\u00b2\u0007%\u0002\u0002\u00b2\u00cc\b\u0011",
    "\u0001\u0002\u00b3\u00b4\u0007\n\u0002\u0002\u00b4\u00b5\u0005\u001c",
    "\u000f\u0002\u00b5\u00b6\u0007\u000b\u0002\u0002\u00b6\u00b7\b\u0011",
    "\u0001\u0002\u00b7\u00cc\u0003\u0002\u0002\u0002\u00b8\u00b9\u0007$",
    "\u0002\u0002\u00b9\u00cc\b\u0011\u0001\u0002\u00ba\u00bb\u0007\u0019",
    "\u0002\u0002\u00bb\u00bc\u0007\n\u0002\u0002\u00bc\u00bd\u0007\u000b",
    "\u0002\u0002\u00bd\u00cc\b\u0011\u0001\u0002\u00be\u00bf\u0007\u001a",
    "\u0002\u0002\u00bf\u00c0\u0007\n\u0002\u0002\u00c0\u00c1\u0007\u000b",
    "\u0002\u0002\u00c1\u00cc\b\u0011\u0001\u0002\u00c2\u00c3\u0007$\u0002",
    "\u0002\u00c3\u00c4\u0007 \u0002\u0002\u00c4\u00c5\u0007\"\u0002\u0002",
    "\u00c5\u00cc\b\u0011\u0001\u0002\u00c6\u00c7\u0007$\u0002\u0002\u00c7",
    "\u00c8\u0007\u0010\u0002\u0002\u00c8\u00c9\u0007#\u0002\u0002\u00c9",
    "\u00ca\u0007\u0011\u0002\u0002\u00ca\u00cc\b\u0011\u0001\u0002\u00cb",
    "\u00af\u0003\u0002\u0002\u0002\u00cb\u00b1\u0003\u0002\u0002\u0002\u00cb",
    "\u00b3\u0003\u0002\u0002\u0002\u00cb\u00b8\u0003\u0002\u0002\u0002\u00cb",
    "\u00ba\u0003\u0002\u0002\u0002\u00cb\u00be\u0003\u0002\u0002\u0002\u00cb",
    "\u00c2\u0003\u0002\u0002\u0002\u00cb\u00c6\u0003\u0002\u0002\u0002\u00cc",
    "!\u0003\u0002\u0002\u0002\f)6?HLXo\u009e\u00aa\u00cb"].join("");


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
                            "'.'", "'push'", "'length'" ];
    static symbolicNames = [ null, "COMMENT", "SPACE", "PLUS", "MINUS", 
                             "TIMES", "OVER", "REM", "OP_PAR", "CL_PAR", 
                             "ATTRIB", "COMMA", "OP_CUR", "CL_CUR", "OP_BRA", 
                             "CL_BRA", "EQ", "NE", "GT", "GE", "LT", "LE", 
                             "PRINT", "READ_INT", "READ_STR", "IF", "ELSE", 
                             "WHILE", "BREAK", "CONTINUE", "DOT", "PUSH", 
                             "LENGTH", "NUMBER", "NAME", "STRING" ];
    static ruleNames = [ "program", "main", "statement", "st_if", "st_while", 
                         "st_break", "st_continue", "st_print", "st_attrib", 
                         "st_array_new", "st_array_push", "st_array_set", 
                         "comparison", "expression", "term", "factor" ];

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
	            
	        this.state = 33;
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
	              symbols_table.push('args');
	            
	        this.state = 37; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 36;
	            this.statement();
	            this.state = 39; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 22)) & ~0x1f) == 0 && ((1 << (_la - 22)) & ((1 << (ExpParser.PRINT - 22)) | (1 << (ExpParser.IF - 22)) | (1 << (ExpParser.WHILE - 22)) | (1 << (ExpParser.BREAK - 22)) | (1 << (ExpParser.CONTINUE - 22)) | (1 << (ExpParser.NAME - 22)))) !== 0));

	              console.log("    return");
	              console.log(`.limit stack ${max_stack}`);
	              console.log(`.limit locals ${symbols_table.length}`);
	              console.log(".end method");
	              console.log("\n; symbols_table: ", symbols_table);
	              console.log("\n; types_table: ", types_table);
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
	        this.state = 52;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 43;
	            this.st_print();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 44;
	            this.st_attrib();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 45;
	            this.st_if();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 46;
	            this.st_while();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 47;
	            this.st_break();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 48;
	            this.st_continue();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 49;
	            this.st_array_new();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 50;
	            this.st_array_push();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 51;
	            this.st_array_set();
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
	    this.enterRule(localctx, 6, ExpParser.RULE_st_if);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(ExpParser.IF);
	        this.state = 55;
	        localctx.bytecode = this.comparison();

	              let if_local = if_stack;
	              if_stack += 1;
	              const { bytecode } = this._ctx.bytecode;
	              emit(`${bytecode} NOT_IF_${if_local}`, -2);
	            
	        this.state = 57;
	        this.match(ExpParser.OP_CUR);
	        this.state = 59; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 58;
	            this.statement();
	            this.state = 61; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 22)) & ~0x1f) == 0 && ((1 << (_la - 22)) & ((1 << (ExpParser.PRINT - 22)) | (1 << (ExpParser.IF - 22)) | (1 << (ExpParser.WHILE - 22)) | (1 << (ExpParser.BREAK - 22)) | (1 << (ExpParser.CONTINUE - 22)) | (1 << (ExpParser.NAME - 22)))) !== 0));
	        this.state = 63;
	        this.match(ExpParser.CL_CUR);

	              emit(`goto END_ELSE_${if_local}`, 0);
	              console.log(`NOT_IF_${if_local}:`)
	            
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ExpParser.ELSE) {
	            this.state = 65;
	            this.match(ExpParser.ELSE);
	            this.state = 66;
	            this.match(ExpParser.OP_CUR);
	            this.state = 68; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 67;
	                this.statement();
	                this.state = 70; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(((((_la - 22)) & ~0x1f) == 0 && ((1 << (_la - 22)) & ((1 << (ExpParser.PRINT - 22)) | (1 << (ExpParser.IF - 22)) | (1 << (ExpParser.WHILE - 22)) | (1 << (ExpParser.BREAK - 22)) | (1 << (ExpParser.CONTINUE - 22)) | (1 << (ExpParser.NAME - 22)))) !== 0));
	            this.state = 72;
	            this.match(ExpParser.CL_CUR);
	        }


	              console.log(`END_ELSE_${if_local}:`);
	            
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
	    this.enterRule(localctx, 8, ExpParser.RULE_st_while);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);

	              let while_local = while_stack;
	              whileLocalCounter = while_local;
	              isWhile = true;
	              while_stack += 1;
	              console.log(`BEGIN_WHILE_${while_local}:`);
	            
	        this.state = 79;
	        this.match(ExpParser.WHILE);
	        this.state = 80;
	        localctx.bytecode = this.comparison();

	              const { bytecode } = this._ctx.bytecode;
	              emit(`${bytecode} END_WHILE_${while_local}`, -2);
	            
	        this.state = 82;
	        this.match(ExpParser.OP_CUR);
	        this.state = 84; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 83;
	            this.statement();
	            this.state = 86; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 22)) & ~0x1f) == 0 && ((1 << (_la - 22)) & ((1 << (ExpParser.PRINT - 22)) | (1 << (ExpParser.IF - 22)) | (1 << (ExpParser.WHILE - 22)) | (1 << (ExpParser.BREAK - 22)) | (1 << (ExpParser.CONTINUE - 22)) | (1 << (ExpParser.NAME - 22)))) !== 0));
	        this.state = 88;
	        this.match(ExpParser.CL_CUR);

	              emit(`goto BEGIN_WHILE_${while_local}`, 0);
	              console.log(`END_WHILE_${while_local}:`);
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
	    this.enterRule(localctx, 10, ExpParser.RULE_st_break);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
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
	    this.enterRule(localctx, 12, ExpParser.RULE_st_continue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
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
	    this.enterRule(localctx, 14, ExpParser.RULE_st_print);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(ExpParser.PRINT);
	        this.state = 98;
	        this.match(ExpParser.OP_PAR);

	                emit("getstatic java/lang/System/out Ljava/io/PrintStream;", 1);
	            
	        this.state = 100;
	        localctx.e1 = this.expression();

	              console.log(`; localctx.e1.type => ${localctx.e1.type}`);
	              // printResolver(localctx.e1.type);
	            
	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ExpParser.COMMA) {
	            this.state = 102;
	            this.match(ExpParser.COMMA);

	                  emit("getstatic java/lang/System/out Ljava/io/PrintStream;", 1);
	                
	            this.state = 104;
	            localctx.e2 = this.expression();

	                  printResolver(localctx.e2.type);
	                
	            this.state = 111;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 112;
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
	    this.enterRule(localctx, 16, ExpParser.RULE_st_attrib);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        localctx._NAME = this.match(ExpParser.NAME);
	        this.state = 116;
	        this.match(ExpParser.ATTRIB);
	        this.state = 117;
	        localctx._expression = this.expression();

	              const variable = (localctx._NAME===null ? null : localctx._NAME.text);
	              const expType = localctx._expression.type;

	              if (!symbols_table.find(symbol => symbol === variable)) {
	                symbols_table.push(variable);
	                types_table.push(expType);
	              }

	              const index = symbols_table.findIndex(symbol => symbol === variable);

	              // need to -1 because in JS symbols_table starts with 'args' at index 0
	              const savedType = types_table[index - 1];

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
	    this.enterRule(localctx, 18, ExpParser.RULE_st_array_new);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        localctx._NAME = this.match(ExpParser.NAME);
	        this.state = 121;
	        this.match(ExpParser.ATTRIB);
	        this.state = 122;
	        this.match(ExpParser.OP_BRA);
	        this.state = 123;
	        this.match(ExpParser.CL_BRA);

	              const variable = (localctx._NAME===null ? null : localctx._NAME.text);

	              if (!symbols_table.find(symbol => symbol === variable)) {
	                symbols_table.push(variable);
	                types_table.push('a');

	                const index = symbols_table.findIndex(symbol => symbol === variable);

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
	    this.enterRule(localctx, 20, ExpParser.RULE_st_array_push);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        localctx._NAME = this.match(ExpParser.NAME);

	              const variable = (localctx._NAME===null ? null : localctx._NAME.text);

	              const index = symbols_table.findIndex(symbol => symbol === variable);

	              if (index === -1)  {
	                console.error(`ERROR: operation not allowed! Variable '${variable}' needs to be declared first!`);
	                process.exit(1);
	              }

	              if (!used_symbols.find(symbol => symbol === variable)) {
	                used_symbols.push(variable);
	              }

	              emit(`aload ${index}`, 1);
	            
	        this.state = 128;
	        this.match(ExpParser.DOT);
	        this.state = 129;
	        this.match(ExpParser.PUSH);
	        this.state = 130;
	        this.match(ExpParser.OP_PAR);
	        this.state = 131;
	        localctx.e1 = this.expression();

	              if (localctx.e1.type === 'i') {
	                emit(`invokevirtual Array/push(I)V`, -2);
	              } else {
	                console.error(`ERROR: operation not allowed! Variable '${variable}' needs to be type of number`);
	                process.exit(1);
	              }
	            
	        this.state = 133;
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
	    this.enterRule(localctx, 22, ExpParser.RULE_st_array_set);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        localctx._NAME = this.match(ExpParser.NAME);

	              const variable = (localctx._NAME===null ? null : localctx._NAME.text);

	              const index = symbols_table.findIndex(symbol => symbol === variable);

	              if (index === -1)  {
	                console.error(`ERROR: operation not allowed! Variable '${variable}' needs to be declared first!`);
	                process.exit(1);
	              }

	              if (!used_symbols.find(symbol => symbol === variable)) {
	                used_symbols.push(variable);
	              }

	              emit(`aload ${index}`, 1);
	            
	        this.state = 137;
	        this.match(ExpParser.OP_BRA);
	        this.state = 138;
	        localctx.e1 = this.expression();
	        this.state = 139;
	        this.match(ExpParser.CL_BRA);
	        this.state = 140;
	        this.match(ExpParser.ATTRIB);
	        this.state = 141;
	        localctx.e2 = this.expression();

	              if (localctx.e1.type !== 'i' || localctx.e2.type !== 'i') {
	                console.error(`ERROR: operation not allowed! Expression must be a number`);
	                process.exit(1);
	              }
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



	comparison() {
	    let localctx = new ComparisonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, ExpParser.RULE_comparison);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        localctx.e1 = this.expression();
	        this.state = 145;
	        localctx.op = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExpParser.EQ) | (1 << ExpParser.NE) | (1 << ExpParser.GT) | (1 << ExpParser.GE) | (1 << ExpParser.LT) | (1 << ExpParser.LE))) !== 0))) {
	            localctx.op = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 146;
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
	    this.enterRule(localctx, 26, ExpParser.RULE_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        localctx.t1 = this.term();
	        this.state = 156;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ExpParser.PLUS || _la===ExpParser.MINUS) {
	            this.state = 150;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===ExpParser.PLUS || _la===ExpParser.MINUS)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 151;
	            localctx.t2 = this.term();

	                  if (localctx.t1.type !== localctx.t2.type) {
	                    console.error(`ERROR: operation not allowed! you cannot mix types`);
	                    process.exit(1);
	                  }

	                  if ((localctx.op === null ? 0 : localctx.op.type) === ExpParser.PLUS) emit("iadd", -1)
	                  if ((localctx.op === null ? 0 : localctx.op.type) === ExpParser.MINUS) emit("isub", -1)
	                
	            this.state = 158;
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
	    this.enterRule(localctx, 28, ExpParser.RULE_term);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        localctx.f1 = this.factor();
	        this.state = 168;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExpParser.TIMES) | (1 << ExpParser.OVER) | (1 << ExpParser.REM))) !== 0)) {
	            this.state = 162;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExpParser.TIMES) | (1 << ExpParser.OVER) | (1 << ExpParser.REM))) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 163;
	            localctx.f2 = this.factor();

	                  if (localctx.f1.type !== localctx.f2.type) {
	                    console.error(`ERROR: operation not allowed! you cannot mix types`);
	                    process.exit(1);
	                  }

	                  if ((localctx.op === null ? 0 : localctx.op.type) == ExpParser.TIMES) emit("imul", -1)
	                  if ((localctx.op === null ? 0 : localctx.op.type) == ExpParser.OVER) emit("idiv", -1)
	                  if ((localctx.op === null ? 0 : localctx.op.type) == ExpParser.REM) emit("irem", -1)
	                
	            this.state = 170;
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
	    this.enterRule(localctx, 30, ExpParser.RULE_factor);
	    try {
	        this.state = 201;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 173;
	            localctx._NUMBER = this.match(ExpParser.NUMBER);

	                  emit(`ldc ${(localctx._NUMBER===null ? null : localctx._NUMBER.text)}`, 1);
	                  localctx.type =  'i'
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 175;
	            localctx._STRING = this.match(ExpParser.STRING);

	                  emit(`ldc ${(localctx._STRING===null ? null : localctx._STRING.text)}`, 1);
	                  localctx.type =  's'
	                
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 177;
	            this.match(ExpParser.OP_PAR);
	            this.state = 178;
	            localctx._expression = this.expression();
	            this.state = 179;
	            this.match(ExpParser.CL_PAR);

	                  localctx.type = localctx._expression.type
	                
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 182;
	            localctx._NAME = this.match(ExpParser.NAME);

	                  const variable = (localctx._NAME===null ? null : localctx._NAME.text);
	                  const index = symbols_table.findIndex(symbol => symbol === variable);
	                  if (index === -1) {
	                    console.error(`ERROR: Variable '${variable}' is not defined`);
	                    process.exit(1);
	                  } else {
	                    // need to -1 because in JS symbols_table starts with 'args' at index 0
	                    const type = types_table[index - 1];

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
	                    used_symbols.push(variable);
	                  }
	                
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 184;
	            this.match(ExpParser.READ_INT);
	            this.state = 185;
	            this.match(ExpParser.OP_PAR);
	            this.state = 186;
	            this.match(ExpParser.CL_PAR);

	                  emit("invokestatic Runtime/readInt()I", 1);
	                  localctx.type =  'i'
	                
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 188;
	            this.match(ExpParser.READ_STR);
	            this.state = 189;
	            this.match(ExpParser.OP_PAR);
	            this.state = 190;
	            this.match(ExpParser.CL_PAR);

	                  emit("invokestatic Runtime/readString()Ljava/lang/String;", 1);
	                  localctx.type =  's'
	                
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 192;
	            localctx._NAME = this.match(ExpParser.NAME);
	            this.state = 193;
	            this.match(ExpParser.DOT);
	            this.state = 194;
	            this.match(ExpParser.LENGTH);

	                  localctx.type =  'i'

	                  const name = (localctx._NAME===null ? null : localctx._NAME.text);
	                  const i = symbols_table.findIndex(symbol => symbol === name);

	                  // need to -1 because in JS symbols_table starts with 'args' at index 0
	                  const t = types_table[i - 1];

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
	            this.state = 196;
	            localctx._NAME = this.match(ExpParser.NAME);
	            this.state = 197;
	            this.match(ExpParser.OP_BRA);
	            this.state = 198;
	            localctx._NUMBER = this.match(ExpParser.NUMBER);
	            this.state = 199;
	            this.match(ExpParser.CL_BRA);

	                  localctx.type =  'i'

	                  const variableName = (localctx._NAME===null ? null : localctx._NAME.text);
	                  const idx = symbols_table.findIndex(symbol => symbol === variableName);

	                  // need to -1 because in JS symbols_table starts with 'args' at index 0
	                  const tp = types_table[idx - 1];

	                  // localctx.type =  'i'

	                  console.log(`; number => ${(localctx._NUMBER===null ? null : localctx._NUMBER.text)}`)
	                  console.log(`; idx => ${idx}`)
	                  console.log(`; variableName => ${variableName}`)
	                  console.log(`; tp => ${tp}`)

	                  if (tp !== 'a') {
	                    console.error(`ERROR: operation not allowed! Variable '${variableName}' is not an array`);
	                    process.exit(1);
	                  } else {
	                    emit(`aload ${idx - 1}`, 1);
	                    emit(`ldc ${idx - 1}`, 1);
	                    emit(`invokevirtual Array/get(I)I`, -1);
	                  }
	                
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
ExpParser.NUMBER = 33;
ExpParser.NAME = 34;
ExpParser.STRING = 35;

ExpParser.RULE_program = 0;
ExpParser.RULE_main = 1;
ExpParser.RULE_statement = 2;
ExpParser.RULE_st_if = 3;
ExpParser.RULE_st_while = 4;
ExpParser.RULE_st_break = 5;
ExpParser.RULE_st_continue = 6;
ExpParser.RULE_st_print = 7;
ExpParser.RULE_st_attrib = 8;
ExpParser.RULE_st_array_new = 9;
ExpParser.RULE_st_array_push = 10;
ExpParser.RULE_st_array_set = 11;
ExpParser.RULE_comparison = 12;
ExpParser.RULE_expression = 13;
ExpParser.RULE_term = 14;
ExpParser.RULE_factor = 15;

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
ExpParser.St_ifContext = St_ifContext; 
ExpParser.St_whileContext = St_whileContext; 
ExpParser.St_breakContext = St_breakContext; 
ExpParser.St_continueContext = St_continueContext; 
ExpParser.St_printContext = St_printContext; 
ExpParser.St_attribContext = St_attribContext; 
ExpParser.St_array_newContext = St_array_newContext; 
ExpParser.St_array_pushContext = St_array_pushContext; 
ExpParser.St_array_setContext = St_array_setContext; 
ExpParser.ComparisonContext = ComparisonContext; 
ExpParser.ExpressionContext = ExpressionContext; 
ExpParser.TermContext = TermContext; 
ExpParser.FactorContext = FactorContext; 
