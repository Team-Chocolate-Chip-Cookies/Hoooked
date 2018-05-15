import React from "react";
import "./ApiDataMusic.css";


const ApiDataMusic = (props) => (
    <div className="card-body">
        <p>{props.title}</p>
        <p>{props.description}</p>
        <button className="btn btn-primary">Pick Me!</button>
        {/* onClick={() => props.clickDelete(props.id)} */}
                
        <hr/>
    </div>
);

export default ApiDataMusic;
