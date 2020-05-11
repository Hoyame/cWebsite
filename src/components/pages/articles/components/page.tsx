import * as React from 'react';
import { Component } from 'react';

import './page.scss'

interface IPageArticles {
   title?: string,
   img?: any,
   description?: any,
   new?: boolean
}

const PageArticlesProps : IPageArticles[] = [
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/7b03c008c7de478d7acd707ab28ccfef.png?size=256", description: "" },
   { title: 'Article 2', img: "https://cdn.discordapp.com/avatars/643225867929124874/7b03c008c7de478d7acd707ab28ccfef.png?size=256", description: "" },
   { title: 'Article 3', img: "https://cdn.discordapp.com/avatars/643225867929124874/7b03c008c7de478d7acd707ab28ccfef.png?size=256", description: "" }
]

/////////////////////////////////////////////////////


const IPageArticles: React.FC<IPageArticles> = (props: IPageArticles) => {  
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

const getPageArticles = () => {
   return PageArticlesProps.map((item, k) => {
       return (
           <IPageArticles {...item} />
       )
   })
}

class PageArticlesList extends Component {
   render() {
       return (
            <div className="articles-box">
               {getPageArticles()}
            </div>
       );
   }
}

export default PageArticlesList;