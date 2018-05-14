import React, { Component } from "react";
import "./Dashboard.css";
import SetHook from "../../components/SetHook";
import YourOnHook from "../../components/YourOnHook";
import Feed from "../../components/Feed";
import { Col, Row, Container } from "../../components/Grid";

class Dashboard extends Component {
  state = {

  };

  componentDidMount() {

  }

  render() {
    return (
      <Container>
        <br/><br/>
        <Row>
          <Col size="md-2">
            <SetHook />
          </Col>
          <Col size="md-6">
            <Feed />
          </Col>
          <Col size="md-4">
            <YourOnHook />
          </Col>
        </Row>
      </Container>
    );
  }
}



export default Dashboard;