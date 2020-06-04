import React, { Component } from 'react';
import PageArticlesList from './components/page'
import Navigation from '../navigation/navigation';

import './articles.scss'

const ArticlesPage = () => {
  return (
      <div>
        <Navigation />
        <h1 className = "page-articles-title">Articles</h1>

        <PageArticlesList />
      </div>
  );

}

export default ArticlesPage;