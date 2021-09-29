import React from 'react';
import "./IntroBar.css";
import introQuoteImg from './../../images/introbar-quote.png'
import introIdolImg from './../../images/introbar-idol.png'

const IntroBar = () => {
    const introQuote = <div className="astro-introquote-container"><img src={introQuoteImg} className="astro-introquote"/></div>
    const introIdol = <div className="astro-introidol-container"><img src={introIdolImg} className="astro-introidol"/></div>
      return (
        <div className="astro-introbar">
          {introQuote}
          {introIdol}
        </div>
      );
    };
    
    export default IntroBar;