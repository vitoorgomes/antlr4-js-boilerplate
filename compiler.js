import antlr4 from 'antlr4';
import fs from 'fs';
import ExpLexer from './ExpLexer.js';
import ExpParser from './ExpParser.js';
import getFileName from './fileList.js';

const compile = async () => {
    // const fileName = 'test-01-constant-expressions.exp';        // OK
    // const fileName = 'test-02-left-associativity.exp';          // OK
    // const fileName = 'test-03-variables.exp';                   // OK

  /* ---------------- VERSION 2 ----------------*/
    // const fileName = 'error-01-undefined-variables.exp';        // OK
    // const fileName = 'error-02-unused-variables.exp';           // OK
    // const fileName = 'VarSum.exp';                              // OK
  /* ----------------    END   -----------------*/

  /* ---------------- VERSION 3 ----------------*/
    // const fileName = 'MultiPrint.exp';                          // OK
    // const fileName = 'Read.exp';                                // OK
    // const fileName = 'StackSize.exp';                           // OK
  /* ----------------    END   -----------------*/

  /* ---------------- VERSION 4 ----------------*/
    // const fileName = 'If.exp';                                  // OK
    // const fileName = 'test-07-sequential-if.exp';               // OK
    // const fileName = 'test-08-chained-if.exp';                  // OK
  /* ----------------    END   -----------------*/

  /* ---------------- VERSION 5 ----------------*/
    // const fileName = 'While.exp';                               // OK
    // const fileName = 'test-09-sequential-while.exp';            // OK
    // const fileName = 'test-10-chained-while.exp';               // OK
    // const fileName = 'test-11-break-continue.exp';              // OK
    // const fileName = 'error-03-break-continue.exp';             // OK
  /* ----------------    END   -----------------*/

  /* ---------------- VERSION 6 ----------------*/
    // const fileName = 'IfElse.exp';                              // OK
    // const fileName = 'test-12-chained-conditionals.exp';        // OK
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
