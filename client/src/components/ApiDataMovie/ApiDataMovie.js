import React from "react";
import "./ApiDataMovie.css";


const ApiDataMovie = (props) => (
    <div>
        <p>{props.title}</p>
        <p>{props.description}</p>
        <button className="btn btn-primary">Pick Me!</button>
        {/* onClick={() => props.clickDelete(props.id)} */}
    </div>
);

export default ApiDataMovie;
