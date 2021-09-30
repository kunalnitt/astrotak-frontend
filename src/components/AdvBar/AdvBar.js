import React from 'react';
import "./AdvBar.css";
import advImg1 from './../../images/adv-a.png'
import advImg2 from './../../images/adv-b.png'

const AdvBar = () => {
const adv1 = <div className="astro-adv-container"><img src={advImg1} className="astro-adv"/></div>
const adv2 = <div className="astro-adv-container"><img src={advImg2} className="astro-adv"/></div>
  return (
    <div className="astro-advbar">
        {adv1}
        {adv2}
        {adv1}
        {adv2}
        {adv1}
    </div>
  );
};

export default AdvBar;