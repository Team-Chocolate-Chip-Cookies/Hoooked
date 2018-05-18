import React, { Component } from "react";
import "./Dashboard.css";
import SetHook from "../../components/SetHook";
import YourOnHook from "../../components/YourOnHook";
import Feed from "../../components/Feed";
import { Col, Row, Container } from "../../components/Grid";
import NavBar from "../../components/NavBar";
import API from "../../utils/API";
import MakePost from "../../components/MakePost";

class Dashboard extends Component {
  state = {
    hookData: [],
    title: "",
    body: "",
    postData: []
  };
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change

    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
  componentDidMount() {
    console.log("componentDidMount ran")
    //call hooks
    API.displayHooks()
      .then((res) => {
        console.log(res)
        console.log(res.data)
        this.setState({
          hookData: res.data
        })
        console.log(this.state.hookData)
      })
      .catch((error) => {
        if (error.response.status == 403) {
          this.props.history.push("/")

        }
        else console.log(error)
      })
    //call posts
    API.getPosts()
      .then((postData) => {
        console.log(postData)
        this.setState({
          postData: postData.data
        })
        console.log(this.state.postData)
      })
      .catch((error) => {
        if (error.response.status == 403) {
          this.props.history.push("/")

        }
        else console.log(error)
      })
  }

  clickPost = (thisId) => {
    console.log("clickPost ran!")
    API.newPost(this.state.title, this.state.body)
    API.displayHooks()
      .then((result) => {
        console.log(result)
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
        <NavBar />
        <br />
        <br />
        <Row>

          <Col size="md-7">

            <Feed>
              <MakePost
                handleInputChange={this.handleInputChange}
                clickPost={this.clickPost}
              />
              {this.state.postData.map((data, index) => (

                <div className="card-body" key={index}>

                  <h3><b> {data.title}</b></h3>
                  <p>{data.body}</p>
                  <p>Posted by {data.poster.firstname} {data.poster.lastname}</p>
                  <hr />

                </div>
              ))}
            </Feed>
          </Col>

          <Col size="md-5">
      
            <YourOnHook >
              <div className="card">
              {this.state.hookData.map((data, index) => (

                <div key={index}>

                  <p> {data.hooker.firstname} {data.hooker.lastname} Hoooked You!</p>
                  <img src={data.mediaPic} />
                  <p>{data.title}</p>

                  {/* <p>{data.name}</p>
              <p>{data.name}</p> */}
                </div>
              ))}
              </div>
            </YourOnHook>
          </Col>


        </Row>
      </Container>
    );
  }
}



export default Dashboard;