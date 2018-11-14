//take data from a read stream and then pipe it into a write stream
var http = require('http');
//fs allow you to work with file system
var fs = require('fs');

var server = http.createServer(function (req,res) {
    console.log('request was made' + req.url);
    //set the States and content type
    //if you want to link to html, you need to change the Content-Tyke from text/html to application/json
    res.writeHead(200, {'Content-Type': 'application/json'});
    var myObj = {
        name: 'jieyu',
        job: 'Programmer',
        age:'26'
    };
    //we need to put either string or buffer inside the paren, so we cannot write like this res.end(myObj)
    res.end(JSON.stringify(myObj))

});

//set a port for request
server.listen(8888);
console.log('cool, listening to port 8888');