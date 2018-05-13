import React, { Component } from 'react';
import ScrollbarContainer from "./components/ScrollbarContainer";
import './App.css';
import { Container } from './components/Grid/Container';
import Row from "./components/Grid/Row";
import Col from "./components/Grid/Col";
import Input from "./components/Input";
import Button from "./components/Button";
import SearchCard from "./components/SearchCard";
import FriendSearchCard from "./components/FriendSearchCard";



class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="xs-6 sm-6">
              <Container>
               <SearchCard>
               </SearchCard>
              </Container>
            </Col>
            <Col size="xs-6 sm-6">
              <Container>
               <FriendSearchCard>
               </FriendSearchCard>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
