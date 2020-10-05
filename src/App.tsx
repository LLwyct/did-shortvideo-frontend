import React from 'react';
import './App.scss';
import Dashboard from './views/Dashboard/Dashboard';
import Login from "./views/FormSubmit/Login";
import Signup from "./views/FormSubmit/Signup";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Header from './components/Header';


export interface IHeaderProps {
  colorMode?: "default" | "light"
}

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home component={Header}/>
          </Route>
          <Route path="/profile">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login component={Header} colorMode="light"/>
          </Route>
          <Route 
            path="/register/:op"
            children={<Signup component={Header} colorMode="light"/>}
          />
          <Route 
            path="/register"
            children={<Signup component={Header} colorMode="light"/>}
          />
          <Route path="*">
            <Home component={Header} colorMode="default" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
