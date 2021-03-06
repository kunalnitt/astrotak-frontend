import React from 'react';
import "./AstroPanel.css";
import { connect } from 'react-redux'
import searchImg from './../../assets/search.png'
import filterImg from './../../assets/filter.png'
import sortImg from './../../assets/sort.png'

const AstroPanel = (props) => {
  const title = <div className="astro-panel-title">Talk to an Astrologer</div>
  const searchBtn = <div className="astro-panel-search"><img src={searchImg} className="astro-panel-search-btn" onClick={(e) => props.setSearchVisible(e)}/></div>
  const filterBtn = <div className="astro-panel-filter"><img src={filterImg} className="astro-panel-filter-btn"/></div>
  const sortBtn = <div className="astro-panel-sort"><img src={sortImg} onClick={(e) => props.setSortVisible(e)} className="astro-panel-sort-btn"/></div>
  return (
    <div className="astro-panel">
        {title}
        <div className="astro-panel-functions">
          {searchBtn}
          {filterBtn}
          {sortBtn}
        </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  astros: state.astros
})

export default connect(mapStateToProps)(AstroPanel)