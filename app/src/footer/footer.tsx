import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import github from '../../assets/github.png'
import twitter from '../../assets/twitter.png'
import twitch from '../../assets/twitch.png'

import '../../styles/footer/footer.scss'

const Footer = () => {
   const redirection = (link: string) => {
      return (
        window.location.replace(link)
      );
   }

   return (
      <React.Fragment>
         <div className="footer">
            <div>
               <a target="_blank" href='https://discord.gg/NKdSGr8' className="nav-button">Discord</a>
               <a target="_blank" href='mailto:zou.hoyame@gmail.com' className="nav-button">Mail</a>
               <a target="_blank" href='https://steamcommunity.com/profiles/76561199057468916' className="nav-button">Steam</a>
        
            </div>

            <div className="footer-component-img">
               <a target="_blank" href='https://github.com/hoyame' className="footer-img-container">
                  <img className="footer-img" src={github}></img>
               </a>

               <a target="_blank" href='https://twitter.com/hoyame__' className="footer-img-container">
                  <img className="footer-img" src={twitter}></img>
               </a>

               <a target="_blank" href='https://www.twitch.tv/hoyameee' className="footer-img-container">
                  <img className="footer-img" src={twitch}></img>
               </a>
            </div>
         </div>
      </React.Fragment>
   );
}

export default Footer;