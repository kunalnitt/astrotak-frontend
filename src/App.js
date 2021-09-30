import React from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar/HeaderBar'
import IntroBar from './components/IntroBar/IntroBar'
import AdvBar from './components/AdvBar/AdvBar'
import Horoscopes from './components/Horoscopes/Horoscopes';
// import {createHashHistory} from 'history'
// var history = createHashHistory()

class App extends React.Component {
  constructor(){
    super();
    this.state = {
    }
    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  // handleInputChange(e){
  //   const value = e.target.value;
  //   const filteredItems = value!==undefined || value!==null || value!=='' ? cardItems.filter(function(cardItem){
  //     return (cardItem.itemName.toLowerCase().includes(value.toLowerCase()))
  //   }) : cardItems

  //   this.setState({filteredItems: filteredItems})
  // }

  // componentDidMount(){
  //   history.push('/')
  // }
  render(){
    // const showSidebar = this.state.showSidebar
    return (
    <div className="content-item-container">
      <div className="main-container">
            <HeaderBar />
            <IntroBar />
            <AdvBar />
            <Horoscopes />
          {/* <div className="content-container">
            <SideBar items={sidebarItems}
                      showSidebar={this.state.showSidebar}
                      active={this.state.active}
                      onChange={(item) => {history.push(item.uri);this.setState({active: item.name})}}/> */}
            {/* <Cards  itemName = {"Fish"}
                    itemPrice = {"10"} 
                    itemDetails = {"Detailed Description is here. Please provide more details bla bla bla bla"} /> */}
            {/* <div className={"view-container"}>
            <div className={"searchbar-container"}>
              <SearchBar 
                  toggleSidebar={() => this.setState({showSidebar: !showSidebar})}
                  inputItems={cardItems} handleInputChange={this.handleInputChange} />
            </div>
            <div className={"cards-container"}>
              {this.state.filteredItems.map(function(filteredItem){
                return (<Cards itemName={filteredItem.itemName} itemPrice={filteredItem.itemPrice} itemDetails={filteredItem.itemDetails} />)
              })}
            </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;