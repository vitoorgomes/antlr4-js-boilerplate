// Generated from Exp.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';

    let current_stack = 0;
    let max_stack = 0;
    let if_stack = 0;
    let while_stack = 0;

    const symbol_table = [];
    const used_symbols = [];

    let isWhile = false;
    let whileLocalCounter = 0;

    function emit(bytecode, value) {
      current_stack += value;
      if (current_stack > max_stack) {
          max_stack = current_stack;
      }
      console.log(`    ${bytecode}`)
    }

    function checkUnusedVars() {
      return symbol_table.filter(v => !used_symbols.includes(v))
        .map(u => {
            let message;
            if (u !== 'args') {
              console.error(`ERROR: '${u}' is defined but never used`);
              process.exit(1);
            }
            return message;
        });
    }


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u001d\u008d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0006\u0003\"\n\u0003\r\u0003\u000e\u0003",
    "#\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004.\n\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0006\u00055\n\u0005\r\u0005",
    "\u000e\u00056\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0006\u0006B",
    "\n\u0006\r\u0006\u000e\u0006C\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n^\n\n\f\n\u000e\na\u000b\n",
    "\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0007\fp\n\f\f",
    "\f\u000e\fs\u000b\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r",
    "z\n\r\f\r\u000e\r}\u000b\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u008b\n\u000e\u0003\u000e",
    "\u0002\u0002\u000f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u0002\u0005\u0003\u0002\u0010\u0015\u0003\u0002\u0005\u0006",
    "\u0003\u0002\u0007\t\u0002\u008d\u0002\u001c\u0003\u0002\u0002\u0002",
    "\u0004\u001f\u0003\u0002\u0002\u0002\u0006-\u0003\u0002\u0002\u0002",
    "\b/\u0003\u0002\u0002\u0002\n;\u0003\u0002\u0002\u0002\fH\u0003\u0002",
    "\u0002\u0002\u000eK\u0003\u0002\u0002\u0002\u0010N\u0003\u0002\u0002",
    "\u0002\u0012S\u0003\u0002\u0002\u0002\u0014e\u0003\u0002\u0002\u0002",
    "\u0016j\u0003\u0002\u0002\u0002\u0018t\u0003\u0002\u0002\u0002\u001a",
    "\u008a\u0003\u0002\u0002\u0002\u001c\u001d\b\u0002\u0001\u0002\u001d",
    "\u001e\u0005\u0004\u0003\u0002\u001e\u0003\u0003\u0002\u0002\u0002\u001f",
    "!\b\u0003\u0001\u0002 \"\u0005\u0006\u0004\u0002! \u0003\u0002\u0002",
    "\u0002\"#\u0003\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002#$\u0003",
    "\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%&\b\u0003\u0001\u0002&",
    "\u0005\u0003\u0002\u0002\u0002\'.\u0005\u0012\n\u0002(.\u0005\u0014",
    "\u000b\u0002).\u0005\b\u0005\u0002*.\u0005\n\u0006\u0002+.\u0005\f\u0007",
    "\u0002,.\u0005\u000e\b\u0002-\'\u0003\u0002\u0002\u0002-(\u0003\u0002",
    "\u0002\u0002-)\u0003\u0002\u0002\u0002-*\u0003\u0002\u0002\u0002-+\u0003",
    "\u0002\u0002\u0002-,\u0003\u0002\u0002\u0002.\u0007\u0003\u0002\u0002",
    "\u0002/0\u0007\u0018\u0002\u000201\u0005\u0010\t\u000212\b\u0005\u0001",
    "\u000224\u0007\u000e\u0002\u000235\u0005\u0006\u0004\u000243\u0003\u0002",
    "\u0002\u000256\u0003\u0002\u0002\u000264\u0003\u0002\u0002\u000267\u0003",
    "\u0002\u0002\u000278\u0003\u0002\u0002\u000289\u0007\u000f\u0002\u0002",
    "9:\b\u0005\u0001\u0002:\t\u0003\u0002\u0002\u0002;<\b\u0006\u0001\u0002",
    "<=\u0007\u0019\u0002\u0002=>\u0005\u0010\t\u0002>?\b\u0006\u0001\u0002",
    "?A\u0007\u000e\u0002\u0002@B\u0005\u0006\u0004\u0002A@\u0003\u0002\u0002",
    "\u0002BC\u0003\u0002\u0002\u0002CA\u0003\u0002\u0002\u0002CD\u0003\u0002",
    "\u0002\u0002DE\u0003\u0002\u0002\u0002EF\u0007\u000f\u0002\u0002FG\b",
    "\u0006\u0001\u0002G\u000b\u0003\u0002\u0002\u0002HI\u0007\u001a\u0002",
    "\u0002IJ\b\u0007\u0001\u0002J\r\u0003\u0002\u0002\u0002KL\u0007\u001b",
    "\u0002\u0002LM\b\b\u0001\u0002M\u000f\u0003\u0002\u0002\u0002NO\u0005",
    "\u0016\f\u0002OP\t\u0002\u0002\u0002PQ\u0005\u0016\f\u0002QR\b\t\u0001",
    "\u0002R\u0011\u0003\u0002\u0002\u0002ST\u0007\u0016\u0002\u0002TU\u0007",
    "\n\u0002\u0002UV\b\n\u0001\u0002VW\u0005\u0016\f\u0002W_\b\n\u0001\u0002",
    "XY\u0007\r\u0002\u0002YZ\b\n\u0001\u0002Z[\u0005\u0016\f\u0002[\\\b",
    "\n\u0001\u0002\\^\u0003\u0002\u0002\u0002]X\u0003\u0002\u0002\u0002",
    "^a\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002",
    "\u0002`b\u0003\u0002\u0002\u0002a_\u0003\u0002\u0002\u0002bc\u0007\u000b",
    "\u0002\u0002cd\b\n\u0001\u0002d\u0013\u0003\u0002\u0002\u0002ef\u0007",
    "\u001d\u0002\u0002fg\u0007\f\u0002\u0002gh\u0005\u0016\f\u0002hi\b\u000b",
    "\u0001\u0002i\u0015\u0003\u0002\u0002\u0002jq\u0005\u0018\r\u0002kl",
    "\t\u0003\u0002\u0002lm\u0005\u0018\r\u0002mn\b\f\u0001\u0002np\u0003",
    "\u0002\u0002\u0002ok\u0003\u0002\u0002\u0002ps\u0003\u0002\u0002\u0002",
    "qo\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002r\u0017\u0003\u0002",
    "\u0002\u0002sq\u0003\u0002\u0002\u0002t{\u0005\u001a\u000e\u0002uv\t",
    "\u0004\u0002\u0002vw\u0005\u001a\u000e\u0002wx\b\r\u0001\u0002xz\u0003",
    "\u0002\u0002\u0002yu\u0003\u0002\u0002\u0002z}\u0003\u0002\u0002\u0002",
    "{y\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|\u0019\u0003\u0002",
    "\u0002\u0002}{\u0003\u0002\u0002\u0002~\u007f\u0007\u001c\u0002\u0002",
    "\u007f\u008b\b\u000e\u0001\u0002\u0080\u0081\u0007\n\u0002\u0002\u0081",
    "\u0082\u0005\u0016\f\u0002\u0082\u0083\u0007\u000b\u0002\u0002\u0083",
    "\u008b\u0003\u0002\u0002\u0002\u0084\u0085\u0007\u001d\u0002\u0002\u0085",
    "\u008b\b\u000e\u0001\u0002\u0086\u0087\u0007\u0017\u0002\u0002\u0087",
    "\u0088\u0007\n\u0002\u0002\u0088\u0089\u0007\u000b\u0002\u0002\u0089",
    "\u008b\b\u000e\u0001\u0002\u008a~\u0003\u0002\u0002\u0002\u008a\u0080",
    "\u0003\u0002\u0002\u0002\u008a\u0084\u0003\u0002\u0002\u0002\u008a\u0086",
    "\u0003\u0002\u0002\u0002\u008b\u001b\u0003\u0002\u0002\u0002\n#-6C_",
    "q{\u008a"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ExpParser extends antlr4.Parser {

    static grammarFileName = "Exp.g4";
    static literalNames = [ null, null, null, "'+'", "'-'", "'*'", "'/'", 
                            "'%'", "'('", "')'", "'='", "','", "'{'", "'}'", 
                            "'=='", "'!='", "'>'", "'>='", "'<'", "'<='", 
                            "'print'", "'read_int'", "'if'", "'while'", 
                            "'break'", "'continue'" ];
    static symbolicNames = [ null, "COMMENT", "SPACE", "PLUS", "MINUS", 
                             "TIMES", "OVER", "REM", "OP_PAR", "CL_PAR", 
                             "ATTRIB", "COMMA", "OP_CUR", "CL_CUR", "EQ", 
                             "NE", "GT", "GE", "LT", "LE", "PRINT", "READ_INT", 
                             "IF", "WHILE", "BREAK", "CONTINUE", "NUMBER", 
                             "NAME" ];
    static ruleNames = [ "program", "main", "statement", "st_if", "st_while", 
                         "st_break", "st_continue", "comparison", "st_print", 
                         "st_attrib", "expression", "term", "factor" ];

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
	            
	        this.state = 27;
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
	                symbol_table.push('args');
	            
	        this.state = 31; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 30;
	            this.statement();
	            this.state = 33; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExpParser.PRINT) | (1 << ExpParser.IF) | (1 << ExpParser.WHILE) | (1 << ExpParser.BREAK) | (1 << ExpParser.CONTINUE) | (1 << ExpParser.NAME))) !== 0));

	                console.log("    return");
	                console.log(`.limit stack ${max_stack}`);
	                console.log(`.limit locals ${symbol_table.length}`);
	                console.log(".end method");
	                console.log("\n; symbol_table: ", symbol_table);
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
	        this.state = 43;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ExpParser.PRINT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 37;
	            this.st_print();
	            break;
	        case ExpParser.NAME:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 38;
	            this.st_attrib();
	            break;
	        case ExpParser.IF:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 39;
	            this.st_if();
	            break;
	        case ExpParser.WHILE:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 40;
	            this.st_while();
	            break;
	        case ExpParser.BREAK:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 41;
	            this.st_break();
	            break;
	        case ExpParser.CONTINUE:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 42;
	            this.st_continue();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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
	        this.state = 45;
	        this.match(ExpParser.IF);
	        this.state = 46;
	        localctx.bytecode = this.comparison();

	                let if_local = if_stack;
	                if_stack += 1;
	                const { bytecode } = this._ctx.bytecode;
	                emit(`${bytecode} NOT_IF_${if_local}`, -2);
	            
	        this.state = 48;
	        this.match(ExpParser.OP_CUR);
	        this.state = 50; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 49;
	            this.statement();
	            this.state = 52; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExpParser.PRINT) | (1 << ExpParser.IF) | (1 << ExpParser.WHILE) | (1 << ExpParser.BREAK) | (1 << ExpParser.CONTINUE) | (1 << ExpParser.NAME))) !== 0));
	        this.state = 54;
	        this.match(ExpParser.CL_CUR);

	                console.log(`NOT_IF_${if_local}:`)
	            
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
	            
	        this.state = 58;
	        this.match(ExpParser.WHILE);
	        this.state = 59;
	        localctx.bytecode = this.comparison();

	              const { bytecode } = this._ctx.bytecode;
	              emit(`${bytecode} END_WHILE_${while_local}`, -2);
	            
	        this.state = 61;
	        this.match(ExpParser.OP_CUR);
	        this.state = 63; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 62;
	            this.statement();
	            this.state = 65; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExpParser.PRINT) | (1 << ExpParser.IF) | (1 << ExpParser.WHILE) | (1 << ExpParser.BREAK) | (1 << ExpParser.CONTINUE) | (1 << ExpParser.NAME))) !== 0));
	        this.state = 67;
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
	        this.state = 70;
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
	        this.state = 73;
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



	comparison() {
	    let localctx = new ComparisonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ExpParser.RULE_comparison);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.expression();
	        this.state = 77;
	        localctx.op = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExpParser.EQ) | (1 << ExpParser.NE) | (1 << ExpParser.GT) | (1 << ExpParser.GE) | (1 << ExpParser.LT) | (1 << ExpParser.LE))) !== 0))) {
	            localctx.op = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 78;
	        this.expression();

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



	st_print() {
	    let localctx = new St_printContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ExpParser.RULE_st_print);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(ExpParser.PRINT);
	        this.state = 82;
	        this.match(ExpParser.OP_PAR);

	                emit("getstatic java/lang/System/out Ljava/io/PrintStream;", 1);
	            
	        this.state = 84;
	        this.expression();

	                emit("invokevirtual java/io/PrintStream/print(I)V\n", -2);
	            
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ExpParser.COMMA) {
	            this.state = 86;
	            this.match(ExpParser.COMMA);

	                    emit("getstatic java/lang/System/out Ljava/io/PrintStream;", 1);
	                
	            this.state = 88;
	            this.expression();

	                    emit("invokevirtual java/io/PrintStream/print(I)V\n", -2);
	                
	            this.state = 95;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 96;
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
	    this.enterRule(localctx, 18, ExpParser.RULE_st_attrib);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        localctx._NAME = this.match(ExpParser.NAME);
	        this.state = 100;
	        this.match(ExpParser.ATTRIB);
	        this.state = 101;
	        this.expression();

	                const variable = (localctx._NAME===null ? null : localctx._NAME.text);
	                if (!symbol_table.find(symbol => symbol === variable)) symbol_table.push(variable)

	                const index = symbol_table.findIndex(symbol => symbol === variable);
	                emit(`istore ${index}`, -1);
	            
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
	    this.enterRule(localctx, 20, ExpParser.RULE_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.term();
	        this.state = 111;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ExpParser.PLUS || _la===ExpParser.MINUS) {
	            this.state = 105;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===ExpParser.PLUS || _la===ExpParser.MINUS)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 106;
	            this.term();

	                    if ((localctx.op === null ? 0 : localctx.op.type) === ExpParser.PLUS) emit("iadd", -1)
	                    if ((localctx.op === null ? 0 : localctx.op.type) === ExpParser.MINUS) emit("isub", -1)
	                
	            this.state = 113;
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ExpParser.RULE_term);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.factor();
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExpParser.TIMES) | (1 << ExpParser.OVER) | (1 << ExpParser.REM))) !== 0)) {
	            this.state = 115;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExpParser.TIMES) | (1 << ExpParser.OVER) | (1 << ExpParser.REM))) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 116;
	            this.factor();

	                    if ((localctx.op === null ? 0 : localctx.op.type) == ExpParser.TIMES) emit("imul", -1)
	                    if ((localctx.op === null ? 0 : localctx.op.type) == ExpParser.OVER) emit("idiv", -1)
	                    if ((localctx.op === null ? 0 : localctx.op.type) == ExpParser.REM) emit("irem", -1)
	                
	            this.state = 123;
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



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, ExpParser.RULE_factor);
	    try {
	        this.state = 136;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ExpParser.NUMBER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 124;
	            localctx._NUMBER = this.match(ExpParser.NUMBER);

	                    emit(`ldc ${(localctx._NUMBER===null ? null : localctx._NUMBER.text)}`, 1);
	                
	            break;
	        case ExpParser.OP_PAR:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 126;
	            this.match(ExpParser.OP_PAR);
	            this.state = 127;
	            this.expression();
	            this.state = 128;
	            this.match(ExpParser.CL_PAR);
	            break;
	        case ExpParser.NAME:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 130;
	            localctx._NAME = this.match(ExpParser.NAME);

	                    const variable = (localctx._NAME===null ? null : localctx._NAME.text);
	                    const index = symbol_table.findIndex(symbol => symbol === variable);
	                    if (index === -1) {
	                        console.error(`ERROR: Variable '${variable}' is not defined`);
	                        process.exit(1);
	                    } else {
	                        used_symbols.push(variable);
	                        emit(`iload ${index}`, 1);
	                    }
	                
	            break;
	        case ExpParser.READ_INT:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 132;
	            this.match(ExpParser.READ_INT);
	            this.state = 133;
	            this.match(ExpParser.OP_PAR);
	            this.state = 134;
	            this.match(ExpParser.CL_PAR);

	                    emit("invokestatic Runtime/readInt()I", 1);
	                
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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
ExpParser.EQ = 14;
ExpParser.NE = 15;
ExpParser.GT = 16;
ExpParser.GE = 17;
ExpParser.LT = 18;
ExpParser.LE = 19;
ExpParser.PRINT = 20;
ExpParser.READ_INT = 21;
ExpParser.IF = 22;
ExpParser.WHILE = 23;
ExpParser.BREAK = 24;
ExpParser.CONTINUE = 25;
ExpParser.NUMBER = 26;
ExpParser.NAME = 27;

ExpParser.RULE_program = 0;
ExpParser.RULE_main = 1;
ExpParser.RULE_statement = 2;
ExpParser.RULE_st_if = 3;
ExpParser.RULE_st_while = 4;
ExpParser.RULE_st_break = 5;
ExpParser.RULE_st_continue = 6;
ExpParser.RULE_comparison = 7;
ExpParser.RULE_st_print = 8;
ExpParser.RULE_st_attrib = 9;
ExpParser.RULE_expression = 10;
ExpParser.RULE_term = 11;
ExpParser.RULE_factor = 12;

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
        this.op = null; // Token
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
    }

	PRINT() {
	    return this.getToken(ExpParser.PRINT, 0);
	};

	OP_PAR() {
	    return this.getToken(ExpParser.OP_PAR, 0);
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

	CL_PAR() {
	    return this.getToken(ExpParser.CL_PAR, 0);
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
        this.op = null; // Token
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
        this.op = null; // Token
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
        this._NUMBER = null; // Token
        this._NAME = null; // Token
    }

	NUMBER() {
	    return this.getToken(ExpParser.NUMBER, 0);
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


}




ExpParser.ProgramContext = ProgramContext; 
ExpParser.MainContext = MainContext; 
ExpParser.StatementContext = StatementContext; 
ExpParser.St_ifContext = St_ifContext; 
ExpParser.St_whileContext = St_whileContext; 
ExpParser.St_breakContext = St_breakContext; 
ExpParser.St_continueContext = St_continueContext; 
ExpParser.ComparisonContext = ComparisonContext; 
ExpParser.St_printContext = St_printContext; 
ExpParser.St_attribContext = St_attribContext; 
ExpParser.ExpressionContext = ExpressionContext; 
ExpParser.TermContext = TermContext; 
ExpParser.FactorContext = FactorContext; 
