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
    hookData:[]
  };

  componentDidMount() {
    console.log("componentDidMount ran")
    API.displayHooks()
    .then((res)=>{
     console.log(res)
     console.log(res.data)
     this.setState({
       hookData:res.data
     })
     console.log(this.state.hookData)
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
            <YourOnHook >
            {this.state.hookData.map((data, index) => (

            <div>
              
              <p> {data.hooker.firstname} {data.hooker.lastname}</p>
              <img src={data.mediaPic}/>
              <p>{data.title}</p>
             
              {/* <p>{data.name}</p>
              <p>{data.name}</p> */}
            </div>
            ))}
              </YourOnHook>
          </Col>
        </Row>
      </Container>
    );
  }
}



export default Dashboard;