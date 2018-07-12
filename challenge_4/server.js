
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('client'));


var port = 3000;
var ip = '127.0.0.1';

app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


 
app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(port);