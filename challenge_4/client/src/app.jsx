import React, {Component} from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board.jsx"
import Square from "./components/Square.jsx"


class App extends React.Component {

	constructor(props) {
  		super(props);
  
 		 this.state = { 
 		 	 squares: '',
 		 	 value: null
 		    };
  	 // this.handleClick = this.handleClick.bind(this);
}

// handleClick() {
// 	<button
//         className="square"
//         onClick={() => this.setState({value: 'X'})}
//       >
//         {this.state.value}
//       </button>
// }

	//Square() {
	    // return (
	    //   <Square
	    //     value={this.state.squares[i]}
	    //     onClick={() => this.handleClick(i)}
	    //   />
	    // );
    //}

  
  render() {
  	

    return (
    	
    	<div>
  
        	<Board board={this.state.squares}/>

        </div>	
    	)
      
    
    
    }
}


export default App;