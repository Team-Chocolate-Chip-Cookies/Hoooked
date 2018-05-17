import React from "react";
import "./FollowedData.css";
import UserContainer from "../../components/UserContainer";

import { Col, Row, Container } from "../../components/Grid";
//

const FollowedData = (props) => (


    <Container>
    <div className={props.open ? "section open" : "section"} onClick={() => props.clickClassName(props.stateKey,props.index)}>
            <div className="card">
                <div className="card-body">
                    <Row>
                    <Col size="md-3">
                    <i class="fas fa-user fa-3x"></i>
                    </Col>
                        <Col size="md-6">
                            <p>{props.name}</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </Container>

);

export default FollowedData;
