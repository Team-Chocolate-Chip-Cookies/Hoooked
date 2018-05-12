import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Pages/Dashboard";
import Followers from "./components/Pages/Followers";
import SetHook from "./components/Pages/SetHook";
import NavBar from "./components/NavBar";
import './App.css';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/followers" component={Followers} />
        <Route exact path="/sethook" component={SetHook} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
