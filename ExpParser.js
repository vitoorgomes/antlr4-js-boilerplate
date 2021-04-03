// Generated from Exp.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';

    const symbol_table = [];
    const used_symbols = [];
    let current_stack = 0;
    let max_stack = 0;
    let if_stack = 0;

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
    "\u5964\u0003\u001aq\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0006\u0003\u001c\n",
    "\u0003\r\u0003\u000e\u0003\u001d\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004%\n\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0006\u0005,\n\u0005\r\u0005\u000e",
    "\u0005-\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0007\u0007B\n\u0007\f\u0007\u000e\u0007E\u000b\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\tT\n\t\f\t\u000e\t",
    "W\u000b\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n^\n\n\f\n\u000e",
    "\na\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0005\u000bo\n\u000b\u0003\u000b\u0002\u0002\f\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0002\u0005\u0003\u0002\u0010\u0015",
    "\u0003\u0002\u0005\u0006\u0003\u0002\u0007\t\u0002p\u0002\u0016\u0003",
    "\u0002\u0002\u0002\u0004\u0019\u0003\u0002\u0002\u0002\u0006$\u0003",
    "\u0002\u0002\u0002\b&\u0003\u0002\u0002\u0002\n2\u0003\u0002\u0002\u0002",
    "\f7\u0003\u0002\u0002\u0002\u000eI\u0003\u0002\u0002\u0002\u0010N\u0003",
    "\u0002\u0002\u0002\u0012X\u0003\u0002\u0002\u0002\u0014n\u0003\u0002",
    "\u0002\u0002\u0016\u0017\b\u0002\u0001\u0002\u0017\u0018\u0005\u0004",
    "\u0003\u0002\u0018\u0003\u0003\u0002\u0002\u0002\u0019\u001b\b\u0003",
    "\u0001\u0002\u001a\u001c\u0005\u0006\u0004\u0002\u001b\u001a\u0003\u0002",
    "\u0002\u0002\u001c\u001d\u0003\u0002\u0002\u0002\u001d\u001b\u0003\u0002",
    "\u0002\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e\u001f\u0003\u0002",
    "\u0002\u0002\u001f \b\u0003\u0001\u0002 \u0005\u0003\u0002\u0002\u0002",
    "!%\u0005\f\u0007\u0002\"%\u0005\u000e\b\u0002#%\u0005\b\u0005\u0002",
    "$!\u0003\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002$#\u0003\u0002",
    "\u0002\u0002%\u0007\u0003\u0002\u0002\u0002&\'\u0007\u0018\u0002\u0002",
    "\'(\u0005\n\u0006\u0002()\b\u0005\u0001\u0002)+\u0007\u000e\u0002\u0002",
    "*,\u0005\u0006\u0004\u0002+*\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002",
    "\u0002-+\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002./\u0003\u0002",
    "\u0002\u0002/0\u0007\u000f\u0002\u000201\b\u0005\u0001\u00021\t\u0003",
    "\u0002\u0002\u000223\u0005\u0010\t\u000234\t\u0002\u0002\u000245\u0005",
    "\u0010\t\u000256\b\u0006\u0001\u00026\u000b\u0003\u0002\u0002\u0002",
    "78\u0007\u0016\u0002\u000289\u0007\n\u0002\u00029:\b\u0007\u0001\u0002",
    ":;\u0005\u0010\t\u0002;C\b\u0007\u0001\u0002<=\u0007\r\u0002\u0002=",
    ">\b\u0007\u0001\u0002>?\u0005\u0010\t\u0002?@\b\u0007\u0001\u0002@B",
    "\u0003\u0002\u0002\u0002A<\u0003\u0002\u0002\u0002BE\u0003\u0002\u0002",
    "\u0002CA\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002DF\u0003\u0002",
    "\u0002\u0002EC\u0003\u0002\u0002\u0002FG\u0007\u000b\u0002\u0002GH\b",
    "\u0007\u0001\u0002H\r\u0003\u0002\u0002\u0002IJ\u0007\u001a\u0002\u0002",
    "JK\u0007\f\u0002\u0002KL\u0005\u0010\t\u0002LM\b\b\u0001\u0002M\u000f",
    "\u0003\u0002\u0002\u0002NU\u0005\u0012\n\u0002OP\t\u0003\u0002\u0002",
    "PQ\u0005\u0012\n\u0002QR\b\t\u0001\u0002RT\u0003\u0002\u0002\u0002S",
    "O\u0003\u0002\u0002\u0002TW\u0003\u0002\u0002\u0002US\u0003\u0002\u0002",
    "\u0002UV\u0003\u0002\u0002\u0002V\u0011\u0003\u0002\u0002\u0002WU\u0003",
    "\u0002\u0002\u0002X_\u0005\u0014\u000b\u0002YZ\t\u0004\u0002\u0002Z",
    "[\u0005\u0014\u000b\u0002[\\\b\n\u0001\u0002\\^\u0003\u0002\u0002\u0002",
    "]Y\u0003\u0002\u0002\u0002^a\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002",
    "\u0002_`\u0003\u0002\u0002\u0002`\u0013\u0003\u0002\u0002\u0002a_\u0003",
    "\u0002\u0002\u0002bc\u0007\u0019\u0002\u0002co\b\u000b\u0001\u0002d",
    "e\u0007\n\u0002\u0002ef\u0005\u0010\t\u0002fg\u0007\u000b\u0002\u0002",
    "go\u0003\u0002\u0002\u0002hi\u0007\u001a\u0002\u0002io\b\u000b\u0001",
    "\u0002jk\u0007\u0017\u0002\u0002kl\u0007\n\u0002\u0002lm\u0007\u000b",
    "\u0002\u0002mo\b\u000b\u0001\u0002nb\u0003\u0002\u0002\u0002nd\u0003",
    "\u0002\u0002\u0002nh\u0003\u0002\u0002\u0002nj\u0003\u0002\u0002\u0002",
    "o\u0015\u0003\u0002\u0002\u0002\t\u001d$-CU_n"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ExpParser extends antlr4.Parser {

    static grammarFileName = "Exp.g4";
    static literalNames = [ null, null, null, "'+'", "'-'", "'*'", "'/'", 
                            "'%'", "'('", "')'", "'='", "','", "'{'", "'}'", 
                            "'=='", "'!='", "'>'", "'>='", "'<'", "'<='", 
                            "'print'", "'read_int'", "'if'" ];
    static symbolicNames = [ null, "COMMENT", "SPACE", "PLUS", "MINUS", 
                             "TIMES", "OVER", "REM", "OP_PAR", "CL_PAR", 
                             "ATTRIB", "COMMA", "OP_CUR", "CL_CUR", "EQ", 
                             "NE", "GT", "GE", "LT", "LE", "PRINT", "READ_INT", 
                             "IF", "NUMBER", "NAME" ];
    static ruleNames = [ "program", "main", "statement", "st_if", "comparison", 
                         "st_print", "st_attrib", "expression", "term", 
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
	            
	        this.state = 21;
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
	            
	        this.state = 25; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 24;
	            this.statement();
	            this.state = 27; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExpParser.PRINT) | (1 << ExpParser.IF) | (1 << ExpParser.NAME))) !== 0));

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
	        this.state = 34;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ExpParser.PRINT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 31;
	            this.st_print();
	            break;
	        case ExpParser.NAME:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 32;
	            this.st_attrib();
	            break;
	        case ExpParser.IF:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 33;
	            this.st_if();
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
	        this.state = 36;
	        this.match(ExpParser.IF);
	        this.state = 37;
	        localctx.bytecode = this.comparison();

	                let if_local = if_stack;
	                if_stack += 1;
	                const { bytecode } = this._ctx.bytecode;
	                emit(`${bytecode} NOT_IF_${if_local}`, -2);
	            
	        this.state = 39;
	        this.match(ExpParser.OP_CUR);
	        this.state = 41; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 40;
	            this.statement();
	            this.state = 43; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExpParser.PRINT) | (1 << ExpParser.IF) | (1 << ExpParser.NAME))) !== 0));
	        this.state = 45;
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



	comparison() {
	    let localctx = new ComparisonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ExpParser.RULE_comparison);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.expression();
	        this.state = 49;
	        localctx.op = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExpParser.EQ) | (1 << ExpParser.NE) | (1 << ExpParser.GT) | (1 << ExpParser.GE) | (1 << ExpParser.LT) | (1 << ExpParser.LE))) !== 0))) {
	            localctx.op = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 50;
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
	    this.enterRule(localctx, 10, ExpParser.RULE_st_print);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(ExpParser.PRINT);
	        this.state = 54;
	        this.match(ExpParser.OP_PAR);

	                emit("getstatic java/lang/System/out Ljava/io/PrintStream;", 1);
	            
	        this.state = 56;
	        this.expression();

	                emit("invokevirtual java/io/PrintStream/print(I)V\n", -2);
	            
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ExpParser.COMMA) {
	            this.state = 58;
	            this.match(ExpParser.COMMA);

	                    emit("getstatic java/lang/System/out Ljava/io/PrintStream;", 1);
	                
	            this.state = 60;
	            this.expression();

	                    emit("invokevirtual java/io/PrintStream/print(I)V\n", -2);
	                
	            this.state = 67;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 68;
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
	    this.enterRule(localctx, 12, ExpParser.RULE_st_attrib);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        localctx._NAME = this.match(ExpParser.NAME);
	        this.state = 72;
	        this.match(ExpParser.ATTRIB);
	        this.state = 73;
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
	    this.enterRule(localctx, 14, ExpParser.RULE_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.term();
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ExpParser.PLUS || _la===ExpParser.MINUS) {
	            this.state = 77;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===ExpParser.PLUS || _la===ExpParser.MINUS)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 78;
	            this.term();

	                    if ((localctx.op === null ? 0 : localctx.op.type) === ExpParser.PLUS) emit("iadd", -1)
	                    if ((localctx.op === null ? 0 : localctx.op.type) === ExpParser.MINUS) emit("isub", -1)
	                
	            this.state = 85;
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
	    this.enterRule(localctx, 16, ExpParser.RULE_term);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.factor();
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExpParser.TIMES) | (1 << ExpParser.OVER) | (1 << ExpParser.REM))) !== 0)) {
	            this.state = 87;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExpParser.TIMES) | (1 << ExpParser.OVER) | (1 << ExpParser.REM))) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 88;
	            this.factor();

	                    if ((localctx.op === null ? 0 : localctx.op.type) == ExpParser.TIMES) emit("imul", -1)
	                    if ((localctx.op === null ? 0 : localctx.op.type) == ExpParser.OVER) emit("idiv", -1)
	                    if ((localctx.op === null ? 0 : localctx.op.type) == ExpParser.REM) emit("irem", -1)
	                
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



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ExpParser.RULE_factor);
	    try {
	        this.state = 108;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ExpParser.NUMBER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 96;
	            localctx._NUMBER = this.match(ExpParser.NUMBER);

	                    emit(`ldc ${(localctx._NUMBER===null ? null : localctx._NUMBER.text)}`, 1);
	                
	            break;
	        case ExpParser.OP_PAR:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 98;
	            this.match(ExpParser.OP_PAR);
	            this.state = 99;
	            this.expression();
	            this.state = 100;
	            this.match(ExpParser.CL_PAR);
	            break;
	        case ExpParser.NAME:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 102;
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
	            this.state = 104;
	            this.match(ExpParser.READ_INT);
	            this.state = 105;
	            this.match(ExpParser.OP_PAR);
	            this.state = 106;
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
ExpParser.NUMBER = 23;
ExpParser.NAME = 24;

ExpParser.RULE_program = 0;
ExpParser.RULE_main = 1;
ExpParser.RULE_statement = 2;
ExpParser.RULE_st_if = 3;
ExpParser.RULE_comparison = 4;
ExpParser.RULE_st_print = 5;
ExpParser.RULE_st_attrib = 6;
ExpParser.RULE_expression = 7;
ExpParser.RULE_term = 8;
ExpParser.RULE_factor = 9;

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
ExpParser.ComparisonContext = ComparisonContext; 
ExpParser.St_printContext = St_printContext; 
ExpParser.St_attribContext = St_attribContext; 
ExpParser.ExpressionContext = ExpressionContext; 
ExpParser.TermContext = TermContext; 
ExpParser.FactorContext = FactorContext; 
