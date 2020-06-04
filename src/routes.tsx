import React from 'react';

const HomePage = React.lazy(() => import('./components/app/home/home'));
const OpensourcePage = React.lazy(() => import('./components/app/opensource/opensource'));

const routes = [
    {
        path: '/',
        component: HomePage,
        exact: true
    },

    {
        path: '/opensource',
        component: OpensourcePage,
    },

];

export default routes;