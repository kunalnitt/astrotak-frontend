import React from 'react';
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"
import './App.css';
import Home from './components/Home/Home';
import HeaderBar from './components/HeaderBar/HeaderBar';
import NavBar from './components/NavBar/NavBar';
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
          <Home />
          <NavBar />
        </div>
      </div>
    );
  }
}

export default App;