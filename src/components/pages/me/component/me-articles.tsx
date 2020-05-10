import * as React from 'react';
import { Component, useState } from 'react';

import './me-articles.scss'

export interface ArticlesProps {
    img: any,
    title: string,
    new?: boolean
}

const articlesPropsList : ArticlesProps[] = [
    { img: "https://cdn.discordapp.com/avatars/643225867929124874/7b03c008c7de478d7acd707ab28ccfef.png?size=256", title: "Projet 1", new: true },
    { img: "https://cdn.discordapp.com/avatars/643225867929124874/7b03c008c7de478d7acd707ab28ccfef.png?size=256", title: "Projet 2" },
    { img: "https://cdn.discordapp.com/avatars/643225867929124874/7b03c008c7de478d7acd707ab28ccfef.png?size=256", title: "Projet 3" },
]

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
