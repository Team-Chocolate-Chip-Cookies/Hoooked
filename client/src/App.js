import React, { Component } from 'react';
import Followers from './components/Pages/Followers'
// import Login from './components/Pages/Login';
import ScrollbarContainer from "./components/ScrollbarContainer";
// import SetHook from './components/SetHook'
import YourOnHook from './components/YourOnHook'

import './App.css';

class App extends Component {
  render() {
    return (


      <div>
   
     <p>WORKING</p>

     {/* <SetHook/> */}
     <YourOnHook/>
     <Followers/>
     <ScrollbarContainer/>
     </div>
    );
  }
}

export default App;
