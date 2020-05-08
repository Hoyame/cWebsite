import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import About from './pages/about/about';
import Competences from './pages/competences/competences';
import Contact from './pages/contact/contact';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={About} />
        <Route path='/competences' component={Competences} />
        <Route path='/contact' component={Contact} />
      </Switch>
    );
  }
}

export default Routes;