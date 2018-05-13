import React from "react";
import "./ScrollbarContainer.css";
import container, { Container } from "../Grid/Container";

const ScrollbarContainer = (props) => (

    <div>
        <Container>
            <div className="scrollbar scrollbar-primary">
                {props.children}
                {/* <div className="force-overflow">
                    <p>Title</p>
                    <p>Summary: </p>
                    <p>Image </p>

                </div> */}
            </div>
        </Container>
    </div>

)

export default ScrollbarContainer;


