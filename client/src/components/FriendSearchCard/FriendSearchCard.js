import React from "react";
import "./FriendSearchCard.css";
import Input from "../Input";
import Button from "../Button";
// import ScrollbarContainer from "../ScrollbarContainer";
import Row from "../Grid/Row";
import Col from "../Grid/Col";
import container, { Container } from "../Grid/Container";

export const SearchCard = () => (

    <div>
        <div className="card">
            <div className="card-body">
                <Container>
                    <Row>
                        <Col size="md-8">
                            <Input
                                placeholder="Friend's Name"
                            />
                        </Col>
                        <Col size="md-4">
                            <Button
                                input type="outline-secondary"
                                id="searchBtn"
                                onClick={this.boop}
                            >
                              Search
                            </Button>
                        </Col>
                    </Row>
                 
                </Container>
            </div>
        </div>
    </div>
);

export default SearchCard;