var http = require('http');

var server = http.createServer(function (req,res) {
    console.log('request was made' + req.url);
    //set the States and content type
    res.writeHead(200, {'Content-Type': 'text/plain'});
//    end the respond and send it to the browser
    res.end('Hey set to the browser')
});

//set a port for request
server.listen(3000);
console.log('cool, listening to port 3000');