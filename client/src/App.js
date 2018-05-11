import React, { Component } from 'react';

import Login from './components/Pages/Login';
import ScrollbarContainer from "./components/ScrollbarContainer";
import SetHook from './components/SetHook'
import YourOnHook from './components/YourOnHook'

import './App.css';

class App extends Component {
  render() {
    return (


      <div>
      <ScrollbarContainer/>
   
     <p>WORKING</p>

     <SetHook/>
     <YourOnHook/>

     </div>
    );
  }
}

export default App;
