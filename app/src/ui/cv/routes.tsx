import React from 'react';

const CompetencesSPage = React.lazy(() => import('./p-competences'));
const ProfessionelSPage = React.lazy(() => import('./p-professionel'));
const ScolaireSPage = React.lazy(() => import('./p-scolaire'));

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