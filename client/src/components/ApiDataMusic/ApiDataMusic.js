import React from "react";
import "./ApiDataMusic.css";


const ApiDataMusic = (props) => (
    <div className={props.open ? "card-body section open" : "card-body section"} onClick={() => props.clickClassName(props.stateKey,props.id)}>
        <p>{props.tracks}</p>
        <p>{props.artists}</p>
        <p>{props.link}</p>
        <p>{props.album}</p>
        <p>{props.image}</p>

        <button className="btn btn-primary">Pick Me!</button>
        {/* onClick={() => props.clickDelete(props.id)} */}
    </div>
);

export default ApiDataMusic;
