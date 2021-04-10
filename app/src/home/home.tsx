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
            <h2 className = "summary-text">Yo, moi c'est Hoyame 🙃</h2>
            <p className = "summary-text-p">Bienvenu sur mon portfolio, je vais essayer 
            de tout dire,<br></br> ce que je fais, ce que je suis, etc.<br></br><br></br> Bonne investigation 😊</p>
          </div>
          <div className = "me-box">
            <img src={pepeKms} className = "me-box-avatar" alt="Hoyame"></img>
            <h3 className = "me-box-name">Hoyame</h3>
            <h6 className = "me-box-name2">@hoyame</h6>
          </div>
        </article>
        
        <article>
          <div className = "articles">
           
            <div className="content">
              <div className="props"><img className="props-img" src="https://www.taniarascia.com/static/ed9878c0488cff7b7ee973c201f0bb68/92ab1/ts.png" /></div>
              <div className="props"><img className="props-img" src="https://www.taniarascia.com/static/3d82542566cff8eb4fafcda2d200a1b5/92ab1/webpack.png" /></div>
              <div className="props"><img className="props-img" src="https://www.taniarascia.com/static/987371fab3463c3496c5a6447b32553f/92ab1/redux.png" /></div>
              <div className="props"><img className="props-img" src="https://www.taniarascia.com/static/517c02bd875932e2a959488763695b28/92ab1/node.png" /></div>
              <div className="props"><img className="props-img" src="https://www.taniarascia.com/static/5e267e2ee412a23e797106ee564145a0/92ab1/js.png" /></div>
              <div className="props"><img className="props-img" src="https://www.taniarascia.com/static/d695fe69198cc4558284e9aec1a4892c/92ab1/react.png" /></div>
              <div className="props"><img className="props-img" src="https://www.taniarascia.com/static/ba06ee0b8338c75ebce83dca67c8cd37/92ab1/sass.png" /></div>
              <div className="props"><img className="props-img" src="https://www.taniarascia.com/static/bee67aec3c77125f8cd913850fa6013b/92ab1/git.png" /></div>
              <div className="props"><img className="props-img" src="https://www.taniarascia.com/static/cf23526f451784ff137f161b8fe18d5a/92ab1/vue.png" /></div>

            </div>
          

          
          </div>
          <div className = "separateur"></div>
        </article>
        <article>
          <h2 className = "summary-text">Projets 🎈</h2>
          <ProjectsList />
        <div className = "separateur"></div>
      </article>
    </div>
  );
}

export default HomePage;
