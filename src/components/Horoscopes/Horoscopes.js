import React from 'react';
import "./Horoscopes.css";
import seeAllImg from './../../assets/see-all.png'
import { connect } from 'react-redux'
import ariesImg from './../../signs/aries.png'

function initCaps(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const Card = (props) => {
  return (
    <div className="astro-signs-card">
      <div className="astro-signs-img-container"><img src={ariesImg} className="astro-signs-img"/></div>
      <div className="astro-signs-title">{initCaps(props.name)}</div>
      <div className="astro-signs-dates">{props.date}</div>
    </div>
  )
}

const Horoscopes = (props) => {
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
      <div className="astro-signs-container">
        {props.horoscopes.map(function(item){
          return (<Card {...item}/>)
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  horoscopes: state.horoscopes
})

export default connect(mapStateToProps)(Horoscopes)