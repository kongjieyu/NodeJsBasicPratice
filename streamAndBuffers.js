var http = require('http');
var fs = require('fs');
// Create a stream from some character  device.
//without the utf-8, it's just a stream, if setting the utf-8, we're going to receive it as txt
var readStream = fs.createReadStream(__dirname + '/readStream.txt', 'utf-8');

readStream.on('data', function (chunk) {
    console.log('new chunk received:');
    console.log(chunk);
});

