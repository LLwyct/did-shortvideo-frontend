import React from 'react';
import './App.scss';
import Dashboard from './views/Dashboard/Dashboard';
import Login from "./views/FormSubmit/Login";
import Signup from "./views/FormSubmit/Signup";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
function App() {

  return (
    <BrowserRouter>
      {/* <CssBaseline></CssBaseline> */}
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/profile" component={Dashboard}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Signup}></Route>
          <Route path="*" component={Home}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
