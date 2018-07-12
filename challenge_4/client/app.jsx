import React, {Component} from "react";
import ReactDOM from "react-dom";


class App extends React.Component {

	constructor(props) {
  		super(props);
  
 		 this.state = { 
 		 	counter: 0
 		    };
  	this.handleClick = this.handleClick.bind(this);
}
  
  render() {

    return {
      <div><h1>Hello, {this.props.name}</h1>;	
    }
    
  }
}