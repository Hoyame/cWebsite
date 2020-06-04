import React from 'react';

const HomePage = React.lazy(() => import('./components/app/home/home'));
const OpensourcePage = React.lazy(() => import('./components/app/opensource/opensource'));
const AboutPage = React.lazy(() => import('./components/app/about/about'));
const ContactPage = React.lazy(() => import('./components/app/contact/contact'));
const ArticlesPage = React.lazy(() => import('./components/app/articles/articles'));


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

    {
        path: '/about',
        component: AboutPage,
    },

    {
        path: '/contact',
        component: ContactPage,
    },

    {
        path: '/articles',
        component: ArticlesPage,
    },
];

export default routes;