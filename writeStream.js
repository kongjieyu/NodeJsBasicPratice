var http = require('http');
var fs = require('fs');
// Create a stream from some character  device.
//without the utf-8, it's just a stream, if setting the utf-8, we're going to receive it as txt
var readStream = fs.createReadStream(__dirname + '/readStream2.txt', 'utf-8');

// Create a write stream.
var writeStream = fs.createWriteStream(__dirname + '/writeStream2.txt');

//every time we receive this chunk of data
//we write it
readStream.on('data', function (chunk) {
    console.log('new chunk received:');
    console.log(chunk);
    writeStream.write(chunk);
});