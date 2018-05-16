import React, { Component } from "react";
import "./Dashboard.css";
import SetHook from "../../components/SetHook";
import YourOnHook from "../../components/YourOnHook";
import Feed from "../../components/Feed";
import { Col, Row, Container } from "../../components/Grid";
import NavBar from "../../components/NavBar";
import API from "../../utils/API";

class Dashboard extends Component {
  state = {

  };

  componentDidMount() {
    API.displayHooks()
    .then((res)=>{
      console.log("allFollowUser then function ran in componentDidMount")
      console.log(res)
      console.log(res.data)
      // const data=Object.assign({}, res.data)
      // data.followed=Object.assign({},res.data.followed)
      const data=res.data.map(item=>item)
      
      this.setState({
        followedArr:data
      })
      console.log(this.state.followedArr)
      console.log(this.state.followedArr[0].followed.id)
    })
    .catch((error) => {
      if (error.response.status == 403) {
          this.props.history.push("/")

      }
      else console.log(error)
  })
  }

  render() {
    return (
      
      <Container>
        <NavBar/>
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