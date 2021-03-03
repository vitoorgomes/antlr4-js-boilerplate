// Generated from Exp.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';

    // var symbol_table = Array();


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\b*\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u0019\n",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005 \n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0005\u0006(\n\u0006\u0003\u0006\u0002\u0002\u0007",
    "\u0002\u0004\u0006\b\n\u0002\u0002\u0002\'\u0002\f\u0003\u0002\u0002",
    "\u0002\u0004\u000f\u0003\u0002\u0002\u0002\u0006\u0013\u0003\u0002\u0002",
    "\u0002\b\u001a\u0003\u0002\u0002\u0002\n\'\u0003\u0002\u0002\u0002\f",
    "\r\b\u0002\u0001\u0002\r\u000e\u0005\u0004\u0003\u0002\u000e\u0003\u0003",
    "\u0002\u0002\u0002\u000f\u0010\b\u0003\u0001\u0002\u0010\u0011\u0005",
    "\u0006\u0004\u0002\u0011\u0012\b\u0003\u0001\u0002\u0012\u0005\u0003",
    "\u0002\u0002\u0002\u0013\u0018\u0005\b\u0005\u0002\u0014\u0015\u0007",
    "\u0003\u0002\u0002\u0015\u0016\u0005\u0006\u0004\u0002\u0016\u0017\b",
    "\u0004\u0001\u0002\u0017\u0019\u0003\u0002\u0002\u0002\u0018\u0014\u0003",
    "\u0002\u0002\u0002\u0018\u0019\u0003\u0002\u0002\u0002\u0019\u0007\u0003",
    "\u0002\u0002\u0002\u001a\u001f\u0005\n\u0006\u0002\u001b\u001c\u0007",
    "\u0004\u0002\u0002\u001c\u001d\u0005\b\u0005\u0002\u001d\u001e\b\u0005",
    "\u0001\u0002\u001e \u0003\u0002\u0002\u0002\u001f\u001b\u0003\u0002",
    "\u0002\u0002\u001f \u0003\u0002\u0002\u0002 \t\u0003\u0002\u0002\u0002",
    "!\"\u0007\u0007\u0002\u0002\"(\b\u0006\u0001\u0002#$\u0007\u0005\u0002",
    "\u0002$%\u0005\u0006\u0004\u0002%&\u0007\u0006\u0002\u0002&(\u0003\u0002",
    "\u0002\u0002\'!\u0003\u0002\u0002\u0002\'#\u0003\u0002\u0002\u0002(",
    "\u000b\u0003\u0002\u0002\u0002\u0005\u0018\u001f\'"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ExpParser extends antlr4.Parser {

    static grammarFileName = "Exp.g4";
    static literalNames = [ null, "'+'", "'*'", "'('", "')'" ];
    static symbolicNames = [ null, "PLUS", "TIMES", "OP_PAR", "CL_PAR", 
                             "NUMBER", "SPACE" ];
    static ruleNames = [ "program", "main", "expression", "term", "factor" ];

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
	            
	        this.state = 11;
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
	    try {
	        this.enterOuterAlt(localctx, 1);

	                console.log(".method public static main([Ljava/lang/String;)V\n");
	                console.log("    getstatic java/lang/System/out Ljava/io/PrintStream;");
	            
	        this.state = 14;
	        this.expression();

	                console.log("    invokevirtual java/io/PrintStream/println(I)V\n");
	                console.log("    return");
	                console.log(".limit stack 10");
	                console.log(".end method");
	                // console.log("\n; symbol_table: " + symbol_table);
	            
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
	    this.enterRule(localctx, 4, ExpParser.RULE_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this.term();
	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ExpParser.PLUS) {
	            this.state = 18;
	            localctx.op = this.match(ExpParser.PLUS);
	            this.state = 19;
	            this.expression();

	                    console.log("    iadd");
	                
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
	    this.enterRule(localctx, 6, ExpParser.RULE_term);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.factor();
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ExpParser.TIMES) {
	            this.state = 25;
	            localctx.op = this.match(ExpParser.TIMES);
	            this.state = 26;
	            this.term();

	                    console.log("    imul");
	                
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
	    this.enterRule(localctx, 8, ExpParser.RULE_factor);
	    try {
	        this.state = 37;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ExpParser.NUMBER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 31;
	            localctx._NUMBER = this.match(ExpParser.NUMBER);

	                    console.log("    ldc " + (localctx._NUMBER===null ? null : localctx._NUMBER.text));
	                    // symbol_table.push((localctx._NUMBER===null ? null : localctx._NUMBER.text));
	                
	            break;
	        case ExpParser.OP_PAR:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 33;
	            this.match(ExpParser.OP_PAR);
	            this.state = 34;
	            this.expression();
	            this.state = 35;
	            this.match(ExpParser.CL_PAR);
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
ExpParser.PLUS = 1;
ExpParser.TIMES = 2;
ExpParser.OP_PAR = 3;
ExpParser.CL_PAR = 4;
ExpParser.NUMBER = 5;
ExpParser.SPACE = 6;

ExpParser.RULE_program = 0;
ExpParser.RULE_main = 1;
ExpParser.RULE_expression = 2;
ExpParser.RULE_term = 3;
ExpParser.RULE_factor = 4;

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

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	PLUS() {
	    return this.getToken(ExpParser.PLUS, 0);
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

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	TIMES() {
	    return this.getToken(ExpParser.TIMES, 0);
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


}




ExpParser.ProgramContext = ProgramContext; 
ExpParser.MainContext = MainContext; 
ExpParser.ExpressionContext = ExpressionContext; 
ExpParser.TermContext = TermContext; 
ExpParser.FactorContext = FactorContext; 
