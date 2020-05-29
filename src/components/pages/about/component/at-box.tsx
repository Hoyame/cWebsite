import * as React from 'react';
import { Component } from 'react';
import './at-box.scss'

let imgTest = "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256"

interface IBoxAt {
   img?: any,
   description?: any,
}

const PageOpenSourceProps : IBoxAt[] = [
   { img: imgTest, description: "1" },
   { img: imgTest, description: "2" },
   { img: imgTest, description: "3" },
]


const BoxAt: React.FC<IBoxAt> = (props: IBoxAt) => {  
   return ( 
      <div>
         <a>
            <div className = "page-boxat-container">
               <img src = {props.img} className = "page-boxat-container-img"></img>
               {props.description ? <p className = "page-boxat-container-description">{props.description}</p> : false}
            </div>
         </a>
      </div>
   );
};

const getPageOpenSource = () => {
   return PageOpenSourceProps.map((item, k) => {
       return (
           <BoxAt {...item} />
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