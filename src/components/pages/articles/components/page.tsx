import * as React from 'react';
import { Component } from 'react';

import './page.scss'
import '../articles.scss'

interface IPageArticles {
   title?: string,
   img?: any,
   description?: any,
   new?: boolean
}

const PageArticlesProps : IPageArticles[] = [
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
   { title: 'Article 1', img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", description: "Azertruyehugbureybguyerbguerbgurebguyebgb", new: true },
]

/////////////////////////////////////////////////////


const IPageArticles: React.FC<IPageArticles> = (props: IPageArticles) => {  
   return ( 
      <div>
         <a>
            <div className = "page-articles-container">
               <img src = {props.img} className = "page-articles-container-img"></img>
               <p className = "page-articles-container-text">{props.title}</p>
               {props.description ? <p className = "page-articles-container-description">{props.description}</p> : false}
               {props.new ? <div className = "page-articles-container-new">New</div> : false}
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