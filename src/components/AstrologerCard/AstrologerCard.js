import React from 'react';
import "./AstrologerCard.css";
import taskOnCallImg from './../../assets/talk-on-call.png'


const convertToStr = (arr) => {
    let str = ""
    if(arr.length){  
        arr.map((item) => {
            if(item.name===arr[0].name){
                str=item.name
            }else{
                str=str+', '+item.name
            }
        })
    }

    return str
}

const AstrologerCard = (props) => {
    return (
      <div className="astro-talk-card">
        <div className="astro-talk-card-img-container"><img src={props.images.medium.imageUrl} className="astro-talk-card-img"/></div>
        <div className="astro-talk-card-details">
            <div className="astro-talk-card-title">{props.firstName} {props.lastName}</div>
            <div className="astro-talk-card-skill">{convertToStr(props.skills)}</div>
            <div className="astro-talk-card-language">{convertToStr(props.languages)}</div>
            <div className="astro-talk-card-charges">&#8377;{props.minimumCallDurationCharges}/ min</div>
            <div className="astro-talk-on-call-img-container"><img src={taskOnCallImg} className="astro-talk-on-call-img"/></div>
        </div>
        <div className="astro-talk-card-rating">{props.experience} Years</div>
      </div>
    )
  }

  export default AstrologerCard