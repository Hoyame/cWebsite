import React from 'react';
import { useState, useEffect } from 'react';
import { IPageOpenSource } from '../../interface/interfaces';
import { PageOpenSourceProps } from '../../interface/data';

import '../../../styles/opensource/page.scss'
import '../../../styles/opensource/opensource.scss'

const PageOpenSource: React.FC<IPageOpenSource> = (props: IPageOpenSource) => {  
   return ( 
      <a>
         <div className = "page-opensource-container">
            <img src = {props.img} className = "page-opensource-container-img"></img>
            <div className="page-opensource-container-content">
               <p className = "page-opensource-container-text">{props.title}</p>
               {props.description ? <p className = "page-opensource-container-description">{props.description}</p> : false}
               {props.new ? <div className = "page-opensource-container-new">New</div> : false}
            </div>
         </div>
      </a>
   );
};

const PageOpenSourceList: React.FC = () => {
   const [ repos, setRepos ] = useState<any[]>([]);
   
   useEffect( () => {
      fetch(`https://api.github.com/users/hoyame/repos`)
        .then(data => data.json().then( json => setRepos(json.map((j:any) => ({title: j.name, description: j.description, img: 'https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256'})))))    
    }, [])

   const getPageOpenSource = () => {
      return repos.map((item, k) => <PageOpenSource key={k} {...item} />);
   }

   return (
      <div className="opensource-box">
         {getPageOpenSource()}
      </div>
   );
}

export default PageOpenSourceList;