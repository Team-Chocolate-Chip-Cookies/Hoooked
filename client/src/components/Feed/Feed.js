import React from "react";
import "./Feed.css";


const Feed = (props) => (
    <div className="container">


        <div class="card scrolling">
        <div className="card-body" id="ctitle"> 
        <p className="card-title">The Feed</p>
        </div>
        {props.children}
        </div>




    </div>
);

export default Feed;