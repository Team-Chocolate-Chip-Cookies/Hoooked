import React from "react";
import "./ApiDataMusic.css";


const ApiDataMusic = (props) => (
    <div className={props.open ? "card-body section open" : "card-body section"} onClick={() => props.clickClassName(props.stateKey,props.id)}>
        <img src={props.image} className="img-fluid" alt="cover art" />
        <p><a href={props.link}>{props.tracks}</a></p>
        <p>Artist(s): {props.artists}</p>
        <p>Album: {props.album}</p>
        

       
        {/* onClick={() => props.clickDelete(props.id)} */}
    </div>
);

export default ApiDataMusic;
