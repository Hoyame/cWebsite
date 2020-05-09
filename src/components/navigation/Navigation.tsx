import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './navigation.scss'


class Navigation extends Component {
  render() {
    return (
      <nav className = "nav">
        <div className = "nav-container">

          <div>
            <span className = "nav-text">Hoyame Zouhari</span>
          </div>

          <div className = "nav-buttons">
            <div className = "nav-links">
              <ul className = "">
                <a><Link to={'/'} className="nav-button"> About </Link></a>
                <a><Link to={'/competences'} className="nav-button"> Competences </Link></a>
                <a><Link to={'/contact'} className="nav-button"> Contact </Link></a>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}


export default Navigation;