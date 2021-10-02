import React from 'react';
import "./Customers.css";
import quoteIconImg from './../../assets/quote-icon.png'
import { connect } from 'react-redux'

const Card = (props) => {
  const quoteIcon = <div className="astro-customer-quote-icon-container"><img src={quoteIconImg} className="astro-customer-quote-icon"/></div>
  const feedback = <div className="astro-customer-feedback-container"><div className="astro-customer-feedback">{props.feedback}</div></div>
  const name = <div className="astro-customer-name-container"><div className="astro-customer-name">{props.name}</div><div className="astro-customer-city">{props.city}</div></div>
  return (
    <div className="astro-customer-type-card">
      {quoteIcon}
      {feedback}
      {name}
    </div>
  )
}

const Customers = (props) => {
const title = <div className="astro-customer-title">Hear from our Happy Customers!</div>
  return (
    <div className="astro-customer-main">
      <div className="astro-customer-titlebar">
        {title}
      </div>
      <div className="astro-customer-type-container">
        {props.customers.map(function(item, key){
          return (<Card key={key} {...item}/>)
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  customers: state.customers
})

export default connect(mapStateToProps)(Customers)