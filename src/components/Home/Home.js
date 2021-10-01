import React from 'react';
import "./Home.css";
import IntroBar from './../IntroBar/IntroBar'
import AdvBar from './../AdvBar/AdvBar'
import Horoscopes from './../Horoscopes/Horoscopes';
import Astrologers from './../Astrologers/Astrologers';
import Reports from './../Reports/Reports';
import Questions from './../Questions/Questions';

const Home = () => {
  return (
    <div className="home-container">
        <IntroBar />
        <AdvBar />
        <Horoscopes />
        <Astrologers />
        <Reports />
        <Questions />
    </div>
  );
};

export default Home;