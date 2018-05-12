
import React from "react";
import "./Login.css";
import logo from "./logoCrop2.png";

const Login = (props) => (
    <div>

        <div className="jumbotron text-center">
            <div className="container">
                <img src={logo} alt="Logo" />
                <p className="lead">Share the things you’re hooked on and get your friends hooked too!</p>
            </div>
        </div>

        <div className="container">
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <br/><br/>

            <p>register with Hoook here...</p>
            {/* <!-- Button trigger modal --> */}
                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#exampleModalLong">
                    Get Hoooked!
                </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h5 className="modal-title" id="exampleModalLongTitle">Register</h5> */}
                            <form>
                                <div className="form-group">
                                    <label for="formGroupExampleInput">First Name</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="first name"/>
                                </div>
                                <div className="form-group">
                                    <label for="formGroupExampleInput2">Last Name</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="last name"/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
                                    
export default Login;

