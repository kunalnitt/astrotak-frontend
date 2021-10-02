import React, {useState,useRef} from 'react';
import "./Talk.css";
import { InputText } from 'primereact/inputtext';
import { OverlayPanel } from 'primereact/overlaypanel';
import { RadioButton } from 'primereact/radiobutton';
import AstroPanel from '../../components/AstroPanel/AstroPanel';
import AstrologerCard from '../../components/AstrologerCard/AstrologerCard';
import { connect } from 'react-redux'

const SearchBox = (props) => {
  return (
    <div className="astro-talk-search">
      <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText value={props.searchInput} onChange={(e) => props.setSearchInput(e.target.value)} placeholder="Search Astrologer" />
      </span>
    </div>
  )
}

const SortPanel = (props) => {
  return (
    <div className="astro-talk-sort">
      <div className="astro-talk-sort-title">Sort By</div>
      <hr className="solid" />
        <div className="astro-talk-sort-option">
          <div className="p-field-radiobutton">
            <RadioButton inputId="sort-radio-1" value="experience-2" name="sort-radio" onChange={(e) => props.setSortInput(e.value)} checked={props.sortInput === 'experience-2'} />
            <label htmlFor="sort-radio-1">  Experience - High to Low</label>
          </div>
        </div>
        <div className="astro-talk-sort-option">
          <div className="p-field-radiobutton">
            <RadioButton inputId="sort-radio-2" value="experience-1" name="sort-radio" onChange={(e) => props.setSortInput(e.value)} checked={props.sortInput === 'experience-1'} />
            <label htmlFor="sort-radio-2">  Experience - Low to High</label>
          </div>
        </div>
        <div className="astro-talk-sort-option">
          <div className="p-field-radiobutton">
            <RadioButton inputId="sort-radio-3" value="minimumCallDurationCharges-2" name="sort-radio" onChange={(e) => props.setSortInput(e.value)} checked={props.sortInput === 'minimumCallDurationCharges-2'} />
            <label htmlFor="sort-radio-3">  Price - High to Low</label>
          </div>
        </div>
        <div className="astro-talk-sort-option">
          <div className="p-field-radiobutton">
            <RadioButton inputId="sort-radio-4" value="minimumCallDurationCharges-1" name="sort-radio" onChange={(e) => props.setSortInput(e.value)} checked={props.sortInput === 'minimumCallDurationCharges-1'} />
          <label htmlFor="sort-radio-4">  Price - Low to High</label>
          </div>
        </div>
    </div>
  )
} 

const Talk = (props) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [sortInput, setSortInput] = useState(null);
  const op = useRef(null)

  const filteredAstros = props.astros.filter((item) => {
    return (
      [ item.firstName,
        item.lastName,
        item.languages.map((l) => l.name).join(" "),
        item.skills.map((s) => s.name).join(" ")
      ].join(" ").toLowerCase().includes(searchInput.toLowerCase())
      )
    })

  sortInput ? filteredAstros.sort(
    (a,b) => {
      if(sortInput.split('-')[1]==1){
        return (
            a[sortInput.split('-')[0]] - b[sortInput.split('-')[0]]
        )
      }else{
        return (
          b[sortInput.split('-')[0]] - a[sortInput.split('-')[0]]
        )
      }
    }
  ) : filteredAstros
  return (
    <div className="talk-container">
      <AstroPanel setSearchVisible={(e) => setSearchVisible(!searchVisible)} setSortVisible={(e) => op.current.toggle(e)} />
      { searchVisible ? <SearchBox searchInput={searchInput} setSearchInput={(e) => setSearchInput(e)}/> : false }
      <OverlayPanel ref={op} dismissable>
        <SortPanel sortInput={sortInput} setSortInput={(e) => setSortInput(e)}/>
      </OverlayPanel>
      <div className="astro-talk-card-container">
        {filteredAstros.map(function(item, key){
          return (<AstrologerCard key={key} {...item} />)
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  astros: state.astros
})

export default connect(mapStateToProps)(Talk)