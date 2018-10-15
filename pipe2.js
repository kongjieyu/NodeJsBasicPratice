//take data from a read stream and then pipe it into a write stream
var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/readStream2.txt', 'utf-8');

var writeStream = fs.createWriteStream(__dirname + '/writeStream3.txt');

readStream.pipe(writeStream);

//how to we use server to send data to user? in pipe2.js
var http = require('http');

var server = http.createServer(function (req,res) {
    console.log('request was made' + req.url);
    //set the States and content type
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var readStream = fs.createReadStream(__dirname + '/readStream2.txt', 'utf-8');
    
    readStream.pipe(res);
//    end the respond and send it to the browser
    //res.end('Hey set to the browser')
});

//set a port for request
server.listen(3000);
console.log('cool, listening to port 3000');