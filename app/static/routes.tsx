import React from 'react';

const HomePage = React.lazy(() => import('../src/home/home'));
//const OpensourcePage = React.lazy(() => import('../src/ui/github/github'));
const AboutPage = React.lazy(() => import('../src/about/about'));
const ContactPage = React.lazy(() => import('../src/contact/contact'));
const GitHubPage = React.lazy(() => import('../src/github/github'));
const CvPage = React.lazy(() => import('../src/cv/cv'));
const ProjetPage = React.lazy(() => import('../src/projets/projets'))

    const routes = [
    {
        path: '/',
        component: HomePage,
        exact: true
    },
    {
        path: '/github',
        component: GitHubPage,
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
        path: '/cv',
        component: CvPage
    },
    {
        path: '/projets',
        component: ProjetPage
    },
];

export default routes;