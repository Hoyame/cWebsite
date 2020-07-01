import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ArticlesList from './articles'
import OpenSourceList from './opensource'
import pepeKms from '../../../assets/pp.png'

import '../../../styles/home/summary.scss'
import '../../../styles/home/articles.scss'

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

            <p className = "summary-text-p">Bon je pense que vous savez comment je m'appele, dans ces paragraphes 
            que j'ecris en ecoutant SCH je vais vous racconter ma vie, donc si vous etes pas interessées, pas la 
            peine de lire, descendez :) , je suis née le 10/06/2004 en italie, c'est en italie que j'ai passée 10 
            ans de ma vie, c'est la bas que j'ai trouvée ma passion, le pc, du coup je continuais, après quand je suis venue en france, je n'avais pas de pc, 
            en 2016 ma mere ma acheter une ps3, 4 mois après ma mere est tombée malade, du coup j'etais au foyer pendant
            un an sans tel ni ps3, la GALEREEEEEEE, ensuite après 7 mois d'attente sans la voir, elle est revenu soignée,
            la j'ai eu la ps4 mais 2 mois après elle est retombée malade, du coup j'ai été placée en famille d'acceuil,
            après j'ai vendu ma ps4 pour racheter un pc portable, c'est la que je me suis interessée au serveur gta rp, 
            du coup j'ai lancer mon serveur bluevinity, qui après 8 mois, a été vendu par moi car on avais plus de joueurs
            a force de se faire ddos jour et nuit, sans solutions, j'en avais marre, ensuite 4 mois après j'ai voulu faire un 
            framework pour le serveur fivem de mon ami Jibril, après 2 mois, j'ai abbandonnée car je ne voulais pas perdre de
            temps pour un truc qui n'etais meme pas sur de marcher, un mois après j'ai vu le pPhone, j'ai aimée le concept,
            c'est la que j'ai connu react et William qui m'a tout appris sur le dev web, car jusqu'a ce jour la, j'en avais 
            jamais fait, c'est depuis ce jour la que je fait du dev web, il y'a beaucoup de choses que je dois encore apprendre
            mais je suis motivée :). Voila un bon gros resumée de mon histoire :D
            
            </p>

          </div>
        </article>
       
        <article>
        <div className = "separateur"></div>
      </article>
    </div>
  );
}

export default HomePage;