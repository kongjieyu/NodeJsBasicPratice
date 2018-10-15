//take data from a read stream and then pipe it into a write stream
var http = require('http');
var fs = require('fs');
// Create a read stream 
//without the utf-8, it's just a stream, if setting the utf-8, we're going to receive it as txt
var readStream = fs.createReadStream(__dirname + '/readStream2.txt', 'utf-8');

// Create a write stream.
var writeStream = fs.createWriteStream(__dirname + '/writeStream3.txt');

//pipe from a readable stream to a writable stream; notice: be not pipe from a writable stream
//this line of code will work exactly the same as the code below

// readStream.on('data', function (chunk) {
//     console.log('new chunk received:');
//     console.log(chunk);
//     writeStream.write(chunk);
// });

readStream.pipe(writeStream);