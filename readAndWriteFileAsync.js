var fs = require('fs');
//读文件

fs.readFile('readFileAsync.txt','utf8', function (err, data) {
    // fs.writeFile('hello.txt', data, (err) => {
    //     if (err) throw err;
    console.log(data+ '1:The file has been saved!');
// });
});

//
console.log('test');


//-----------------------------------------------------------------------------
//写文件
const data = new Uint8Array(Buffer.from('readFileAsync.txt'));

fs.writeFile('writeFileAsync.txt', data, (err) => {
    if (err) throw err;
console.log('2: The file has been saved!');
});

//-----------------------------------------------------------------------------

fs.readFile('readFileAsync.txt','utf8', function (err, data) {
    fs.writeFile('readAndWriteInSameFunction.txt', data, (err) => {
        if (err) throw err;
    console.log(data+ '3: I write a file from the readFileAsynx');
});
});

//
console.log('4: test');