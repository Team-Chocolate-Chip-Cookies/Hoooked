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
        usersNames: [],
        followedArr: []
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
                    let currentUser = {
                        name: element.firstname + " " + element.lastname,
                        id: element.id
                    }
                    usersNames.push(currentUser)
                })
                this.setState({
                    usersNames: usersNames
                })
                console.log(this.state.usersNames)
                this.allFollowUsers()
            })
            .catch((error) => {
                if (error.response.status == 403) {
                    this.props.history.push("/")

                }
                else console.log(error)
            })
    }
    allFollowUsers = () => {
        API.allFollowUser()
            .then((res) => {
                console.log("allFollowUser then function ran in componentDidMount")
                console.log(res)
                console.log(res.data)
                console.log(res.data[0].followed.id)
                //   // const data=Object.assign({}, res.data)
                //   // data.followed=Object.assign({},res.data.followed)
                //   const data=res.data.map(item=>item)

                this.setState({
                    followedArr: res.data
                })
                console.log(this.state.followedArr)
                console.log(this.state.followedArr[0].followed.id)
               

            })
            .catch((error) => {
                if (error && error.response.status == 403) {
                    this.props.history.push("/")

                }
                else console.log(error)
            })
    }
    checkFollow = (currentId) => {
        console.log("current ID")
        for (let i = 0; i = this.state.followedArr.length; i++) {
            if(i===this.state.followedArr.length){
                return "Follow"
            }
            else if (currentId === this.state.followedArr[i].followed.id) {
                console.log(currentId + " followed")
                return "Unfollow"
            }
            console.log(currentId + " NOT FOLLOWED")
        }
    }

    clickFollow = (thisId) => {
        console.log("clickFollow Ran!")
        // let followedId
        console.log(thisId)
        API.addFollow(thisId)
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                if (error.response.status == 403) {
                    this.props.history.push("/")

                }
                else console.log(error)
            })
    }

    clickUNFollow = (thisId) => {
        console.log("clickUNFollow Ran!")
        // let followedId
        console.log(thisId)
        API.destroyFollow(thisId)
            .then((res) => {
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
                    <NavBar />
                    <br /><br />
                    <Row>
                        <Col size="md-12">
                            <div className="card scrolling">
                                <FriendSearchCard placeholder="find people to follow" />
                                {this.state.usersNames.map((user, index) => (

                                    <AllUserData
                                        name={user.name}
                                        id={user.id}
                                        clickFollow={this.clickFollow}
                                        clickUNFollow={this.clickUNFollow}
                                        key={index}
                                        index={index}
                                    following={this.checkFollow(user.id)}
                                    />
                                ))}

                            </div>
                        </Col>
                    </Row><br /><br />
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