import React from "react";
import "./ApiDataBook.css";


const ApiDataBook = (props) => (
    
        <div className={props.open ? "card-body section open" : "card-body section"} onClick={() => props.clickClassName(props.stateKey,props.id)}>
            <img src={props.image} className="img-fluid" alt="cover art" />
            <h3><a href={props.link} target="_blank">{props.title}</a></h3>
            <p>Author(s): {props.authors}</p>
            <p>Published: {props.publishedDate}</p>
            <p>Description: {props.description}</p>
           
            {/* onClick={() => props.clickDelete(props.id)} */}
        
            <hr/>
        </div>
    
    
);

export default ApiDataBook;
