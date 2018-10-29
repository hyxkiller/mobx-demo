import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/header';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/home.html" component={Home} />
            {/* <Redirect from="/home.html/*" to="/home.html" /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
