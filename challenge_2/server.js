var express = require('express')
var bodyParser = require('body-parser');
var app = express()
app.use(express.static('client'));

var port = 3000;
var ip = '127.0.0.1';

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/', function (req, res) {
	console.log('req.body:', typeof req.body);

  res.send(flattenData((req.body)));
})

 app.listen(port);
 console.log('Listening on http://' + ip + ':' + port);

var flattenData =  function(obj) {
   let data = "";
  let array = [];

  for (let key in obj) {
  	if (key !== "children") {
   	  array.push(key);
  	}
  }
  data += array.join(',');
  data += "\n";

  let recurse = function(object) {
  	let arr = [];
  	for (let key in object) {
  	  if (key !== "children") {
  	    arr.push(object[key]);
  	  }
  	}

  	data += arr.join(',');
  	data += "\n";

  	for (let child of object.children) {
  	  recurse(child);
  	}
  }

  recurse(obj);

  return data;

   }



/*

var flattenData =  function(obj) {
  var results = [];
  var temp_arr = [];
  var newObj = JSON.parse(JSON.stringify(obj));
  delete newObj["children"];
  //console.log(newObj);
  temp_arr.push(newObj);
  temp_arr.forEach(function(element){
    var stringArr = [];
    for (var key in element) {
      stringArr.push(element[key]);
    }
     results.push(stringArr);
  });
 //console.log(results);
 var newArr = [];
 results.forEach(function(element){
   //var temp = [];
     newArr.push(element.join(','));
      });
 //console.log(newArr);
         var string = '';
      newArr.forEach(function(ele){
           string = string + ele;
          
      })
      
      return string;

   
  if ((Array.isArray(obj["children"])) && (obj["children"].length > 0)) {
    obj["children"].forEach(function(item){
      var new_arr = flattenData(item);
      temp_arr.concat(new_arr);
      //console.log(temp_arr);
    });
  }
  // else {
  //   //console.log(temp_arr);
  //   return temp_arr;
    
  // }
 
}
var obj = {
    "firstName": "Joshie",
    "lastName": "Wyattson",
    "county": "San Mateo",
    "city": "San Mateo",
    "role": "Broker",
    "sales": 1000000,
    "children": [
    {
      "firstName": "Beth Jr.",
      "lastName": "Johnson",
      "county": "San Mateo",
      "city": "Pacifica",
      "role": "Manager",
      "sales": 2900000,
      "children": [
        {
          "firstName": "Smitty",
          "lastName": "Won",
          "county": "San Mateo",
          "city": "Redwood City",
          "role": "Sales Person",
          "sales": 4800000,
          "children": []
        },
        {
          "firstName": "Allen",
          "lastName": "Price",
          "county": "San Mateo",
          "city": "Burlingame",
          "role": "Sales Person",
          "sales": 2500000,
          "children": []
        }
      ]
    },
    {
      "firstName": "Beth",
      "lastName": "Johnson",
      "county": "San Francisco",
      "city": "San Francisco",
      "role": "Broker/Sales Person",
      "sales": 7500000,
      "children": []
    }
  ]
};

flattenData(obj);


*/