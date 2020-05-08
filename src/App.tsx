/*

import * as React from "react";


class App extends React.Component {
    render() {
        return(
            <div>My App Component</div>
        );
    }
}

export default App;

*/

import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/about/about';
import Competences from './components/competences/competences';
import Contact from './components/navigation/navigation';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> About </Link></li>
            <li><Link to={'/competences'} className="nav-link">Competences</Link></li>
            <li><Link to={'/about'} className="nav-link">Contact</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={About} />
              <Route path='/competences' component={Competences} />
              <Route path='/about' component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;