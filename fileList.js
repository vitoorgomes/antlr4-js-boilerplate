import fs from 'fs';
import path from 'path';
import readline from 'readline';

const readFilesSync = (dir) => {
  const files = [];
  let i = 0;
  fs.readdirSync(dir).forEach(filename => {
    files.push({ index: i, name: path.parse(filename).base});
    i++;
  });
  return files;
}

const getFileName = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const testFiles = readFilesSync('./testsFiles/');
  return new Promise(resolve => 
    rl.question(`Test files are: ${testFiles.map(file => `\n Index: ${file.index} | TestFile: ${file.name}`)} \n\nChoose one index!\n`, 
      (answer) => {
        const fileName = testFiles[answer].name;
        rl.close();
        resolve(fileName);
        console.clear();
      }
    )
  );
}

export default getFileName;