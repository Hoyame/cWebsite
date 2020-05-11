import * as React from 'react';
import { Component } from 'react';

import './opensource.scss'
import PageOpenSourceList from './components/page'

let githubImg = "https://cdn.discordapp.com/avatars/643225867929124874/7b03c008c7de478d7acd707ab28ccfef.png?size=256"
let githubName = "Hoyame Z."
let githubLink = "ss"
let githubID = "@corazon2"

class OpenSource extends Component {
  render() {
    return (
        <div>
          <h1 className = "opensource-head-title">OpenSource</h1>

          <div className = "opensource-head-container">
            <img src = {githubImg} className = "opensource-head-container-img"></img>
            <p className = "opensource-head-container-text">{githubName}</p>
            <p className = "opensource-head-container-link">{githubID}</p>
            <p className = "opensource-head-container-id">{githubLink}</p>
          </div>
          <PageOpenSourceList />
        </div>
    );
  }
}

export default OpenSource;