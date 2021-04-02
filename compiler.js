import antlr4 from 'antlr4';
import fs from 'fs';
import ExpLexer from './ExpLexer.js';
import ExpParser from './ExpParser.js';
import getFileName from './fileList.js';

const compile = async () => {
  // const fileName = await getFileName();
  // console.clear();
    // const fileName = 'test-01-constant-expressions.exp';
    // const fileName = 'test-02-left-associativity.exp';
    // const fileName = 'test-03-variables.exp';

  /* ---------------- VERSION 2 ----------------*/
    // const fileName = 'error-01-undefined-variables.exp';
    // const fileName = 'error-02-unused-variables.exp';
    // const fileName = 'VarSum.exp';
  /* ----------------    END   -----------------*/

  /* ---------------- VERSION 3 ----------------*/
    // const fileName = 'MultiPrint.exp';
    // const fileName = 'Read.exp';
    // const fileName = 'StackSize.exp';
  /* ----------------    END   -----------------*/

  /* ---------------- VERSION 4 ----------------*/
    // const fileName = 'If.exp';
    // const fileName = 'test-07-sequential-if.exp';
    const fileName = 'test-08-chained-if.exp';
  /* ----------------    END   -----------------*/

  if (fileName) {
    const input = fs.readFileSync(`./testsFiles/${fileName}`, 'utf-8');
    if (input) {
      const chars = new antlr4.InputStream(input);
      const lexer = new ExpLexer(chars);
      const tokens = new antlr4.CommonTokenStream(lexer);
      const parser = new ExpParser(tokens);
      parser.program();
    }
  }
};
compile();
