var http = require('http');

var server = http.createServer(function (req,res) {
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //the url path will print toe the browser
    res.write(req.url);
    res.end('Hey set to the browser')
});

server.listen(8080);
console.log('listening to port 8080');