import * as React from 'react';
import { Component } from 'react';

import './opensource.scss'
import PageOpenSourceList from './components/page'

let githubImg = "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256"
let githubName = "Hoyame Z."
let githubLink = "https://github.com/corazon2"
let githubID = "@corazon2"

let githubFollowers = 100
let githubRepo = 3


class OpenSource extends Component {
  render() {
    return (
        <div>
          <h1 className = "opensource-head-title">OpenSource</h1>

          <div className = "opensource-head-container">
            <img src = {githubImg} className = "opensource-head-container-img"></img>
            <p className = "opensource-head-container-text">{githubName}</p>
            <p className = "opensource-head-container-id">{githubID}</p>
            <p className = "opensource-head-container-link">{githubLink}</p>
            <div className = "opensource-head-container-new">GitHub</div>
            
          </div>
          <PageOpenSourceList />
        </div>
    );
  }
}

export default OpenSource;