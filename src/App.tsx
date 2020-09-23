import React from 'react';
import './App.scss';
import Dashboard from './view/Dashboard/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './view/Home';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/profile" component={Dashboard}></Route>
          <Route path="*" component={Home}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
