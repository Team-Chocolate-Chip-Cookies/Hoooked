import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Followers from "./pages/Followers";
import SetHook from "./pages/SetHook";
import NavBar from "./components/NavBar";
import Footer from  "./components/Footer";
import Feed from "./components/Feed";

import './App.css';
import { Container } from './components/Grid/Container';
import Row from "./components/Grid/Row";
import Col from "./components/Grid/Col";
import Input from "./components/Input";
import Button from "./components/Button";
import SearchCard from "./components/SearchCard";
import FriendSearchCard from "./components/FriendSearchCard";




const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/followers" component={Followers} />
        <Route path="/sethook" component={SetHook} />

        {/* <Route component={NoMatch} /> */}
      </Switch>
      <Feed />
      <Footer />
    </div>
  </Router>
);


export default App;
