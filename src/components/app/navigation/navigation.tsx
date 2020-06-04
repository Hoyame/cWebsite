import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './navigation.scss'


class Navigation extends Component {
  render() {
    return (
      <nav className="nav">
        <Link to={'/'} className="nav-text">Hoyame Zouhari</Link>
        <ul className="nav-links">
          <Link to={'/about'} className="nav-button">About</Link>
          <Link to={'/opensource'} className="nav-button">Opensource</Link>
          <Link to={'/contact'} className="nav-button">Contact</Link>
        </ul>
      </nav>
    );
  }
}


export default Navigation;