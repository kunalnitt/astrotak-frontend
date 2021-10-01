import React from 'react';
import "./AdvBar.css";
import { connect } from 'react-redux'

const AdvBar = (props) => {
  return (
    <div className="astro-advbar">
        {/* {adv1}
        {adv2}
        {adv1}
        {adv2}
        {adv1} */}
        {props.banners.map(function(item){
          return (<div className="astro-adv-container"><img src={item.images.medium.imageUrl} className="astro-adv"/></div>)
        })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  banners: state.banners
})

export default connect(mapStateToProps)(AdvBar)