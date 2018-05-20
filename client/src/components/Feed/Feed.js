import React from "react";
import "./Feed.css";


const Feed = (props) => (
    <div className="container">


        <div className="card scrolling opac">
        <div className="card-body opac" id="ctitle"> 
        <p className="card-title opac">The Feed</p>
        </div>
        {props.children}
        </div>




    </div>
);

export default Feed;