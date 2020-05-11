import * as React from 'react';
import { Component, useState } from 'react';

import articlesPropsList from '../../../data/articles'
import './me-articles.scss'

export interface ArticlesProps {
    img: any,
    title: string,
    new?: boolean
}

const IArticles: React.FC<ArticlesProps> = (props: ArticlesProps) => {  
    return ( 
        <div>
            <a>
                <div className = "articles-container">
                    <img src = {props.img} className = "articles-container-img"></img>
                    <p className = "articles-container-text">{props.title}</p>
                    {props.new ? <div className = "articles-container-new">New</div> : false}
                </div>
            </a>
        </div>
    );
};

const getArticles = () => {
    return articlesPropsList.map((item, k) => {
        return (
            <IArticles {...item} />
        )
    })
}

class ArticlesList extends Component {
    render() {
        return (
            <div className="articles-box">
                {getArticles()}
            </div>
        );
    }
}

export default ArticlesList;
