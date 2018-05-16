import React from "react";
import "./ApiDataTV.css";


const ApiDataTV = (props) => (
    <div>
        <p>{props.title}</p>
        <p>{props.description}</p>
        <button className="btn btn-primary">Pick Me!</button>
        {/* onClick={() => props.clickDelete(props.id)} */}
    </div>
);

export default ApiDataTV;
