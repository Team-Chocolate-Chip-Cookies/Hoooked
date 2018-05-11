import React from "react";
import "./ScrollbarContainer.css";
import container, { Container } from "../Grid/Container";

const ScrollbarContainer = () => (

<div>
    <Container>
<div className="scrollbar scrollbar-primary">
    <div className="force-overflow">
        <p>Title</p>
        <p>Summary: </p>
        <p>Image </p> 
    </div>
 </div>
    </Container>
</div>

)

export default ScrollbarContainer;


            