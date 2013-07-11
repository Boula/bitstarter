


var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');
var buffer = new Buffer (256);
var readfile = fs.readFileSync("index.html");
var index = buffer.toString('utf-8',readfile);
app.get('/', function(request, response) {  response.send(index);});
var port = process.env.PORT || 5000;app.listen(port, function() {  console.log("Listening on " + port);});
