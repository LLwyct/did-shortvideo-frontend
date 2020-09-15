import React from 'react';
import './App.scss';

import Home from './view/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="global__container">
          <div className="App-header-in">
            <div className="header-brand">
              <span>DSV | TRUST CENTER</span>
            </div>
            <div className="header-links">
              <a href="/">
                <span>home</span>
              </a>
              <a href="/"><span>
                </span>about</a>
            </div>
          </div>
        </div>
      </header>
      <Home/>
    </div>
  );
}

export default App;
