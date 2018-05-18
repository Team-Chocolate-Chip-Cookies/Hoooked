import React, { Component } from "react";
import API from "../../utils/API";
import { withRouter } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";

class Login extends Component {
    state = {
        token:"",
        password:""

    };
    componentDidMount() {

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
    resetPassword=event=>{
        event.preventDefault()
        console.log(this.state.token)
        console.log(this.state.password)

        API.resetPassword(this.state.token,this.state.password)
        .then(
            (data) => {
                this.props.history.push("/")
            })
    }
    render() {
        return (
            <Container>
            <Row>
                {/* <Col> */}
               Token <input type="text" name="token" onChange={this.handleInputChange}/>
                New Password <input type="text" name="password" onChange={this.handleInputChange}/>
                <br></br>
                <button className="btn btn-primary" onClick={this.resetPassword} >New Password</button>
                {/* </Col> */}
                </Row>
            </Container>
        )
    }
}

export default withRouter(Login);