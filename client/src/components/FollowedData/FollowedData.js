import React from "react";
import "./FollowedData.css";


const FollowedData = (props) => (

    <div className="card-body">
        <p>{props.name}</p>
        <button 
        className="btn btn-primary"
        onClick={() => props.clickFollow(props.id)}>
        Follow
        </button>
        <button className="btn btn-primary">Unfollow</button>
        

        <hr />
    </div>


);

export default FollowedData;
