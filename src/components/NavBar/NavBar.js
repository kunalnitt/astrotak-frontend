import React from 'react';
import "./NavBar.css";
import homeImg from './../../assets/home.png'
import talkImg from './../../assets/talk.png'
import askImg from './../../assets/ask.png'
import reportsImg from './../../assets/reports.png'

const NavBar = () => {
const homeTab = <div className="astro-tab-container"><img className="astro-tab-img" src={homeImg} className="astro-tab"/></div>
const talkTab = <div className="astro-tab-container"><img className="astro-tab-img" src={talkImg} className="astro-tab"/></div>
const askTab = <div className="astro-tab-container"><img className="astro-tab-img" src={askImg} className="astro-tab"/></div>
const reportsTab = <div className="astro-tab-container"><img className="astro-tab-img" src={reportsImg} className="astro-tab"/></div>
  return (
    <div className="astro-nav">
      {homeTab}
      {talkTab}
      {askTab}
      {reportsTab}
    </div>
  );
};

export default NavBar;