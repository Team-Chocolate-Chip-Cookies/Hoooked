import React from "react";
import "./ApiDataMovie.css";


const ApiDataMovie = (props) => (

    <div className={props.open ? "card-body section open" : "card-body section"} onClick={() => props.clickClassName(props.stateKey,props.id)}>
        <img src={props.image} className="img-fluid" alt="cover art" />
        <p>Title:  <span className="searchResultsText">{props.title}</span></p>
        <p>Summary: <span className="searchResultsText">{props.overview}</span></p>
        <p>Popularity Score: <span className="searchResultsText">{props.popularity}</span></p>
        <p>Release Date: <span className="searchResultsText">{props.release_date}</span></p>

      
        {/* onClick={() => props.clickDelete(props.id)} */}

        <hr/>
    </div>
);

export default ApiDataMovie;
