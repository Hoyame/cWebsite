import * as React from 'react';
import { Component } from 'react';

import './page.scss'
import '../opensource.scss'

let imgTest = "https://cdn.discordapp.com/avatars/643225867929124874/7b03c008c7de478d7acd707ab28ccfef.png?size=256"

interface IPageOpenSource {
   title?: string,
   img?: any,
   description?: any,
   new?: boolean
}

const PageOpenSourceProps : IPageOpenSource[] = [
   { title: 'Repo 1', img: imgTest, description: "Description du repo 1", new: true },
   { title: 'Repo 2', img: imgTest, description: "Description du repo 2", new: true },
   { title: 'Repo 3', img: imgTest, description: "Description du repo 3", new: true },
]

/////////////////////////////////////////////////////


const IPageOpenSource: React.FC<IPageOpenSource> = (props: IPageOpenSource) => {  
   return ( 
      <div>
         <a>
            <div className = "page-opensource-container">
               <img src = {props.img} className = "page-opensource-container-img"></img>
               <p className = "page-opensource-container-text">{props.title}</p>
               {props.description ? <p className = "page-opensource-container-description">{props.description}</p> : false}
               {props.new ? <div className = "page-opensource-container-new">New</div> : false}
            </div>
         </a>
      </div>
   );
};

const getPageOpenSource = () => {
   return PageOpenSourceProps.map((item, k) => {
       return (
           <IPageOpenSource {...item} />
       )
   })
}

class PageOpenSourceList extends Component {
   render() {
       return (
            <div className="opensource-box">
               {getPageOpenSource()}
            </div>
       );
   }
}

export default PageOpenSourceList;