import React from 'react';
import "./Home.css";
import IntroBar from '../../components/IntroBar/IntroBar'
import AdvBar from '../../components/AdvBar/AdvBar'
import Horoscopes from '../../components/Horoscopes/Horoscopes';
import Astrologers from '../../components/Astrologers/Astrologers';
import Reports from '../../components/Reports/Reports';
import Questions from '../../components/Questions/Questions';

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