import React from "react";
import "./ApiDataGame.css";


const ApiDataGame = (props) => (
    <div className="">
        <p>Name: {props.name}</p>
        <img src={props.cover} className="img-fluid" alt="cover art" />
        <p>Rating: {props.rating}</p>
        <button className="btn btn-primary">Pick Me!</button>
        {/* onClick={() => props.clickDelete(props.id)} */}
    </div>
);

export default ApiDataGame;


// COVER