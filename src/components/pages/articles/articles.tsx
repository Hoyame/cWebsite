import * as React from 'react';
import { Component } from 'react';

import './articles.scss'
import PageArticlesList from './components/page'

class Articles extends Component {
  render() {
    return (
        <div>
          <h1 className = "articles-title">Articles</h1>

          <PageArticlesList />
        </div>
    );
  }
}

export default Articles;