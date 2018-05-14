import React, { Component } from "react";
import "./Followers.css";
import { Col, Row, Container } from "../../components/Grid";
import ScrollbarContainer from "../../components/ScrollbarContainer"
class Followers extends Component {
    state = {
     
    };
 
    componentDidMount() {
     
    }
  
    render() {
      return (
        <div>
        <div className="bg">
            <div className="container">
                <div className="row">
                    <div className="col-sm"></div>
                    <div className="col-6" id="searchfollower">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="search by username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button">Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm"></div>
                </div><br/><br/>
                <div className="row">
                    <div className="col-12">
                        <ScrollbarContainer/>
                    </div>
                </div><br/><br/>
                <div className="row">
                    <div className="col-sm"></div>
                        <div className="col-sm">
                            <button type="button" className="btn btn-primary btn-lg btn-block">Follow</button>
                        </div>
                    <div className="col-sm"></div>
                </div>
            </div>
        </div>
    </div>

      );
    }
  }
  
  

export default Followers;