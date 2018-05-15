import React from "react";
import "./ApiDataGame.css";


const ApiDataGame = (props) => (
    <div className="card-body">
        <p>Name: {props.name}</p>
        <img src={props.cover} className="img-fluid" alt="cover art" />
        <p>Rating: {props.rating}</p>
        <button className="btn btn-primary">Pick Me!</button>
        {/* onClick={() => props.clickDelete(props.id)} */}

        <hr/>
    </div>
);

export default ApiDataGame;


// COVER