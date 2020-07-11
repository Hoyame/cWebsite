import React from 'react';

interface IPageContent {
   year: string;
   content: string;
}

const PageContent: IPageContent[] = [
   { year: '2010 - 2014', content: 'Ecole Primaire Italie' },
   { year: '2014 - 2015', content: 'CM2' },
   { year: '2015 - 2017', content: '6éme - 5éme' },
   { year: '2017 - 2020', content: '5éme - 4éme - 3éme' },
   { year: '2020 - 2021', content: '3éme Prepa Pro' },
]

const SchoolPage = () => {
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
            <p className="cv-title-page-title">Scolaire</p>
         </div>

         <div className="cv-content-page">
            {getPageContent()}
         </div>
      </React.Fragment>
   );
}

export default SchoolPage;