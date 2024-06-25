const fs = require('fs');
const filePath = "F:\\NodeJS\\Assests\\array.txt";
 const readFileLines = fileName =>fs.readFileSync(filePath).toString('utf8').split('\n');


 let arr = readFileLines(filePath);

 console.log(arr);