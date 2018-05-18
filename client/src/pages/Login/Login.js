
import React, { Component } from "react";
import "./Login.css";
import logo from "./logoCrop2.png";
import API from "../../utils/API";
import { withRouter } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
class Login extends Component {
    state = {

        email: '',
        password: '',
        SUfirstName: "",
        SUlastName: "",
        SUemail: "",
        SUpassword: "",
        newPasswordEmail:""

    };
    componentDidMount() {
        API.signOut()
    }
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change

        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        }, function () {

        });
    };
    clickSignIn = event => {
        event.preventDefault();
        console.log("RAN")
        API.signIn(this.state.email, this.state.password)
            .then(
                (data) => {
                    this.props.history.push("/dashboard")
                }
            )

    }
    clickSignUp = event => {
        event.preventDefault();
        console.log("RAN")
        API.signUp(this.state.SUfirstName, this.state.SUlastName, this.state.SUemail, this.state.SUpassword)
            .then(
                (data) => {
                    window.location.reload();
                }
            )
    }
    newPassword=event=>{
        event.preventDefault()
        console.log(this.state.newPasswordEmail)
        API.newPassword(this.state.newPasswordEmail)
        // .then(
        //     (data) => {
        //         window.location.reload();
        //     }
    }
    render() {
        return (
            <div className="container">
                <div class="row hero">
                    <div class="col-md-12">
                        {/* <div className="jumbotron text-center"> */}
                        {/* <div className="container"> */}
                        <img src={logo} alt="Logo" />
                        <p className="lead">Share the things you’re hooked on and get your friends hooked too!</p>
                        {/* </div> */}
                        {/* </div> */}

                    </div>
                </div>

    <br /><br />
    


                <div class="row horizontalBar">
                    <div class="col-md-4">
                    </div>

                    <div class="col-md-4">

                        <form>
                            <div className="form-group">
                                {/* <label for="exampleInputEmail1">Email address</label> */}
                                <input
                                    type="email"
                                    className="form-control login"
                                    id="exampleInputEmail1"
                                    name="email"
                                    onChange={this.handleInputChange}
                                    aria-describedby="emailHelp"
                                    placeholder="Email" />
                            </div>
                            <div className="form-group">
                                {/* <label for="exampleInputPassword1">Password</label> */}
                                <input type="password"
                                    className="form-control login"
                                    id="exampleInputPassword1"
                                    name="password"
                                    onChange={this.handleInputChange}
                                    placeholder="Password" />
                            </div>
                            <button type="button" onClick={this.clickSignIn} className="btn btn-primary loginBtn">User Login</button>
                        </form>
                    </div>
                    <div class="col-md-4">
                    </div>
                </div>
                <br /><br />
                <br /><br />
               
                


                <div class="row horizontalBar">
                    <div class="col-md-4">
                    </div>

                    <div class="col-md-4">

                        {/* <!-- Button trigger modal --> */}
                        <button type="button" className="btn btn-primary btn-lg loginBtn" data-toggle="modal" data-target="#exampleModalLong">
                            New User - Get Hoooked!
                        </button>
                        <br></br>
                        <div className="text-center">
                        <button className="btn btn-primary" data-toggle="modal" data-target="#newpassword" >Forgot Password?</button>
                        </div>
                    </div>


                    <div class="col-md-4">
                    </div>

                    <div class="col-md-4">
                    </div>

                </div>
                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                {/* <h5 className="modal-title" id="exampleModalLongTitle">Register</h5> */}
                                <form className="loginModalForm">
                                    <div className="form-group">
                                        <label for="formGroupExampleInput">First Name</label>
                                        <input type="text"
                                            className="form-control"
                                            id="formGroupExampleInput"
                                            // placeholder="first name"
                                            onChange={this.handleInputChange}
                                            name="SUfirstName"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="formGroupExampleInput2">Last Name</label>
                                        <input type="text"
                                            className="form-control"
                                            id="formGroupExampleInput2"
                                            // placeholder="last name"
                                            onChange={this.handleInputChange}
                                            name="SUlastName"
                                        />

                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email Address</label>
                                        <input type="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="johndoe@sample.com"
                                            onChange={this.handleInputChange}
                                            name="SUemail" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="At least 6 characters"
                                            onChange={this.handleInputChange}
                                            name="SUpassword"
                                        />
                                    </div>
                                    <button type="submit" onClick={this.clickSignUp} className="btn btn-primary">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* New password modal */}
                <div className="modal fade" id="newpassword" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                {/* <h5 className="modal-title" id="exampleModalLongTitle">Register</h5> */}
                                <form className="loginModalForm">
                                    <div className="form-group">
                                        <label for="formGroupExampleInput">Email</label>
                                        <input type="text"
                                            className="form-control"
                                            id="formGroupExampleInput"
                                            // placeholder="first name"
                                            onChange={this.handleInputChange}
                                            name="newPasswordEmail"
                                        />
                                    </div>
                                    <button type="submit" onClick={this.newPassword} className="btn btn-primary">Get New Password</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default withRouter(Login);

