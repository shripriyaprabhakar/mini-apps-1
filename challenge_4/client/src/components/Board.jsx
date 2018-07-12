import React from "react";
import ReactDOM from "react-dom";
import Square from "./Square.jsx";
// import Styles from "./style.css";


const tableStyle = {
  // border-collapse: collapse;
                 border: '5px solid blue', 
                 flexDirection: 'column',
                
                 backgroundColor: 'yellow'
        
};





var board = (props) => (
  //   class Square extends React.Component {
  // render() {
  //   return (
	<table style={tableStyle}>
    <tbody>
		<tr className="board-row0">
		        <Square x={0} y={0}/>
			    <Square x={0} y={1}/>
                <Square x={0} y={2}/>
                <Square x={0} y={3}/>
                <Square x={0} y={4}/>
                <Square x={0} y={5}/>
                <Square x={0} y={6}/>
		    </tr>
		    <tr className="board-row1">
		        <Square x={1} y={0}/>
			    <Square x={1} y={1}/>
                <Square x={1} y={2}/>
                <Square x={1} y={3}/>
                <Square x={1} y={4}/>
                <Square x={1} y={5}/>
                <Square x={1} y={6}/>
		    </tr>
		    <tr className="board-row2">
		        <Square x={2} y={0}/>
			    <Square x={2} y={1}/>
                <Square x={2} y={2}/>
                <Square x={2} y={3}/>
                <Square x={2} y={4}/>
                <Square x={2} y={5}/>
                <Square x={2} y={6}/>
		    </tr>
            <tr className="board-row3">
		        <Square x={3} y={0}/>
			    <Square x={3} y={1}/>
                <Square x={3} y={2}/>
                <Square x={3} y={3}/>
                <Square x={3} y={4}/>
                <Square x={3} y={5}/>
                <Square x={3} y={6}/>
		    </tr>
            <tr className="board-row4">
		        <Square x={4} y={0}/>
			    <Square x={4} y={1}/>
                <Square x={4} y={2}/>
                <Square x={4} y={3}/>
                <Square x={4} y={4}/>
                <Square x={4} y={5}/>
                <Square x={4} y={6}/>
		    </tr>
		      <tr className="board-row5">
		        <Square x={5} y={0}/>
			    <Square x={5} y={1}/>
                <Square x={5} y={2}/>
                <Square x={5} y={3}/>
                <Square x={5} y={4}/>
                <Square x={5} y={5}/>
                <Square x={5} y={6}/>
		    </tr>
	  </tbody>
    </table>
    
);	
    

export default board;