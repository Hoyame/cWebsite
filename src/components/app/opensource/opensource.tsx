import * as React from 'react';
import { Component } from 'react';

import './opensource.scss';
import PageOpenSourceList from './components/page';
import Navigation from '../navigation/navigation';

let githubImg = "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256";
let githubName = "Hoyame Z.";
let githubLink = "https://github.com/corazon2";
let githubID = "@corazon2";

let githubStatus = "Zboubi is back";

let githubFollowers = 100;
let githubRepo = 3;

let username = 'corazon2';

const OpensourcePage = () => {
  return (
    <div>
      <Navigation />
      <h1 className = "opensource-head-title">OpenSource</h1>

      <div className = "opensource-head-container">
        <img src = {githubImg} className = "opensource-head-container-img"></img>
        <p className = "opensource-head-container-text">{githubName}</p>
        <p className = "opensource-head-container-id">{githubID}</p>
        
        <div className = "opensource-head-container-languages">
          <img src = "https://cdn.discordapp.com/app-assets/383226320970055681/565944799576719366.png" className = "opensource-head-container-languages-img"></img>
          <img src = "https://cdn.discordapp.com/app-assets/383226320970055681/565945350515589235.png" className = "opensource-head-container-languages-img"></img>
          <img src = "https://cdn.discordapp.com/app-assets/383226320970055681/565945769320775680.png" className = "opensource-head-container-languages-img"></img>
          <img src = "https://cdn.discordapp.com/app-assets/383226320970055681/565945350897008640.png" className = "opensource-head-container-languages-img"></img>
          <img src = "https://cdn.discordapp.com/app-assets/383226320970055681/565944799455346703.png" className = "opensource-head-container-languages-img"></img>
          
        </div>


        <div className = "opensource-head-container-followers">Followers: 10 </div>
        <div className = "opensource-head-container-following">Following: 5</div>
        <div className = "opensource-head-container-repositories">Repo: 2</div>
        <div className = "opensource-head-container-link">GitHub</div>

        {/* 
        <p className = "opensource-head-container-id">{githubID}</p>
        <p className = "opensource-head-container-link">{githubLink}</p>
        <div className = "opensource-head-container-new">GitHub</div>
      */}
        
      </div>
      <PageOpenSourceList />
    </div>
  );
}

export default OpensourcePage;