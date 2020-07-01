import React from 'react';
import { useState, useEffect } from 'react';

import '../../styles/opensource/page.scss'
import '../../styles/opensource/opensource.scss'

let imgTest = "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256"

interface IPageOpenSource {
   title?: string,
   img?: any,
   description?: any,
   new?: boolean,
   language?: string
}

const PageOpenSourceProps : IPageOpenSource[] = [
   { title: 'Repo 1', img: imgTest, description: "Description du repo 1", new: true },
   { title: 'Repo 2', img: imgTest, description: "Description du repo 2", new: true },
   { title: 'Repo 3', img: imgTest, description: "Description du repo 3", new: true },
]


const languagesImg = {
   "TypeScript": "https://cdn.discordapp.com/app-assets/383226320970055681/565945350515589235.png",
   "Lua": "https://cdn.discordapp.com/app-assets/383226320970055681/565944800105332777.png",
   "JavaScript": "https://cdn.discordapp.com/app-assets/383226320970055681/565944799576719366.png",
   "C++": "https://cdn.discordapp.com/app-assets/383226320970055681/565944082510249984.png",
   "C#": "https://cdn.discordapp.com/app-assets/383226320970055681/565944082329763843.png",
   "Visual Basic .NET": "https://cdn.discordapp.com/app-assets/383226320970055681/565945769421570048.png"
}

class languages {
   myMap: Map<String, String> = new Map([
      ["TypeScript", "https://cdn.discordapp.com/app-assets/383226320970055681/565945350515589235.png"], 
      ["Lua", "https://cdn.discordapp.com/app-assets/383226320970055681/565944800105332777.png"]
   ]);
   static myMap: any;
}

const PageOpenSource: React.FC<IPageOpenSource> = (props: IPageOpenSource) => {  
   const getLanguage = (arg: String): String => {
      return languages.myMap.get(arg);
   }

   return ( 
      <a>
         <div className = "page-opensource-container">
            <img src = {languages.myMap.get(props.language)} className = "page-opensource-container-img"></img>
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