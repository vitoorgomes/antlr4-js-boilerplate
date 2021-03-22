// Generated from Exp.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u000fM\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0007",
    "\u0002 \n\u0002\f\u0002\u000e\u0002#\u000b\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0006\u0003(\n\u0003\r\u0003\u000e\u0003)\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\r\u0006\rE\n\r\r\r\u000e\rF\u0003\u000e\u0006\u000e",
    "J\n\u000e\r\u000e\u000e\u000eK\u0002\u0002\u000f\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015",
    "\f\u0017\r\u0019\u000e\u001b\u000f\u0003\u0002\u0004\u0003\u0002\f\f",
    "\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002P\u0002\u0003\u0003\u0002",
    "\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002",
    "\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002",
    "\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002",
    "\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002",
    "\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002",
    "\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002",
    "\u0002\u0002\u0003\u001d\u0003\u0002\u0002\u0002\u0005\'\u0003\u0002",
    "\u0002\u0002\u0007-\u0003\u0002\u0002\u0002\t/\u0003\u0002\u0002\u0002",
    "\u000b1\u0003\u0002\u0002\u0002\r3\u0003\u0002\u0002\u0002\u000f5\u0003",
    "\u0002\u0002\u0002\u00117\u0003\u0002\u0002\u0002\u00139\u0003\u0002",
    "\u0002\u0002\u0015;\u0003\u0002\u0002\u0002\u0017=\u0003\u0002\u0002",
    "\u0002\u0019D\u0003\u0002\u0002\u0002\u001bI\u0003\u0002\u0002\u0002",
    "\u001d!\u0007%\u0002\u0002\u001e \n\u0002\u0002\u0002\u001f\u001e\u0003",
    "\u0002\u0002\u0002 #\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002",
    "\u0002!\"\u0003\u0002\u0002\u0002\"$\u0003\u0002\u0002\u0002#!\u0003",
    "\u0002\u0002\u0002$%\b\u0002\u0002\u0002%\u0004\u0003\u0002\u0002\u0002",
    "&(\t\u0003\u0002\u0002\'&\u0003\u0002\u0002\u0002()\u0003\u0002\u0002",
    "\u0002)\'\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*+\u0003",
    "\u0002\u0002\u0002+,\b\u0003\u0002\u0002,\u0006\u0003\u0002\u0002\u0002",
    "-.\u0007-\u0002\u0002.\b\u0003\u0002\u0002\u0002/0\u0007?\u0002\u0002",
    "0\n\u0003\u0002\u0002\u000212\u0007/\u0002\u00022\f\u0003\u0002\u0002",
    "\u000234\u0007,\u0002\u00024\u000e\u0003\u0002\u0002\u000256\u00071",
    "\u0002\u00026\u0010\u0003\u0002\u0002\u000278\u0007\'\u0002\u00028\u0012",
    "\u0003\u0002\u0002\u00029:\u0007*\u0002\u0002:\u0014\u0003\u0002\u0002",
    "\u0002;<\u0007+\u0002\u0002<\u0016\u0003\u0002\u0002\u0002=>\u0007r",
    "\u0002\u0002>?\u0007t\u0002\u0002?@\u0007k\u0002\u0002@A\u0007p\u0002",
    "\u0002AB\u0007v\u0002\u0002B\u0018\u0003\u0002\u0002\u0002CE\u00042",
    ";\u0002DC\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002FD\u0003",
    "\u0002\u0002\u0002FG\u0003\u0002\u0002\u0002G\u001a\u0003\u0002\u0002",
    "\u0002HJ\u0004c|\u0002IH\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002",
    "\u0002KI\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002L\u001c\u0003",
    "\u0002\u0002\u0002\u0007\u0002!)FK\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class ExpLexer extends antlr4.Lexer {

    static grammarFileName = "Exp.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, "'+'", "'='", "'-'", "'*'", "'/'", 
                         "'%'", "'('", "')'", "'print'" ];
	static symbolicNames = [ null, "COMMENT", "SPACE", "PLUS", "ATTRIB", "MINUS", 
                          "TIMES", "OVER", "REM", "OP_PAR", "CL_PAR", "PRINT", 
                          "NUMBER", "NAME" ];
	static ruleNames = [ "COMMENT", "SPACE", "PLUS", "ATTRIB", "MINUS", "TIMES", 
                      "OVER", "REM", "OP_PAR", "CL_PAR", "PRINT", "NUMBER", 
                      "NAME" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

ExpLexer.EOF = antlr4.Token.EOF;
ExpLexer.COMMENT = 1;
ExpLexer.SPACE = 2;
ExpLexer.PLUS = 3;
ExpLexer.ATTRIB = 4;
ExpLexer.MINUS = 5;
ExpLexer.TIMES = 6;
ExpLexer.OVER = 7;
ExpLexer.REM = 8;
ExpLexer.OP_PAR = 9;
ExpLexer.CL_PAR = 10;
ExpLexer.PRINT = 11;
ExpLexer.NUMBER = 12;
ExpLexer.NAME = 13;



