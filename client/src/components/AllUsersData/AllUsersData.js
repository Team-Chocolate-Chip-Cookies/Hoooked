import React from "react";
import "./AllUsersData.css";
import { Col, Row, Container } from "../../components/Grid";

const AllUsersData = (props) => (

    <div>
        <div className="card">
            <div className="card-body">
                <Row>
                    <Col size="md-3">
                        <i class="fas fa-user fa-3x"></i>
                    </Col>
                    <Col size="md-3">
                        <p>{props.name}</p>
                    </Col>
                    <Col size="md-3">
                        <button
                            className="btn btn-primary"
                            onClick={() => props.clickFollow(props.id)}>
                            Follow  <i class="far fa-thumbs-up"></i>
                        </button>
                    </Col>
                    <Col size="md-3">
                        <button 
                            className="btn btn-primary"
                            onClick={() => props.clickUNFollow(props.id)}>
                        Unfollow  <i class="far fa-thumbs-down"></i>
                        </button>
                    </Col>
                </Row>

            </div>
        </div>
    </div>

);

export default AllUsersData;
