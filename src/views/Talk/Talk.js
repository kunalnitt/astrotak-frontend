import React, {useState} from 'react';
import "./Talk.css";
import { InputText } from 'primereact/inputtext';
import AstroPanel from '../../components/AstroPanel/AstroPanel';
import AstrologerCard from '../../components/AstrologerCard/AstrologerCard';
import { connect } from 'react-redux'

const SearchBox = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="astro-talk-search">
      <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder="Search Astrologer" />
      </span>
    </div>
  )
}

const Talk = (props) => {
  return (
    <div className="talk-container">
      <AstroPanel />
      <SearchBox />
      <div className="astro-talk-card-container">
        {props.astros.map(function(item){
          return (<AstrologerCard {...item}/>)
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  astros: state.astros
})

export default connect(mapStateToProps)(Talk)