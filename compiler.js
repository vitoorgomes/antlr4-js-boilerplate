import antlr4 from 'antlr4';
import ExpLexer from './ExpLexer.js';
import ExpParser from './ExpParser.js';
import getFileName from './fileList.js';
import fs from 'fs';

const compile = async () => {
  // const fileName = await getFileName();
  // console.clear();
  // const fileName = 'test-01-constant-expressions.exp';
  // const fileName = 'test-02-left-associativity.exp';
  // const fileName = 'test-03-variables.exp';
  // const fileName = 'error-01-undefined-variables.exp';
  const fileName = 'error-02-unused-variables.exp';
  // const fileName = 'VarSum.exp';
  if (fileName) {
    const input = fs.readFileSync(`./testsFiles/${fileName}`, 'utf-8')
    if (input) {
      const chars = new antlr4.InputStream(input);
      const lexer = new ExpLexer(chars);
      const tokens = new antlr4.CommonTokenStream(lexer);
      const parser = new ExpParser(tokens);
      parser.program();
    }
  }
}
compile();