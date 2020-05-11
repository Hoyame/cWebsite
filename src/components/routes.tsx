import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Me from './pages/me/me'
import About from './pages/about/about';
import Articles from './pages/articles/articles';
import Contact from './pages/contact/contact';
import OpenSource from './pages/opensource/opensource';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Me} />
        <Route path='/about' component={About} />
        <Route path='/articles' component={Articles} />
        <Route path='/contact' component={Contact} />
        <Route path='/opensource' component={OpenSource} />
      </Switch>
    );
  }
}
//me
export default Routes;