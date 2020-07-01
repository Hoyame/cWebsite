import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import '../../../styles/navigation/navigation.scss'


const Navigation = () => {
  return (
    <nav className="nav">
      <Link to={'/'} className="nav-text">Hoyame Zouhari</Link>
      <ul className="nav-links">
        <Link to={'/about'} className="nav-button">About</Link>
        <Link to={'/github'} className="nav-button">GitHub</Link>
        <Link to={'/contact'} className="nav-button">Contact</Link>
        <Link to={'/cv/scolaire'} className="nav-button">CV</Link>
      </ul>
    </nav>
  );
}


export default Navigation;