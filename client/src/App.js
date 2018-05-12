import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Followers from "./pages/Followers";
import SetHook from "./pages/SetHook";
import NavBar from "./components/NavBar";
import Footer from  "./components/Footer";
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
      <Footer />
    </div>
  </Router>
);

export default App;
