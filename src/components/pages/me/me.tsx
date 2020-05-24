import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './style/summary.scss'
import './style/articles.scss'

import ArticlesList from './component/me-articles'
import OpenSourceList from './component/me-opensource'


class Me extends Component {
  render() {
    return (
      <div className = "pages-body">
          <article className = "presentation">
            <div className = "summary">
              <h2 className = "summary-text">Yo, c'est moi 🙃</h2>
              <p className = "summary-text-p">Bienvenu sur mon portfolio, je vais essayer 
              de tout dire, ce que je fais, ce que je suis, etc.<br></br><br></br> Bonne investigation 😊</p>
            </div>
            <div className = "me-box">
              <img src="https://cdn.discordapp.com/avatars/643225867929124874/f73c5d1ee1a4da7ecb7f0ab406fb096e.png?size=256" className = "me-box-avatar" alt="Hoyame"></img>
              <h3 className = "me-box-name">Hoyame</h3>
              <h6 className = "me-box-name2">@corazon2</h6>
            </div>
          </article>

          <article>
            <div className = "articles">
              <h2 className = "articles-title">Articles
                <Link to={'/articles'} className = "articles-button">View All</Link>
              </h2>
              <ArticlesList />
            </div>
          </article>

          <article>
            <div className = "articles">
              <h2 className = "articles-title">Open Source Projects
                <Link to={'/opensource'} className = "articles-button">View All</Link>
              </h2>
              <OpenSourceList />
            </div>
          </article>

          <article>
          <div className = "articles">
            <h2 className = "articles-title">Open Source Projects
              <Link to={'/articles'} className = "articles-button">View All</Link>
            </h2>
          </div>
        </article>
      </div>
    );
  }
}

export default Me;