import React from 'react';
import "./AdvBar.css";
import { connect } from 'react-redux'


const AdvBar = (props) => {
  return (
    <div className="astro-advbar">
        {props.banners.map(function(item, key){
          return (<div key={key} onClick={() => {window.location.href = item.landingUrl}} className="astro-adv-container"><img src={item.images.medium.imageUrl} className="astro-adv"/></div>)
        })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  banners: state.banners
})

export default connect(mapStateToProps)(AdvBar)