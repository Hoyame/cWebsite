import React from 'react';

const HomePage = React.lazy(() => import('../../app/src/ui/home/home'));
//const OpensourcePage = React.lazy(() => import('../src/ui/github/github'));
const AboutPage = React.lazy(() => import('../../app/src/ui/about/about'));
const ContactPage = React.lazy(() => import('../../app/src/ui/contact/contact'));
const GitHubPage = React.lazy(() => import('../../app/src/ui/github/github'));
const CvPage = React.lazy(() => import('../../app/src/ui/cv/cv'));


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
    }
];

export default routes;