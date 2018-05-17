import React from "react";
import "./ApiPostData.css";


const ApiDataGame = (props) => (
    <div className="card-body">
        <p>User: {props.user}</p>
        <p>Post: {props.postBody}</p>
        {/* onClick={() => props.clickDelete(props.id)} */}

        <hr/>
    </div>
);

export default ApiDataGame;


// COVER