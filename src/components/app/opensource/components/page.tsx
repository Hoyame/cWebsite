import * as React from 'react';
import { Component } from 'react';

import './page.scss'
import '../opensource.scss'
import { IPageOpenSource } from '../../../data/interface/interfaces';
import { PageOpenSourceProps } from '../../../data/me/opensource';

/////////////////////////////////////////////////////

const PageOpenSource: React.FC<IPageOpenSource> = (props: IPageOpenSource) => {  
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
           <PageOpenSource {...item} />
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