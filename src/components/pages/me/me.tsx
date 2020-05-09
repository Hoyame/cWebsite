import * as React from 'react';
import { Component } from 'react';

import './me.scss'

class Me extends Component {
  render() {
    return (
      <div className="pages-body">
          <article className="presentation">
            <div className="summary">
              <h2 className="summary-text">Yo, c'est moi 🙃</h2>
              <p>fzefz</p>
            </div>
            <div className = "me-box">
              <img src="https://cdn.discordapp.com/avatars/643225867929124874/7b03c008c7de478d7acd707ab28ccfef.png?size=256" className = "me-box-avatar" alt="Hoyame"></img>
              <h3 className = "me-box-name">Hoyame</h3>
              <h6 className = "me-box-name2">@corazon2</h6>
            </div>
          </article>
      </div>
    );
  }
}

export default Me;