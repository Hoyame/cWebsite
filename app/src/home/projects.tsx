import React from 'react';

import '../../styles/home/projects.scss'

interface IProjectsProps {
   link?: string;
   emoji: string;
   title: string,
   description: string;
}

export const projectsPropsList : IProjectsProps[] = [
    { link : 'https://github.com/hoyame/Portfolio', emoji: '💾', title: "Porfolio", description: "Mon portfolio" },
    { link : 'https://github.com/hoyame/Launcher-FiveM', emoji: '🖥', title: "Launcher-FiveM", description: "Une application pour serveur fivem" },
    { link : 'https://github.com/hoyame/React-TS-Boilerplate', emoji: '⚛', title: "React-TS-Boilerplate", description: "Une template pour app react en .ts" },
    { link : 'https://github.com/hoyame/FiveM-CCore-Framework', emoji: '🚧', title: "FiveM-CCore-Framework", description: "Un framework pour serveur fivem" },
    { link : 'https://github.com/hoyame/FiveM-CCore-GM', emoji: '🏙', title: "FiveM-CCore-GM", description: "Un gamemode pour serveur fivem" },
    { link : 'https://github.com/hoyame/FiveM-PScript', emoji: '🚟', title: "FiveM-PScript", description: "Des resources pour serveur fivem" },
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
