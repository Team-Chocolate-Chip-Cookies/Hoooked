import React from "react";
import "./ApiDataMusic.css";


const ApiDataMusic = (props) => (
    <div>
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
