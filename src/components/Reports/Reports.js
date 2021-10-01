import React from 'react';
import "./Reports.css";
import seeAllImg from './../../assets/see-all.png'
import { connect } from 'react-redux'

function initCaps(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const Card = (props) => {
  return (
    <div className="astro-report-type-card">
      <div className="astro-report-type-img-container"><img src={props.images.medium.imageUrl} className="astro-report-type-img"/></div>
      {/* <div className="astro-report-type-title-rating">
        <div className="astro-report-type-title">{props.firstName} {props.lastName}</div>
        <div className="astro-report-type-rating">{props.rating}</div>
      </div> */}
      {/* <div className="astro-report-type-skill">{props.skills[0].name}</div>
      <div className="astro-report-type-charges">&#8377; {props.minimumCallDurationCharges} / min</div> */}
    </div>
  )
}

const Reports = (props) => {
// const filteredAstros = props.astros.filter((item) => {return(item.rating!=null && item.skills.length)})
const title = <div className="astro-report-title">Reports</div>
const seeAll = <div className="astro-report-seeall-container"><img src={seeAllImg} className="astro-seeall"/></div>
const description = <div className="astro-report-description">Astrology report or what is commonly knows as Horoscope report is basically an indepth look at your birth chart. Horoscope report will look at various planetary positions in your birth charts and also derive relationships and angle to understand your personality and trait.</div>
  return (
    <div className="astro-report-main">
      <div className="astro-report-titlebar">
        {title}
        {seeAll}
      </div>
      {description}
      <div className="astro-report-type-container">
        {props.reports.map(function(item){
          return (<Card {...item}/>)
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  reports: state.reports
})

export default connect(mapStateToProps)(Reports)