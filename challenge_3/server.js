const Customer = require('../db/Customer');
const path = require('path');

var express = require ('express') 
var bodyParser = require ('body-parser');
var app = express()
app.use(express.static('public'));

var port = 3000;
var ip = '127.0.0.1';

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/', function (req, res) {
  console.log('req.body:', typeof req.body);

  res.send('hello');
})


app.listen(port);
console.log('Listening on http://' + ip + ':' + port);




