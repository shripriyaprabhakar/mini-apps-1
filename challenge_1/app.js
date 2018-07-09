// the first move always starts with player X
// the app detects a win or tie and displays an appropriate message
// a button resets the game for a new round of gameplay

// var data = ["A", "B", "C", "D", "E", "F", "G", "H", "I" ]; // corrected Array syntax

// var table = document.createElement("table");
// var i = 0;
// for (var r = 0; r < 3; r++) {
//   var row = table.insertRow(-1);
//   for (var c = 0; c < 3; c++) {
//     var cell = row.insertCell(-1);
//     cell.appendChild(document.createTextNode(data[i++]));
//   }
// }

// document.body.appendChild(table);

// var elements = document.getElementsByClassName('clickable');
// var arr = [];
// var xTurn = true;
// for (var i = 0; i < elements.length; i++) {
//     var element = elements[i];
//     element.addEventListener('click', function() {
//     	arr.push(element);
//     	xTurn = false;
//         var href = this.dataset.href;
//         if (href) {
//             window.location.assign(href);
//         }
//     }
// }

alert('New game');

let table = document.getElementById('clickable');
let xTurn = 'true';

table.addEventListener('click', function(event) {
  if (xTurn === 'true') {
  	event.target.textContent = 'X';
  	xTurn = 'false';

  } else if (xTurn === 'false') {
  	event.target.textContent = 'O';
  	xTurn = 'true';
  }
  
});



