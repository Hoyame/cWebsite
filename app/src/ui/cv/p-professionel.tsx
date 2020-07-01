import React from 'react';

import '../../../styles/cv/p-professionel.scss'

interface IPageContent {
   year: string;
   content: string;
}

const PageContent: IPageContent[] = [
   { year: '2016 - 2017', content: 'Stage Vente/Reparation PC' },
   { year: '2020 - 2020', content: 'Stage Vente/Reparation Mobile' },
]

const ProfessionelSPage = () => {
   const PageContentProps: React.FC<IPageContent> = (props: IPageContent) => {
      return (
         <div className="cv-content-props">
         <p className="cv-content-props-years">{props.year}</p>
         <p className="cv-content-props-separator">:</p>            
            <p className="cv-content-props-content">{props.content}</p>
         </div>
      );
   }

   const getPageContent = () => {
      return PageContent.map((value, key) => {
         return <PageContentProps key={key} {...value} />
      })
   }

   return (
      <React.Fragment>
         <div className="cv-title-page-component">
            <p className="cv-title-page-title">Professionel</p>
         </div>
         
         <div className="cv-content-page">
            {getPageContent()}
         </div>
      </React.Fragment>
   );
}

export default ProfessionelSPage;