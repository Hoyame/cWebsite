import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import '../../../styles/cv/navbar.scss'


const NavBarComponent = () => {
   return (
      <div className="cv-nav-c">
         <nav className="cv-nav">
            <ul className="cv-nav-links">
               <Link to={'/cv/scolaire'} className="cv-nav-button">Scolaire</Link>
               <Link to={'/cv/professionel'} className="cv-nav-button">Professionel</Link>
               <Link to={'/cv/competences'} className="cv-nav-button">Competences</Link>
            </ul>
         </nav>
      </div>
   );
}

export default NavBarComponent;