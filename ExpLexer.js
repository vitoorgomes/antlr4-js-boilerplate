// Generated from Exp.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u001d\u00a0\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0003\u0002\u0003\u0002\u0007",
    "\u0002<\n\u0002\f\u0002\u000e\u0002?\u000b\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0006\u0003D\n\u0003\r\u0003\u000e\u0003E\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0006\u001b\u0098\n\u001b",
    "\r\u001b\u000e\u001b\u0099\u0003\u001c\u0006\u001c\u009d\n\u001c\r\u001c",
    "\u000e\u001c\u009e\u0002\u0002\u001d\u0003\u0003\u0005\u0004\u0007\u0005",
    "\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r",
    "\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014",
    "\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d\u0003",
    "\u0002\u0004\u0003\u0002\f\f\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002",
    "\u00a3\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002",
    "\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002",
    "\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002",
    "\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002",
    "\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002",
    "\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002",
    "\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002",
    "+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003",
    "\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u00023\u0003\u0002",
    "\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u00027\u0003\u0002\u0002",
    "\u0002\u00039\u0003\u0002\u0002\u0002\u0005C\u0003\u0002\u0002\u0002",
    "\u0007I\u0003\u0002\u0002\u0002\tK\u0003\u0002\u0002\u0002\u000bM\u0003",
    "\u0002\u0002\u0002\rO\u0003\u0002\u0002\u0002\u000fQ\u0003\u0002\u0002",
    "\u0002\u0011S\u0003\u0002\u0002\u0002\u0013U\u0003\u0002\u0002\u0002",
    "\u0015W\u0003\u0002\u0002\u0002\u0017Y\u0003\u0002\u0002\u0002\u0019",
    "[\u0003\u0002\u0002\u0002\u001b]\u0003\u0002\u0002\u0002\u001d_\u0003",
    "\u0002\u0002\u0002\u001fb\u0003\u0002\u0002\u0002!e\u0003\u0002\u0002",
    "\u0002#g\u0003\u0002\u0002\u0002%j\u0003\u0002\u0002\u0002\'l\u0003",
    "\u0002\u0002\u0002)o\u0003\u0002\u0002\u0002+u\u0003\u0002\u0002\u0002",
    "-~\u0003\u0002\u0002\u0002/\u0081\u0003\u0002\u0002\u00021\u0087\u0003",
    "\u0002\u0002\u00023\u008d\u0003\u0002\u0002\u00025\u0097\u0003\u0002",
    "\u0002\u00027\u009c\u0003\u0002\u0002\u00029=\u0007%\u0002\u0002:<\n",
    "\u0002\u0002\u0002;:\u0003\u0002\u0002\u0002<?\u0003\u0002\u0002\u0002",
    "=;\u0003\u0002\u0002\u0002=>\u0003\u0002\u0002\u0002>@\u0003\u0002\u0002",
    "\u0002?=\u0003\u0002\u0002\u0002@A\b\u0002\u0002\u0002A\u0004\u0003",
    "\u0002\u0002\u0002BD\t\u0003\u0002\u0002CB\u0003\u0002\u0002\u0002D",
    "E\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002",
    "\u0002FG\u0003\u0002\u0002\u0002GH\b\u0003\u0002\u0002H\u0006\u0003",
    "\u0002\u0002\u0002IJ\u0007-\u0002\u0002J\b\u0003\u0002\u0002\u0002K",
    "L\u0007/\u0002\u0002L\n\u0003\u0002\u0002\u0002MN\u0007,\u0002\u0002",
    "N\f\u0003\u0002\u0002\u0002OP\u00071\u0002\u0002P\u000e\u0003\u0002",
    "\u0002\u0002QR\u0007\'\u0002\u0002R\u0010\u0003\u0002\u0002\u0002ST",
    "\u0007*\u0002\u0002T\u0012\u0003\u0002\u0002\u0002UV\u0007+\u0002\u0002",
    "V\u0014\u0003\u0002\u0002\u0002WX\u0007?\u0002\u0002X\u0016\u0003\u0002",
    "\u0002\u0002YZ\u0007.\u0002\u0002Z\u0018\u0003\u0002\u0002\u0002[\\",
    "\u0007}\u0002\u0002\\\u001a\u0003\u0002\u0002\u0002]^\u0007\u007f\u0002",
    "\u0002^\u001c\u0003\u0002\u0002\u0002_`\u0007?\u0002\u0002`a\u0007?",
    "\u0002\u0002a\u001e\u0003\u0002\u0002\u0002bc\u0007#\u0002\u0002cd\u0007",
    "?\u0002\u0002d \u0003\u0002\u0002\u0002ef\u0007@\u0002\u0002f\"\u0003",
    "\u0002\u0002\u0002gh\u0007@\u0002\u0002hi\u0007?\u0002\u0002i$\u0003",
    "\u0002\u0002\u0002jk\u0007>\u0002\u0002k&\u0003\u0002\u0002\u0002lm",
    "\u0007>\u0002\u0002mn\u0007?\u0002\u0002n(\u0003\u0002\u0002\u0002o",
    "p\u0007r\u0002\u0002pq\u0007t\u0002\u0002qr\u0007k\u0002\u0002rs\u0007",
    "p\u0002\u0002st\u0007v\u0002\u0002t*\u0003\u0002\u0002\u0002uv\u0007",
    "t\u0002\u0002vw\u0007g\u0002\u0002wx\u0007c\u0002\u0002xy\u0007f\u0002",
    "\u0002yz\u0007a\u0002\u0002z{\u0007k\u0002\u0002{|\u0007p\u0002\u0002",
    "|}\u0007v\u0002\u0002},\u0003\u0002\u0002\u0002~\u007f\u0007k\u0002",
    "\u0002\u007f\u0080\u0007h\u0002\u0002\u0080.\u0003\u0002\u0002\u0002",
    "\u0081\u0082\u0007y\u0002\u0002\u0082\u0083\u0007j\u0002\u0002\u0083",
    "\u0084\u0007k\u0002\u0002\u0084\u0085\u0007n\u0002\u0002\u0085\u0086",
    "\u0007g\u0002\u0002\u00860\u0003\u0002\u0002\u0002\u0087\u0088\u0007",
    "d\u0002\u0002\u0088\u0089\u0007t\u0002\u0002\u0089\u008a\u0007g\u0002",
    "\u0002\u008a\u008b\u0007c\u0002\u0002\u008b\u008c\u0007m\u0002\u0002",
    "\u008c2\u0003\u0002\u0002\u0002\u008d\u008e\u0007e\u0002\u0002\u008e",
    "\u008f\u0007q\u0002\u0002\u008f\u0090\u0007p\u0002\u0002\u0090\u0091",
    "\u0007v\u0002\u0002\u0091\u0092\u0007k\u0002\u0002\u0092\u0093\u0007",
    "p\u0002\u0002\u0093\u0094\u0007w\u0002\u0002\u0094\u0095\u0007g\u0002",
    "\u0002\u00954\u0003\u0002\u0002\u0002\u0096\u0098\u00042;\u0002\u0097",
    "\u0096\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099",
    "\u0097\u0003\u0002\u0002\u0002\u0099\u009a\u0003\u0002\u0002\u0002\u009a",
    "6\u0003\u0002\u0002\u0002\u009b\u009d\u0004c|\u0002\u009c\u009b\u0003",
    "\u0002\u0002\u0002\u009d\u009e\u0003\u0002\u0002\u0002\u009e\u009c\u0003",
    "\u0002\u0002\u0002\u009e\u009f\u0003\u0002\u0002\u0002\u009f8\u0003",
    "\u0002\u0002\u0002\u0007\u0002=E\u0099\u009e\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class ExpLexer extends antlr4.Lexer {

    static grammarFileName = "Exp.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, "'+'", "'-'", "'*'", "'/'", "'%'", 
                         "'('", "')'", "'='", "','", "'{'", "'}'", "'=='", 
                         "'!='", "'>'", "'>='", "'<'", "'<='", "'print'", 
                         "'read_int'", "'if'", "'while'", "'break'", "'continue'" ];
	static symbolicNames = [ null, "COMMENT", "SPACE", "PLUS", "MINUS", "TIMES", 
                          "OVER", "REM", "OP_PAR", "CL_PAR", "ATTRIB", "COMMA", 
                          "OP_CUR", "CL_CUR", "EQ", "NE", "GT", "GE", "LT", 
                          "LE", "PRINT", "READ_INT", "IF", "WHILE", "BREAK", 
                          "CONTINUE", "NUMBER", "NAME" ];
	static ruleNames = [ "COMMENT", "SPACE", "PLUS", "MINUS", "TIMES", "OVER", 
                      "REM", "OP_PAR", "CL_PAR", "ATTRIB", "COMMA", "OP_CUR", 
                      "CL_CUR", "EQ", "NE", "GT", "GE", "LT", "LE", "PRINT", 
                      "READ_INT", "IF", "WHILE", "BREAK", "CONTINUE", "NUMBER", 
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
ExpLexer.MINUS = 4;
ExpLexer.TIMES = 5;
ExpLexer.OVER = 6;
ExpLexer.REM = 7;
ExpLexer.OP_PAR = 8;
ExpLexer.CL_PAR = 9;
ExpLexer.ATTRIB = 10;
ExpLexer.COMMA = 11;
ExpLexer.OP_CUR = 12;
ExpLexer.CL_CUR = 13;
ExpLexer.EQ = 14;
ExpLexer.NE = 15;
ExpLexer.GT = 16;
ExpLexer.GE = 17;
ExpLexer.LT = 18;
ExpLexer.LE = 19;
ExpLexer.PRINT = 20;
ExpLexer.READ_INT = 21;
ExpLexer.IF = 22;
ExpLexer.WHILE = 23;
ExpLexer.BREAK = 24;
ExpLexer.CONTINUE = 25;
ExpLexer.NUMBER = 26;
ExpLexer.NAME = 27;



