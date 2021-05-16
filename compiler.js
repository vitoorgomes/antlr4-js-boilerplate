import antlr4 from 'antlr4';
import fs from 'fs';
import ExpLexer from './ExpLexer.js';
import ExpParser from './ExpParser.js';
import getFileName from './fileList.js';

const compile = async () => {
  /* ---------------- VERSION 1 ----------------*/
    // const fileName = 'v1/test-01-constant-expressions.exp';        // OK
    // const fileName = 'v1/test-02-left-associativity.exp';          // OK
    // const fileName = 'v1/test-03-variables.exp';                   // OK
  /* ----------------    END   -----------------*/

  /* ---------------- VERSION 2 ----------------*/
    // const fileName = 'v2/error-01-undefined-variables.exp';        // OK
    // const fileName = 'v2/error-02-unused-variables.exp';           // OK
    // const fileName = 'v2/VarSum.exp';                              // OK
  /* ----------------    END   -----------------*/

  /* ---------------- VERSION 3 ----------------*/
    // const fileName = 'v3/MultiPrint.exp';                          // OK
    // const fileName = 'v3/Read.exp';                                // OK
    // const fileName = 'v3/StackSize.exp';                           // OK
  /* ----------------    END   -----------------*/

  /* ---------------- VERSION 4 ----------------*/
    // const fileName = 'v4/If.exp';                                  // OK
    // const fileName = 'v4/test-07-sequential-if.exp';               // OK
    // const fileName = 'v4/test-08-chained-if.exp';                  // OK
  /* ----------------    END   -----------------*/

  /* ---------------- VERSION 5 ----------------*/
    // const fileName = 'v5/While.exp';                               // OK
    // const fileName = 'v5/test-09-sequential-while.exp';            // OK
    // const fileName = 'v5/test-10-chained-while.exp';               // OK
    // const fileName = 'v5/test-11-break-continue.exp';              // OK
    // const fileName = 'v5/error-03-break-continue.exp';             // OK
  /* ----------------    END   -----------------*/

  /* ---------------- VERSION 6 ----------------*/
    // const fileName = 'v6/IfElse.exp';                              // OK
    // const fileName = 'v6/test-12-chained-conditionals.exp';        // OK
  /* ----------------    END   -----------------*/

  /* ---------------- VERSION 7 ----------------*/
    // const fileName = 'v7/String.exp';                              // OK
    // const fileName = 'v7/test-13-strings.exp';                     // OK
    // const fileName = 'v7/error-04-type-checking.exp';              // OK
  /* ----------------    END   -----------------*/

  /* ---------------- VERSION 8 ----------------*/
    // const fileName = 'v8/TestArray.exp';                           // OKish
    const fileName = 'v8/test-14-array.exp';
    // const fileName = 'v8/error-05-array-checking.exp';             // OK
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
