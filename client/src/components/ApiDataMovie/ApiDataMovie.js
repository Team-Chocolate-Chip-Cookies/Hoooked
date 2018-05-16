import React from "react";
import "./ApiDataMovie.css";


const ApiDataMovie = (props) => (

    <div className="">
        <p>Title:  <span className="searchResultsText">{props.title}</span></p>
        <p>Summary: <span className="searchResultsText">{props.overview}</span></p>
        <p>Popularity Score: <span className="searchResultsText">{props.popularity}</span></p>
        <p>Release Date: <span className="searchResultsText">{props.release_date}</span></p>

        <button className="btn btn-primary">Pick Me!</button>
        {/* onClick={() => props.clickDelete(props.id)} */}

        <hr/>
    </div>
);

export default ApiDataMovie;
