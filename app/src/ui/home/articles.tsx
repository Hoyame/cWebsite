import * as React from 'react';
import { Component, useState } from 'react';

import {articlesPropsList} from '../../interface/data'
import '../../../styles/home/me-articles.scss'

interface ArticlesProps {
    img: any,
    title: string,
    new?: boolean
}

const IArticles: React.FC<ArticlesProps> = (props: ArticlesProps) => {  
    return ( 
        <a>
            <div className = "articles-container">
                <img src = {props.img} className = "articles-container-img"></img>
                <p className = "articles-container-text">{props.title}</p>
                {props.new ? <div className = "articles-container-new">New</div> : false}
            </div>
        </a>
    );
};

const getArticles = () => {
    return articlesPropsList.map((item, k) => {
        return (
            <IArticles key={k} {...item} />
        )
    })
}

const ArticlesList = () => {
    return (
        <div className="articles-box">
            {getArticles()}
        </div>
    );
}

export default ArticlesList;
