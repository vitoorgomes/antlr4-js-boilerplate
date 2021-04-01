// Generated from Exp.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0011\\\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0003\u0002\u0003\u0002\u0007\u0002$\n\u0002\f\u0002\u000e",
    "\u0002\'\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0006\u0003",
    ",\n\u0003\r\u0003\u000e\u0003-\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0006\u000fT",
    "\n\u000f\r\u000f\u000e\u000fU\u0003\u0010\u0006\u0010Y\n\u0010\r\u0010",
    "\u000e\u0010Z\u0002\u0002\u0011\u0003\u0003\u0005\u0004\u0007\u0005",
    "\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r",
    "\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011\u0003\u0002\u0004\u0003",
    "\u0002\f\f\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002_\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003",
    "\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003",
    "\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003",
    "\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003",
    "\u0002\u0002\u0002\u0003!\u0003\u0002\u0002\u0002\u0005+\u0003\u0002",
    "\u0002\u0002\u00071\u0003\u0002\u0002\u0002\t3\u0003\u0002\u0002\u0002",
    "\u000b5\u0003\u0002\u0002\u0002\r7\u0003\u0002\u0002\u0002\u000f9\u0003",
    "\u0002\u0002\u0002\u0011;\u0003\u0002\u0002\u0002\u0013=\u0003\u0002",
    "\u0002\u0002\u0015?\u0003\u0002\u0002\u0002\u0017A\u0003\u0002\u0002",
    "\u0002\u0019C\u0003\u0002\u0002\u0002\u001bI\u0003\u0002\u0002\u0002",
    "\u001dS\u0003\u0002\u0002\u0002\u001fX\u0003\u0002\u0002\u0002!%\u0007",
    "%\u0002\u0002\"$\n\u0002\u0002\u0002#\"\u0003\u0002\u0002\u0002$\'\u0003",
    "\u0002\u0002\u0002%#\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002",
    "&(\u0003\u0002\u0002\u0002\'%\u0003\u0002\u0002\u0002()\b\u0002\u0002",
    "\u0002)\u0004\u0003\u0002\u0002\u0002*,\t\u0003\u0002\u0002+*\u0003",
    "\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002",
    "-.\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/0\b\u0003\u0002",
    "\u00020\u0006\u0003\u0002\u0002\u000212\u0007-\u0002\u00022\b\u0003",
    "\u0002\u0002\u000234\u0007/\u0002\u00024\n\u0003\u0002\u0002\u00025",
    "6\u0007,\u0002\u00026\f\u0003\u0002\u0002\u000278\u00071\u0002\u0002",
    "8\u000e\u0003\u0002\u0002\u00029:\u0007\'\u0002\u0002:\u0010\u0003\u0002",
    "\u0002\u0002;<\u0007*\u0002\u0002<\u0012\u0003\u0002\u0002\u0002=>\u0007",
    "+\u0002\u0002>\u0014\u0003\u0002\u0002\u0002?@\u0007?\u0002\u0002@\u0016",
    "\u0003\u0002\u0002\u0002AB\u0007.\u0002\u0002B\u0018\u0003\u0002\u0002",
    "\u0002CD\u0007r\u0002\u0002DE\u0007t\u0002\u0002EF\u0007k\u0002\u0002",
    "FG\u0007p\u0002\u0002GH\u0007v\u0002\u0002H\u001a\u0003\u0002\u0002",
    "\u0002IJ\u0007t\u0002\u0002JK\u0007g\u0002\u0002KL\u0007c\u0002\u0002",
    "LM\u0007f\u0002\u0002MN\u0007a\u0002\u0002NO\u0007k\u0002\u0002OP\u0007",
    "p\u0002\u0002PQ\u0007v\u0002\u0002Q\u001c\u0003\u0002\u0002\u0002RT",
    "\u00042;\u0002SR\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002U",
    "S\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002V\u001e\u0003\u0002",
    "\u0002\u0002WY\u0004c|\u0002XW\u0003\u0002\u0002\u0002YZ\u0003\u0002",
    "\u0002\u0002ZX\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002[ \u0003",
    "\u0002\u0002\u0002\u0007\u0002%-UZ\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class ExpLexer extends antlr4.Lexer {

    static grammarFileName = "Exp.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, "'+'", "'-'", "'*'", "'/'", "'%'", 
                         "'('", "')'", "'='", "','", "'print'", "'read_int'" ];
	static symbolicNames = [ null, "COMMENT", "SPACE", "PLUS", "MINUS", "TIMES", 
                          "OVER", "REM", "OP_PAR", "CL_PAR", "ATTRIB", "COMMA", 
                          "PRINT", "READ_INT", "NUMBER", "NAME" ];
	static ruleNames = [ "COMMENT", "SPACE", "PLUS", "MINUS", "TIMES", "OVER", 
                      "REM", "OP_PAR", "CL_PAR", "ATTRIB", "COMMA", "PRINT", 
                      "READ_INT", "NUMBER", "NAME" ];

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
ExpLexer.MINUS = 4;
ExpLexer.TIMES = 5;
ExpLexer.OVER = 6;
ExpLexer.REM = 7;
ExpLexer.OP_PAR = 8;
ExpLexer.CL_PAR = 9;
ExpLexer.ATTRIB = 10;
ExpLexer.COMMA = 11;
ExpLexer.PRINT = 12;
ExpLexer.READ_INT = 13;
ExpLexer.NUMBER = 14;
ExpLexer.NAME = 15;



