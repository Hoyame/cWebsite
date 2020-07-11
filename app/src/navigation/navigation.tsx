import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import '../../styles/navigation/navigation.scss'


const Navigation = () => {
  const redirectGithub = () => {
    return (
      window.location.replace('https://github.com/hoyame')
    );
  }

  return (
    <nav className="nav">
      <Link to={'/'} className="nav-text">Hoyame Zouhari</Link>
      <ul className="nav-links">
        <Link to={'/about'} className="nav-button">About</Link>
        <Link to={''} onClick={() => redirectGithub()} className="nav-button">GitHub</Link>
        
        <Link to={'/contact'} className="nav-button">Contact</Link>
        <Link to={'/cv/scolaire'} className="nav-button">CV</Link>
      </ul>
    </nav>
  );
}


export default Navigation;