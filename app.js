var http = require('http');

var server = http.createServer(function (req,res) {
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end('Hey ninjas')
});

server.listen(3000);
console.log('yo dawgs, listening to port 3000');

// var http = require('http');
//
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('Hello World!');
//     res.end();
// }).listen(8080);