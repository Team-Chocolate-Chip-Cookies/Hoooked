import React, { Component } from "react";
import "./Dashboard.css";
import SetHook from "../../components/SetHook"
import { Col, Row, Container } from "../../components/Grid";

class Dashboard extends Component {
  state = {

  };

  componentDidMount() {

  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-3">
            <SetHook />
          </Col>
        </Row>
      </Container>
    );
  }
}



export default Dashboard;