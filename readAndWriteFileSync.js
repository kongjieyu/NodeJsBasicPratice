//Sync reading file

var fs = require('fs');

//assign it to a variable
var readFile = fs.readFileSync('readFile.txt','utf-8');

console.log(readFile);

//---------------------------------------------------------

//Sync writing file
//write the file from readFile
fs.writeFileSync('writeFile.txt', readFile);