import React, {Component} from "react";
import ReactDOM from "react-dom";


class App extends React.Component {

	constructor() {
  		super();
  
 		 this.state = { 
 		 	 squares: Array(9).fill(null),
 		    };
  	// this.handleClick = this.handleClick.bind(this);
}
  
  render() {

    return (
    	<div> <h1> Hello world</h1> </div>	
    	)
      
    
    
  }
}


export default App;