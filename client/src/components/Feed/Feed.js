import React from "react";
import "./Feed.css";


const Feed = (props) => (
    <div className="container">


        <div class="card scrolling">
       
        {props.children}
        </div>




    </div>
);

export default Feed;