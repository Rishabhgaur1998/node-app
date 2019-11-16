// load the http module
var http = require('http');
var test=require('./test.js');
// configure our HTTP server
var server = http.createServer(function (request, response)
{
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end(test.Test(1,5,8)+"\n");
  console.log(1,5,8);
});

// listen on localhost:8000
server.listen(1111);
console.log("Server listening on port 1111 :  http://127.0.0.1:1111/");
