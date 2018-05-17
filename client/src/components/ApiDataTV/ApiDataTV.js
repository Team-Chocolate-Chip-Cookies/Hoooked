import React from "react";
import "./ApiDataTV.css";


const ApiDataTV = (props) => (
    <div className={props.open ? "card-body section open" : "card-body section"} onClick={() => props.clickClassName(props.stateKey,props.id)}>
    <img src={props.image} className="img-fluid" alt="cover art" />
        <p>Title: {props.name}</p>
        <p>Summary: {props.overview}</p>
        <p>Popularity Score: {props.popularity}</p>
        
        {/* onClick={() => props.clickDelete(props.id)} */}
                        
        <hr/>
    </div>
);

export default ApiDataTV;
