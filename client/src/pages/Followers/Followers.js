import React, { Component } from "react";
import "./Followers.css";
import { Col, Row, Container } from "../../components/Grid";

import FriendSearchCard from "../../components/FriendSearchCard";
import ScrollbarContainer from "../../components/ScrollbarContainer"
import API from "../../utils/API";
import { withRouter } from "react-router-dom";
import AllUserData from "../../components/AllUsersData";
import NavBar from "../../components/NavBar";


class Followers extends Component {
    state = {
        usersNames:[]
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
        console.log("ComponentDidMount ran!")
        API.allUsers()
            .then((usersData) => {
                console.log(usersData)
                let usersNames = []
                usersData.data.forEach((element) => {
                    let currentUser={
                    name:element.firstname + " " + element.lastname,
                        id:element.id
                    }
                    usersNames.push(currentUser)
                })
                this.setState({
                    usersNames:usersNames
                })
                console.log(this.state.usersNames)
            })
            .catch((error) => {
                if (error.response.status == 403) {
                    this.props.history.push("/")

                }
                else console.log(error)
            })
    }
    clickFollow=(thisId)=>{
        console.log("clickFollow Ran!")
        // let followedId
        console.log(thisId)
        API.addFollow(thisId)
            .then((res)=>{
                console.log(res)
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
        <div>
            <Container>
            <NavBar/>
                <br/><br/>
                <Row>
                    <Col size="md-12">
                        <div className="card scrolling">
                            <FriendSearchCard placeholder="find people to follow"/>
                                     {this.state.usersNames.map((user, index) => (

                                        <AllUserData
                                            name={user.name}
                                            id={user.id}
                                            clickFollow={this.clickFollow}
                                            key={index}
                                            index={index}
                                        />
                                    ))}    
                          
                        </div>
                    </Col>
                </Row><br/><br/>
                {/* <Row>
                    <div className="col-sm"></div>
                        <div className="col-sm">
                            <button type="button" className="btn btn-primary btn-lg btn-block">Follow</button>
                        </div>
                    <div className="col-sm"></div>
                </Row> */}
            </Container>
        </div>




        );
    }
}



export default withRouter(Followers);