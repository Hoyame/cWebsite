import React from 'react';
import { useEffect, useState } from 'react';
import PageOpenSourceList from './page';

import '../../../styles/opensource/opensource.scss';

let username = 'corazon2';

const GitHubPage = () => {
  const [gitHubData, setGitHubData] = useState<any>(null);

  useEffect( () => {
    fetch(`http://api.github.com/users/${username}`)
      .then(data => data.json().then( json => setGitHubData(json)))    
  }, [])   

  if (gitHubData === null) {
    return (
      <div>En attente de github...</div>
    );
  }  

  return (
    <React.Fragment>
      <h1 className = "opensource-head-title">OpenSource</h1>

      <div className = "opensource-head-container">
        <img src = {gitHubData?.avatar_url} className = "opensource-head-container-img"></img>
        <p className = "opensource-head-container-text">{gitHubData?.name}</p>
        <p className = "opensource-head-container-id">{'@' + gitHubData?.login}</p>
        
        <div className = "opensource-head-container-languages">
          <img src = "https://cdn.discordapp.com/app-assets/383226320970055681/565944799576719366.png" className = "opensource-head-container-languages-img"></img>
          <img src = "https://cdn.discordapp.com/app-assets/383226320970055681/565945350515589235.png" className = "opensource-head-container-languages-img"></img>
          <img src = "https://cdn.discordapp.com/app-assets/383226320970055681/565945769320775680.png" className = "opensource-head-container-languages-img"></img>
          <img src = "https://cdn.discordapp.com/app-assets/383226320970055681/565945350897008640.png" className = "opensource-head-container-languages-img"></img>
          <img src = "https://cdn.discordapp.com/app-assets/383226320970055681/565944799455346703.png" className = "opensource-head-container-languages-img"></img>
        </div>

        <div className = "opensource-head-container-followers">Followers: {gitHubData?.followers} </div>
        <div className = "opensource-head-container-following">Following: {gitHubData?.following}</div>
        <div className = "opensource-head-container-repositories">Repo: {gitHubData?.public_repos}</div>
        <div className = "opensource-head-container-link">GitHub</div>

        {/* 
          <p className = "opensource-head-container-id">{githubID}</p>
          <p className = "opensource-head-container-link">{githubLink}</p>
          <div className = "opensource-head-container-new">GitHub</div>
        */}
        
      </div>
      <PageOpenSourceList />
    </React.Fragment>
  );
}

export default GitHubPage;