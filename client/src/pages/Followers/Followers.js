import React, { Component } from "react";
import "./Followers.css";
import { Col, Row, Container } from "../../components/Grid";
import ScrollbarContainer from "../../components/ScrollbarContainer"
import API from "../../utils/API";
import { withRouter } from "react-router-dom";
import AllUserData from "../../components/AllUsersData";

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
                <div className="bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm"></div>
                            <div className="col-6" id="searchfollower">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="search by username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button">Search</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm"></div>
                        </div><br /><br />
                        <div className="row">
                            <div className="col-12">
                                <ScrollbarContainer>
                                    {this.state.usersNames.map((user, index) => (

                                        <AllUserData
                                            name={user.name}
                                            id={user.id}
                                            clickFollow={this.clickFollow}
                                            key={index}
                                        />
                                    ))}
                                </ScrollbarContainer>
                            </div>
                        </div><br /><br />
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



export default withRouter(Followers);