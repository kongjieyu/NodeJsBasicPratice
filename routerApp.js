//take data from a read stream and then pipe it into a write stream
var http = require('http');
//fs allow you to work with file system
var fs = require('fs');

var server = http.createServer(function (req,res) {
    console.log('request was made' + req.url);
    //set the States and content type
    //if the url 
    if (req.url === '/home' || req.url ==='/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        var readStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
    //pipe it to respond    
        readStream.pipe(res);
    } else if (req.url === '/contact') {
        var readStream = fs.createReadStream(__dirname + '/contact.html', 'utf-8');
    //pipe it to respond    
        readStream.pipe(res);
    } else if (req.url === '/api/obj'){
        var obj = [{name: 'may', age: '26'}, {name: 'Eee', age: '30'}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(obj))
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('end')
    }


});

//set a port for request
server.listen(3000);
console.log('ohoh, listening to port 3000');