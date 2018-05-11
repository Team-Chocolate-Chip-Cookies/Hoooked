import React, { Component } from 'react';
import ScrollbarContainer from "./components/ScrollbarContainer";
import SetHook from './components/SetHook'
import YourOnHook from './components/YourOnHook'
import './App.css';

class App extends Component {
  render() {
    return (

      <div>
      <ScrollbarContainer/>
    <div>
     <p>WORKING</p>

     <SetHook/>
     <YourOnHook/>

     </div>
    );
  }
}

export default App;
