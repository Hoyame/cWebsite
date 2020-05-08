import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './navigation.scss'


class Navigation extends Component {
  render() {
    return (
      <nav className="">
        <ul className="">
          <li><Link to={'/'} className=""> About </Link></li>
          <li><Link to={'/competences'} className="">Competences</Link></li>
          <li><Link to={'/contact'} className="">Contact</Link></li>
        </ul>
      </nav>
    );
  }
}


export default Navigation;