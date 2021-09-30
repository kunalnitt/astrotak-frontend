import React from 'react';
import "./Horoscopes.css";
import seeAllImg from './../../assets/see-all.png'

const Horoscope = () => {
const cards = <div className="astro-horoscope-cards-container"></div>
const title = <div className="astro-horoscope-title">Daily Horoscopes</div>
const seeAll = <div className="astro-horoscope-seeall-container"><img src={seeAllImg} className="astro-seeall"/></div>
const description = <div className="astro-horoscope-description">Read your daily horoscope based on your sunsign, select your zodiac sign and give the right start to your day.</div>
  return (
    <div className="astro-horoscope-main">
      <div className="astro-horoscope-titlebar">
        {title}
        {seeAll}
      </div>
      {description}
    </div>
  );
};

export default Horoscope;