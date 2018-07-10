// the first move always starts with player X
// the app detects a win or tie and displays an appropriate message
// a button resets the game for a new round of gameplay


alert('New game');

let table = document.getElementById('clickable');
let xTurn = 'true';

var board = [
 		[0, 0, 0],
 		[0, 0, 0],
 		[0, 0, 0]
 	];

var state = {
	xTurn: true,
	compTurn: false,
	clickCount:0
};
 //    table.addEventListener('click', function(event) {
	// 	for (var key in obj) {
	// 		if (obj[key] === undefined) {
	// 			alert ('you can click here');
	// 			event.target.textContent = 'X';
	// 			console.log(event.target.textContent);
	// 			state.xTurn = false;
	// 		} else if (obj[key] !== undefined) {
	// 			alert ('this move is not valid')
	// 		} 
	// 	}

	// });

// var playGame = function () {
  table.addEventListener('click', function(event) {
  if (xTurn === 'true') {
  	event.target.textContent = 'X';
  	gameStart();
  	xTurn = 'false';
  
  	//console.log(document.getElementsByClassName(event.target));
  	

  } else if (xTurn === 'false') {
  	event.target.textContent = 'O';
  	gameStart();
  	//console.log(event.target);
  	xTurn = 'true';
  }
  
  state.clickCount++;
  console.log(state.clickCount);

  if (state.clickCount === 9) {
	results();
}
  
  });

// }

 
// playGame();
//check for rows

var r1c1text;
var r1c2text;
var r1c3text;
var r2c1text;
var r2c2text;
var r2c3text;
var r3c1text;
var r3c2text;
var r3c3text;





var gameStart = function (){

	var row1 = document.getElementsByClassName('row1');
	//console.log(row1);
	var row2 = document.getElementsByClassName('row2');
	var row3 = document.getElementsByClassName('row3');
	var col1 = document.getElementsByClassName('col1');
	var col2 = document.getElementsByClassName('col2');
	var col3 = document.getElementsByClassName('col2');

	r1c1text = row1[0].innerText;
	console.log(r1c1text);
	r1c2text = row1[1].innerText;
	console.log(r1c2text);
	r1c3text = row1[2].innerText;
	console.log(r1c3text);
	r2c1text = row2[0].innerText;
	r2c2text = row2[1].innerText;
	r2c3text = row2[2].innerText;
	r3c1text = row3[0].innerText;
	r3c2text = row3[1].innerText;
	r3c3text = row3[2].innerText;

   }






var checkWhoWins = function (rowColInd1, rowColInd2, rowColInd3) {
	if (rowColInd1 === rowColInd2 && rowColInd2 === rowColInd3) {
		alert (rowColInd2 + 'wins')
	}
}

var results = function () {
	checkWhoWins(r1c1text, r1c2text, r1c3text);
	checkWhoWins(r2c1text, r2c2text, r2c3text);
	checkWhoWins(r3c1text, r3c2text, r3c3text);
	checkWhoWins(r1c1text, r2c1text, r3c1text);
	checkWhoWins(r1c2text, r2c2text, r3c2text);
	checkWhoWins(r1c3text, r2c3text, r3c3text);
	checkWhoWins(r1c1text, r2c2text, r3c3text);
	checkWhoWins(r1c3text, r2c2text, r3c1text);
};

  
	// var row1 = document.getElementsByClassName('row1');
	//   for (var i = 0; i < row1.length; i++) {
	//    row1text = row1[i].innerText;
	//    console.log(row1);
	//   // board[0].push(row1text);
	//   //console.log(row1text);
	// };

	// var row2 = document.getElementsByClassName('row2');
	//   for (var i = 0; i < row2.length; i++) {
	//    row2text = row2[i].innerText;
	//    //board[1].push(row2text);
	//   //console.log(row2text);
	// };

	// var row2 = document.getElementsByClassName('row2');
	//   for (var i = 0; i < row3.length; i++) {
	//    row3text = row3[i].innerText;
	//   // board[2].push(row2text);
	//   //console.log(row3text);
	// };

	// var col1 = document.getElementsByClassName('col1');
	//   for (var i = 0; i < col1.length; i++) {
	//    col1text = col1[i].innerText;
	//   console.log(col1text);
	// };

	// var col2 = document.getElementsByClassName('col2');
	//   for (var i = 0; i < col2.length; i++) {
	//    col2text = col2[i].innerText;
	//   console.log(col2text);
	// };

	// var col3 = document.getElementsByClassName('col3');
	//   for (var i = 0; i < col3.length; i++) {
	//    col3text = col3[i].innerText;
	//   console.log(col3text);
	// };

	// var diag1 = document.getElementsByClassName('d1');
	//   for (var i = 0; i < diag1.length; i++) {
	//    d1text = diag1[i].innerText;
	//   console.log(d1text);
	// };

	// var diag3 = document.getElementsByClassName('d3');
	//   for (var i = 0; i < diag3.length; i++) {
	//    d1text = diag3[i].innerText;
	//   console.log(d3text);
	// };


//console.table(board);





// if (row1 === row2 === row3)



