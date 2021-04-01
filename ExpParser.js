// Generated from Exp.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';

    const symbol_table = [];
    const used_symbols = [];
    let current_stack = 0;
    let max_stack = 0;

    function stackCounter(bytecode, value) {
        current_stack += value;
        if (current_stack > max_stack) {
            max_stack = current_stack;
        }
        console.log(`    ${bytecode}`)
    }


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0011[\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0006\u0003\u0018\n\u0003\r\u0003\u000e\u0003\u0019\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0005\u0004 \n\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005,\n\u0005\f\u0005",
    "\u000e\u0005/\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007>\n\u0007\f\u0007",
    "\u000e\u0007A\u000b\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007",
    "\bH\n\b\f\b\u000e\bK\u000b\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tY\n",
    "\t\u0003\t\u0002\u0002\n\u0002\u0004\u0006\b\n\f\u000e\u0010\u0002\u0004",
    "\u0003\u0002\u0005\u0006\u0003\u0002\u0007\t\u0002Z\u0002\u0012\u0003",
    "\u0002\u0002\u0002\u0004\u0015\u0003\u0002\u0002\u0002\u0006\u001f\u0003",
    "\u0002\u0002\u0002\b!\u0003\u0002\u0002\u0002\n3\u0003\u0002\u0002\u0002",
    "\f8\u0003\u0002\u0002\u0002\u000eB\u0003\u0002\u0002\u0002\u0010X\u0003",
    "\u0002\u0002\u0002\u0012\u0013\b\u0002\u0001\u0002\u0013\u0014\u0005",
    "\u0004\u0003\u0002\u0014\u0003\u0003\u0002\u0002\u0002\u0015\u0017\b",
    "\u0003\u0001\u0002\u0016\u0018\u0005\u0006\u0004\u0002\u0017\u0016\u0003",
    "\u0002\u0002\u0002\u0018\u0019\u0003\u0002\u0002\u0002\u0019\u0017\u0003",
    "\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002\u001a\u001b\u0003",
    "\u0002\u0002\u0002\u001b\u001c\b\u0003\u0001\u0002\u001c\u0005\u0003",
    "\u0002\u0002\u0002\u001d \u0005\b\u0005\u0002\u001e \u0005\n\u0006\u0002",
    "\u001f\u001d\u0003\u0002\u0002\u0002\u001f\u001e\u0003\u0002\u0002\u0002",
    " \u0007\u0003\u0002\u0002\u0002!\"\u0007\u000e\u0002\u0002\"#\u0007",
    "\n\u0002\u0002#$\b\u0005\u0001\u0002$%\u0005\f\u0007\u0002%-\b\u0005",
    "\u0001\u0002&\'\u0007\r\u0002\u0002\'(\b\u0005\u0001\u0002()\u0005\f",
    "\u0007\u0002)*\b\u0005\u0001\u0002*,\u0003\u0002\u0002\u0002+&\u0003",
    "\u0002\u0002\u0002,/\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002",
    "-.\u0003\u0002\u0002\u0002.0\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002",
    "\u000201\u0007\u000b\u0002\u000212\b\u0005\u0001\u00022\t\u0003\u0002",
    "\u0002\u000234\u0007\u0011\u0002\u000245\u0007\f\u0002\u000256\u0005",
    "\f\u0007\u000267\b\u0006\u0001\u00027\u000b\u0003\u0002\u0002\u0002",
    "8?\u0005\u000e\b\u00029:\t\u0002\u0002\u0002:;\u0005\u000e\b\u0002;",
    "<\b\u0007\u0001\u0002<>\u0003\u0002\u0002\u0002=9\u0003\u0002\u0002",
    "\u0002>A\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002?@\u0003\u0002",
    "\u0002\u0002@\r\u0003\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002BI",
    "\u0005\u0010\t\u0002CD\t\u0003\u0002\u0002DE\u0005\u0010\t\u0002EF\b",
    "\b\u0001\u0002FH\u0003\u0002\u0002\u0002GC\u0003\u0002\u0002\u0002H",
    "K\u0003\u0002\u0002\u0002IG\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002",
    "\u0002J\u000f\u0003\u0002\u0002\u0002KI\u0003\u0002\u0002\u0002LM\u0007",
    "\u0010\u0002\u0002MY\b\t\u0001\u0002NO\u0007\n\u0002\u0002OP\u0005\f",
    "\u0007\u0002PQ\u0007\u000b\u0002\u0002QY\u0003\u0002\u0002\u0002RS\u0007",
    "\u0011\u0002\u0002SY\b\t\u0001\u0002TU\u0007\u000f\u0002\u0002UV\u0007",
    "\n\u0002\u0002VW\u0007\u000b\u0002\u0002WY\b\t\u0001\u0002XL\u0003\u0002",
    "\u0002\u0002XN\u0003\u0002\u0002\u0002XR\u0003\u0002\u0002\u0002XT\u0003",
    "\u0002\u0002\u0002Y\u0011\u0003\u0002\u0002\u0002\b\u0019\u001f-?IX"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ExpParser extends antlr4.Parser {

    static grammarFileName = "Exp.g4";
    static literalNames = [ null, null, null, "'+'", "'-'", "'*'", "'/'", 
                            "'%'", "'('", "')'", "'='", "','", "'print'", 
                            "'read_int'" ];
    static symbolicNames = [ null, "COMMENT", "SPACE", "PLUS", "MINUS", 
                             "TIMES", "OVER", "REM", "OP_PAR", "CL_PAR", 
                             "ATTRIB", "COMMA", "PRINT", "READ_INT", "NUMBER", 
                             "NAME" ];
    static ruleNames = [ "program", "main", "statement", "st_print", "st_attrib", 
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
	            
	        this.state = 17;
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
	            
	        this.state = 21; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 20;
	            this.statement();
	            this.state = 23; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===ExpParser.PRINT || _la===ExpParser.NAME);

	                console.log("    return");
	                console.log(`.limit stack ${max_stack}`);
	                console.log(`.limit locals ${symbol_table.length}`);
	                console.log(".end method");
	                console.log("\n; symbol_table: ", symbol_table);
	                symbol_table.filter(v => !used_symbols.includes(v))
	                .map(u => {
	                    let message;
	                    if (u !== 'args') {
	                      console.error(`ERROR: '${u}' is defined but never used`);
	                      process.exit(1);
	                    }
	                    return message;
	                });
	            
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
	        this.state = 29;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ExpParser.PRINT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 27;
	            this.st_print();
	            break;
	        case ExpParser.NAME:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 28;
	            this.st_attrib();
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



	st_print() {
	    let localctx = new St_printContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ExpParser.RULE_st_print);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(ExpParser.PRINT);
	        this.state = 32;
	        this.match(ExpParser.OP_PAR);

	                stackCounter("getstatic java/lang/System/out Ljava/io/PrintStream;", 1);
	            
	        this.state = 34;
	        this.expression();

	                // console.log("    invokevirtual java/io/PrintStream/print(I)V\n");
	                stackCounter("invokevirtual java/io/PrintStream/print(I)V\n", 2);
	            
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ExpParser.COMMA) {
	            this.state = 36;
	            this.match(ExpParser.COMMA);

	                    stackCounter("getstatic java/lang/System/out Ljava/io/PrintStream;", 1);
	                
	            this.state = 38;
	            this.expression();

	                    // console.log("    invokevirtual java/io/PrintStream/print(I)V\n");
	                    stackCounter("invokevirtual java/io/PrintStream/print(I)V\n", 2);
	                
	            this.state = 45;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 46;
	        this.match(ExpParser.CL_PAR);

	                stackCounter("getstatic java/lang/System/out Ljava/io/PrintStream;", 1);
	                stackCounter("invokevirtual java/io/PrintStream/println()V\n", -1);
	            
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
	    this.enterRule(localctx, 8, ExpParser.RULE_st_attrib);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        localctx._NAME = this.match(ExpParser.NAME);
	        this.state = 50;
	        this.match(ExpParser.ATTRIB);
	        this.state = 51;
	        this.expression();

	                const variable = (localctx._NAME===null ? null : localctx._NAME.text);
	                if (!symbol_table.find(symbol => symbol === variable)) symbol_table.push(variable)

	                const index = symbol_table.findIndex(symbol => symbol === variable);
	                stackCounter(`istore ${index} \n`, -1);
	            
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
	    this.enterRule(localctx, 10, ExpParser.RULE_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.term();
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ExpParser.PLUS || _la===ExpParser.MINUS) {
	            this.state = 55;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===ExpParser.PLUS || _la===ExpParser.MINUS)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 56;
	            this.term();

	                    if ((localctx.op === null ? 0 : localctx.op.type) === ExpParser.PLUS) stackCounter("iadd", -1)
	                    if ((localctx.op === null ? 0 : localctx.op.type) === ExpParser.MINUS) stackCounter("isub", -1)
	                
	            this.state = 63;
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
	    this.enterRule(localctx, 12, ExpParser.RULE_term);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.factor();
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExpParser.TIMES) | (1 << ExpParser.OVER) | (1 << ExpParser.REM))) !== 0)) {
	            this.state = 65;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExpParser.TIMES) | (1 << ExpParser.OVER) | (1 << ExpParser.REM))) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 66;
	            this.factor();

	                    if ((localctx.op === null ? 0 : localctx.op.type) == ExpParser.TIMES) stackCounter("imul", -1)
	                    if ((localctx.op === null ? 0 : localctx.op.type) == ExpParser.OVER) stackCounter("idiv", -1)
	                    if ((localctx.op === null ? 0 : localctx.op.type) == ExpParser.REM) stackCounter("irem", -1)
	                
	            this.state = 73;
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
	    this.enterRule(localctx, 14, ExpParser.RULE_factor);
	    try {
	        this.state = 86;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ExpParser.NUMBER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 74;
	            localctx._NUMBER = this.match(ExpParser.NUMBER);

	                    stackCounter(`ldc ${(localctx._NUMBER===null ? null : localctx._NUMBER.text)}`, 1);
	                
	            break;
	        case ExpParser.OP_PAR:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 76;
	            this.match(ExpParser.OP_PAR);
	            this.state = 77;
	            this.expression();
	            this.state = 78;
	            this.match(ExpParser.CL_PAR);
	            break;
	        case ExpParser.NAME:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 80;
	            localctx._NAME = this.match(ExpParser.NAME);

	                    const variable = (localctx._NAME===null ? null : localctx._NAME.text);
	                    const index = symbol_table.findIndex(symbol => symbol === variable);
	                    if (index === -1) {
	                        console.error(`ERROR: Variable '${variable}' is not defined`);
	                        process.exit(1);
	                    } else {
	                        used_symbols.push(variable);
	                        stackCounter(`iload ${index}`, 1);
	                    }
	                
	            break;
	        case ExpParser.READ_INT:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 82;
	            this.match(ExpParser.READ_INT);
	            this.state = 83;
	            this.match(ExpParser.OP_PAR);
	            this.state = 84;
	            this.match(ExpParser.CL_PAR);

	                    stackCounter("invokestatic Runtime/readInt()I", 1);
	                
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
ExpParser.PRINT = 12;
ExpParser.READ_INT = 13;
ExpParser.NUMBER = 14;
ExpParser.NAME = 15;

ExpParser.RULE_program = 0;
ExpParser.RULE_main = 1;
ExpParser.RULE_statement = 2;
ExpParser.RULE_st_print = 3;
ExpParser.RULE_st_attrib = 4;
ExpParser.RULE_expression = 5;
ExpParser.RULE_term = 6;
ExpParser.RULE_factor = 7;

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
ExpParser.St_printContext = St_printContext; 
ExpParser.St_attribContext = St_attribContext; 
ExpParser.ExpressionContext = ExpressionContext; 
ExpParser.TermContext = TermContext; 
ExpParser.FactorContext = FactorContext; 
