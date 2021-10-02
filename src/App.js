import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"
import './App.css';
import Home from './views/Home/Home';
import Talk from './views/Talk/Talk';
import HeaderBar from './components/HeaderBar/HeaderBar';
import NavBar from './components/NavBar/NavBar';

const App = () => {
    return (
      <div className="content-item-container">
        <div className="main-container">
          <HeaderBar />
          <div className="view-container">
          <HashRouter>
            <Route exact path="/" component={Home} />
            <Route path="/talk" component={Talk} />
          </HashRouter>
          </div>
          <NavBar />
        </div>
      </div>
    );
}

export default App;