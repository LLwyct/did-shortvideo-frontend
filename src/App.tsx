import React from 'react';
import './App.scss';
import Dashboard from './view/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './view/Home';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <div className="golbal__container">
          <div className="App-header-in">
            <div className="header-links">
              <a href="/">
                <span>home</span>
              </a>
              <a href="/profile"><span>
                </span>Profile</a>
            </div>
            <div className="header-brand">
              <span>DSV | TRUST CENTER</span>
            </div>
          </div>
        </div>
      </header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/profile" component={Dashboard}></Route>
        </Switch>
      <footer className="App-footer">
        <div className="left">
          <h3>Contact Us</h3>
        </div>
        <div className="mid">
          Privacy Policy
          <br/>Terms and Conditions
          <br/> 2020 © Name
        </div>
        <div className="right"></div>
      </footer>
    </div>
    </BrowserRouter >
  );
}

export default App;
