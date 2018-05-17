import React from "react";
import "./ApiDataGame.css";


const ApiDataGame = (props) => (
    <div className={props.open ? "card-body section open" : "card-body section"} onClick={() => props.clickClassName(props.stateKey,props.id)}>
        <p>Name: {props.name}</p>
        <img src={props.cover} className="img-fluid" alt="cover art" />
        <p>Rating: {props.rating}</p>
       
        {/* onClick={() => props.clickDelete(props.id)} */}

        <hr/>
    </div>
);

export default ApiDataGame;


// COVER