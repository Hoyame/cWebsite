import React from 'react';

const CompetencesSPage = React.lazy(() => import('./page-skills'));
const ProfessionelSPage = React.lazy(() => import('./page-professional'));
const ScolaireSPage = React.lazy(() => import('./page-school'));

const routesCV = [
   {
      path: '/cv/competences',
      component: CompetencesSPage,
   },

   {
      path: '/cv/professionel',
      component: ProfessionelSPage,
   },

   {
      path: '/cv/scolaire',
      component: ScolaireSPage,
      exact: true
   },
];

export default routesCV;