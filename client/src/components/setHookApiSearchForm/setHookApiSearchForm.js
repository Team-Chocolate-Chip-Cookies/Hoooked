import React from "react";
import "./setHookApiSearchForm.css";
import Input from "../Input";
import Button from "../Button";
// import ScrollbarContainer from "../ScrollbarContainer";
import Row from "../Grid/Row";
import Col from "../Grid/Col";
import container, { Container } from "../Grid/Container";


export const SearchForm = props => (

    <div>
        <div className="card">
            <div className="card-body">
                <Container>
                    <Row>
                        <Col size="md-8">
                            <Input
                                placeholder={props.placeholder}
                                type="text"
                                name="search"
                                // value={this.state.search}
                                onChange={props.handleInputChange}
                            />
                        </Col>
                        <Col size="md-4">
                            <Button
                                input type="button" value="Search" id="searchButton" onClick={() => props.clickSearch(props.id)} 
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

export default SearchForm;