import React from 'react';
import "./Astrologers.css";
import seeAllImg from './../../assets/see-all.png'
import { connect } from 'react-redux'

const Card = (props) => {
  return (
    <div className="astro-detail-card">
      <div className="astro-detail-img-container"><img src={props.images.medium.imageUrl} className="astro-detail-img"/></div>
      <div className="astro-detail-title-rating">
        <div className="astro-detail-title">{props.firstName} {props.lastName}</div>
        <div className="astro-detail-rating">{props.rating}</div>
      </div>
      <div className="astro-detail-skill">{props.skills[0].name}</div>
      <div className="astro-detail-charges">&#8377; {props.minimumCallDurationCharges} / min <div className="astro-detail-talk-now">Talk Now</div></div>
    </div>
  )
}

const Astrologers = (props) => {
const filteredAstros = props.astros.filter((item) => {return(item.rating!=null && item.skills.length)})
const title = <div className="astro-astrologer-title">Talk to an Astrologer</div>
const seeAll = <div className="astro-astrologer-seeall-container"><img src={seeAllImg} className="astro-seeall"/></div>
const description = <div className="astro-astrologer-description">Leading astrologers of India are just a phone call away. Our panel of astrologers not just provided solution to your life problems but also guide you so that you can take the right path towards growth and prosperity.</div>
  return (
    <div className="astro-astrologer-main">
      <div className="astro-astrologer-titlebar">
        {title}
        {seeAll}
      </div>
      {description}
      <div className="astro-detail-container">
        {filteredAstros.map(function(item,key){
          return (<Card key={key} {...item}/>)
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  astros: state.astros
})

export default connect(mapStateToProps)(Astrologers)