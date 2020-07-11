import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ArticlesList from './articles'
import OpenSourceList from './opensource'
import ProjectsList from './projects';
import pepeKms from '../../assets/pp.png'

import '../../styles/home/summary.scss'
import '../../styles/home/articles.scss'

const HomePage = () => {
  return (
    <div className = "pages-body">
        <article className = "presentation">
          <div className = "summary">
            <h2 className = "summary-text">Yo, c'est moi 🙃</h2>
            <p className = "summary-text-p">Bienvenu sur mon portfolio, je vais essayer 
            de tout dire,<br></br> ce que je fais, ce que je suis, etc.<br></br><br></br> Bonne investigation 😊</p>
          </div>
          <div className = "me-box">
            <img src={pepeKms} className = "me-box-avatar" alt="Hoyame"></img>
            <h3 className = "me-box-name">Hoyame</h3>
            <h6 className = "me-box-name2">@corazon2</h6>
          </div>
        </article>
        
        <article>
          <div className = "articles">
            <h2 className = "summary-text">Mon "Histoire" ⏳</h2>
            <p className = "summary-text-p">
              Bon je pense que vous savez comment je m'appelle, dans ces paragraphes 
              que j'écris en écoutant SCH je vais vous raconter ma vie, donc si vous êtes pas intéressées, pas la 
              peine de lire, descendez :) , je suis née le 10/06/2004 en Italie, c'est en Italie que j'ai passée 10 
              ans de ma vie, en 2019 je me suis intéressée au serveur gta rp, 
              du coup j'ai lancer mon serveur bluevinity, qui après 8 mois, a été vendu par moi car on avais plus de joueurs
              a force de se faire ddos jour et nuit, sans solutions, j'en avais marre, ensuite 4 mois après j'ai voulu faire un 
              framework pour le serveur fivem de mon ami Jibril, après 2 mois, j'ai abandonnée car je ne voulais pas perdre de
              temps pour un truc qui n'étais même pas sur de marcher, un mois après j'ai vu le pPhone, j'ai aimée le concept,
              c'est la que j'ai connu react et William qui m'a tout appris sur le dev web, car jusqu'à ce jour la, j'en avais 
              jamais fait, c'est depuis ce jour la que je fait du dev web, il y'a beaucoup de choses que je dois encore apprendre
              mais je suis motivée :). Voila un bon gros résumée de mon histoire :smile:
            </p>
          </div>
          <div className = "separateur"></div>
        </article>
        <article>
        <ProjectsList />
        <div className = "separateur"></div>
      </article>
    </div>
  );
}

export default HomePage;