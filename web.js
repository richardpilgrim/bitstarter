var express = require('express');

var fs = require('fs');

var buffer = new Buffer(fs.readFileSync("index.html"),"utf-8");
var text = buffer.toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
