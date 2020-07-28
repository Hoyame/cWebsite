import React from 'react';

import '../../styles/projets/projets.scss';
import '../../styles/home/projects.scss';
import ProjectsList, { ShowcaseList } from '../home/projects';

interface IProjectsProps {
   link?: string;
   emoji: string;
   title: string,
   description: string;
}

const ProjetPage: React.FC<any> = () => {  
   return (
      <React.Fragment>
         <p className="projets-title">Projets 🎈</p>
         <div className="projects-opensource-box">
            <h2 className = "summary-text-white">Opensource</h2>
            <ProjectsList />
         </div>

         <div className="projects-opensource-box">
            <h2 className = "summary-text-white">Showcase</h2>
            <ShowcaseList />

         </div>
      </React.Fragment>
   );
}


//const getProjects = () => {
//   return projectsPropsList.map((item, k) => {
//      return (
//         <IProjects key={k} {...item} />
//      )
//   })
//}



export default ProjetPage;