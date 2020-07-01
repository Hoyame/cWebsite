import React from 'react';
import { Component, useState } from 'react';

import '../../styles/home/me-articles.scss'

interface IArticlesProps {
    img: any,
    title: string,
    new?: boolean
}

export const articlesPropsList : IArticlesProps[] = [
    { img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", title: "Projet 1", new: true },
    { img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", title: "Projet 2" },
    { img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", title: "Projet 3" },
]

const IArticles: React.FC<IArticlesProps> = (props: IArticlesProps) => {  
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
