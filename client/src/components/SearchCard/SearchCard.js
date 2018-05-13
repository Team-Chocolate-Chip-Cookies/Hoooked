import React from "react";
import "./SearchCard.css";
import Input from "../Input";
import Button from "../Button";
import ScrollbarContainer from "../ScrollbarContainer";
import Row from "../Grid/Row";
import Col from "../Grid/Col";
import container, { Container } from "../Grid/Container";

export const SearchCard = () => (

    <div>
        <div className="card">
            <div className="card-body">
                <Container>
                    <Row>
                        <Col size="xs-8 sm-8">
                            <Input
                                placeholder="Bait the hook"
                            />
                        </Col>
                        <Col size="xs-6 sm-4">
                            <Button
                                onClick={this.boop}
                            >
                              search
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="xs-6 sm-6">
                            <ScrollbarContainer />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </div>
);

export default SearchCard;