import React, { Component } from "react";
import "./Dashboard.css";
import SetHook from "../../components/SetHook";
import YourOnHook from "../../components/YourOnHook";
import Feed from "../../components/Feed";
import { Col, Row, Container } from "../../components/Grid";
import NavBar from "../../components/NavBar";


class Dashboard extends Component {
  state = {

  };

  componentDidMount() {

  }

  render() {
    return (
      
      <Container>
        <NavBar/>
        <br/>
      
        <Row>
          <Col size="md-2">
          </Col>
        
          <Col size="md-8">
          <SetHook />
          </Col>

          <Col size="md-2">
          </Col>
        </Row>
        <br/>
          <Row>
          <Col size="md-7">
            <Feed />
          </Col>
          <Col size="md-5">
            <YourOnHook />
          </Col>
        </Row>
      </Container>
    );
  }
}



export default Dashboard;