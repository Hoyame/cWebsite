import React from 'react';

import '../../styles/home/projects.scss'

interface IProjectsProps {
   link?: string;
   emoji: string;
   title: string,
   description: string;
}

export const projectsPropsList : IProjectsProps[] = [
    { emoji: '💾', title: "Porfolio", description: "Mon portfolio" },
    { emoji: '🖥', title: "Launcher-FiveM", description: "Une application pour serveur fivem" },
    { emoji: '⚛', title: "React-TS-Boilerplate", description: "Une template pour app react en .ts" },
    { emoji: '🚧', title: "FiveM-CCore-Framework", description: "Un framework pour serveur fivem" },
    { emoji: '🏙', title: "FiveM-CCore-GM", description: "Un gamemode pour serveur fivem" },
    { emoji: '🚟', title: "FiveM-PScript", description: "Des resources pour serveur fivem" },
]

const IProjects: React.FC<IProjectsProps> = (props: IProjectsProps) => {  
   return ( 
      <React.Fragment>
         <div className="projects">
            <a className="projects-component" href={props.link} >
               <div className="projects-emoji">{props.emoji}</div>
               <div className="projects-title">{props.title}</div>
               <div className="projects-description">{props.description}</div>
            </a>
         </div>
      </React.Fragment>
   );
};

const getProjects = () => {
   return projectsPropsList.map((item, k) => {
      return (
         <IProjects key={k} {...item} />
      )
   })
}

const ProjectsList = () => {
   return (
      <div className="projects-box">
         <h2 className = "summary-text">Projets 🎈</h2>

         {getProjects()}
      </div>
   );
}

export default ProjectsList;
