import React from "react";
import "./ApiDataTV.css";


const ApiDataTV = (props) => (
    <div className="card-body">
        <p>Title: {props.name}</p>
        <p>Summary: {props.overview}</p>
        <p>Popularity Score: {props.popularity}</p>
        <p>Release Date: {props.release_date}</p>
        <button className="btn btn-primary">Pick Me!</button>
        {/* onClick={() => props.clickDelete(props.id)} */}
                        
        <hr/>
    </div>
);

export default ApiDataTV;
