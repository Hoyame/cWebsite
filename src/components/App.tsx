import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Routes from './routes'
import Navigation from './navigation/navigation'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation /> 
          <div></div> 
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;