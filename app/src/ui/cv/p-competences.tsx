import React from 'react';

import '../../../styles/cv/p-competences.scss'

interface IPageContent {
   year: string;
   content: string;
}

const PageContent: IPageContent[] = [
   { year: '2010 - 2014', content: 'Ecole Primaire Italie' },
]

const CompetencesSPage = () => {
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
            <p className="cv-title-page-title">Competences</p>
         </div>
         
         <div className="cv-content-page">
            {getPageContent()}
         </div>
      </React.Fragment>
   );
}

export default CompetencesSPage;