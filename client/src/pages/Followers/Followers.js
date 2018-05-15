import React, { Component } from "react";
import "./Followers.css";
import { Col, Row, Container } from "../../components/Grid";
import FriendSearchCard from "../../components/FriendSearchCard";


class Followers extends Component {
    state = {
     
    };
 
    componentDidMount() {
     
    }
  
    render() {
      return (
        <div>
            <Container><br/><br/>
                <Row>
                    <Col size="md-12">
                        <div className="card scrolling">
                            <FriendSearchCard placeholder="find people to follow"/>
                        </div>
                    </Col>
                </Row><br/><br/>
                <Row>
                    <div className="col-sm"></div>
                        <div className="col-sm">
                            <button type="button" className="btn btn-info btn-lg btn-block">Follow</button>
                        </div>
                    <div className="col-sm"></div>
                </Row>
            </Container>
        </div>



      );
    }
  }
  
  

export default Followers;