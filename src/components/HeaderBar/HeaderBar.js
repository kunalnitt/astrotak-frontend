import React from 'react';
import "./HeaderBar.css";
import hamburgerImg from './../../assets/hamburger.png'
import logoImg from './../../assets/logo.png'
import profileImg from './../../assets/profile.png'

const HeaderBar = () => {
const hamburger = <div className="astro-hamburger-container"><img src={hamburgerImg} className="astro-hamburger"/></div>
const logo = <div className="astro-logo-container"><img src={logoImg} className="astro-logo"/></div>
const profile = <div className="astro-profile-container"><img src={profileImg} className="astro-profile"/></div>
  return (
    <div className="astro-header">
      {hamburger}
      {logo}
      {profile}
    </div>
  );
};

export default HeaderBar;