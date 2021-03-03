import antlr4 from 'antlr4';
import ExpLexer from './ExpLexer.js';
import ExpParser from './ExpParser.js'

const input = "1 + 2"
const chars = new antlr4.InputStream(input);
const lexer = new ExpLexer(chars);
const tokens  = new antlr4.CommonTokenStream(lexer);
const parser = new ExpParser(tokens);

parser.program();