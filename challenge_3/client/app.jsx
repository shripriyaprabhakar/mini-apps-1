

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.component {

  constructor (props) {
    super (props);
    this.state = {
      counter = 0;
    }
  }
  this.addCustomerInfo = this.addCustomerInfo.bind(this);
  this.addAddressInfo = this.addAddressInfo.bind(this);
  this.addAddressInfo = this.addAddressInfo.bind(this);
  }

  render ()
  if (this.state.counter === 0) {
    return {
        <div>
          <form id="f1">
            <input class="name" type="text" name = "Firstinputfield" placeholder="Your name">
            <br>
            <input class="email" type="text" name = "Firstinputfield" placeholder="Your e-mail">
            <br>
            <input class="password" type="text" name = "Firstinputfield" placeholder="password">
            <input type="submit" value="next">
          </form> 
        </div> 
    } else if (this.state.counter === 1) {
          <form id="f1">
            <input class="name" type="text" name = "Firstinputfield" placeholder="Your name">
            <br>
            <input class="email" type="text" name = "Firstinputfield" placeholder="Your e-mail">
            <br>
            <input class="password" type="text" name = "Firstinputfield" placeholder="password">
            <input type="submit" value="next">
          </form> 
    } else if (this.state.counter === 1) {
          <form id="f1">
            <input class="name" type="text" name = "Firstinputfield" placeholder="Your name">
            <br>
            <input class="email" type="text" name = "Firstinputfield" placeholder="Your e-mail">
            <br>
            <input class="password" type="text" name = "Firstinputfield" placeholder="password">
            <input type="submit" value="next">
          </form> 
   
    }


}


ReactDOM.render(<App />, document.getElementById('app'));
































