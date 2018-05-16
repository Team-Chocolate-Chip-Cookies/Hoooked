import React from "react";

export const setHookApiSearchForm = props => (
    <Container>
        <Row>
            <Col size="md-12">
            <form>
                <Container>
                    <Row>
                        <Col size="xs-9 sm-10">
                          <Input
                            name="ApiSearch"
                            value={this.state.ApiSearch}
                            onChange={this.handleInputChange}
                            placeholder="What's your bait?"
                          />
                        </Col>
                    </Row>
                </Container>
            </form>
            </Col>
        </Row>
        <Row>
            <Col size="xs-4 sm-2">
              <Thumbnail src={props.img} />
            </Col>
            <Col size="xs-8 sm-9">
              <h3>{proprs.title}</h3>
              <p>Summary: {props.summary}</p>
              <a href={props.href}></a>
            </Col>
        </Row>
    </Container>
);