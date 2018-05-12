import React, { Component } from "react";
import "./SetHook.css";
// import ScrollbarContainer from "../components/ScrollbarContainer"
import ScrollbarContainer from "../../components/ScrollbarContainer"


class SetHook extends Component {
    state = {
     
    };
 
    componentDidMount() {
     
    }
  
    render() {
      return (
       <div>
           {/* <ScrollbarContainer/> */}
        <p>SetHook</p>
        <ScrollbarContainer/>
        <ScrollbarContainer/>
        </div>
      );
    }
  }
  
  
export default SetHook;