import React from "react";
import "./ApiDataMovie.css";


const ApiDataMovie = (props) => (

    <div className="">
        <p>Title: {props.title}</p>
        <p>Summary: {props.overview}</p>
        <p>Popularity Score: {props.popularity}</p>
        <p>Release Date: {props.release_date}</p>

        <button className="btn btn-primary">Pick Me!</button>
        {/* onClick={() => props.clickDelete(props.id)} */}

        <hr/>
    </div>
);

export default ApiDataMovie;
