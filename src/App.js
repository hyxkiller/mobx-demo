import React, { Component } from 'react';
import './App.css';
import Test1 from './test/test1';
import Test2 from './test/test2';

class App extends Component {
  toBottom = () => {
    document.getElementById('haha').scrollIntoView(false)    
  }
  render() {
    return (
      <div className="App">
        <div id="haha">
          <button onClick={this.toBottom}>toBottom</button>
          <Test1></Test1>
          <Test2></Test2>
        </div>
      </div>
    );
  }
}

export default App;
