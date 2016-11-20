/*var http = require("http");
http.createServer(function(request, response) {
  console.log("接收到網頁請求！");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(3000);
console.log("Server已開啟port: 3000.");*/

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
