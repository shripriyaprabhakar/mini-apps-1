import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board.jsx";

const tdStyle = { 

    border: '3px solid red', 
    padding: '3em'
}


var Square = (props) => (

	<td style={tdStyle}> {props.x} {props.y} </td>
	
);

export default Square;