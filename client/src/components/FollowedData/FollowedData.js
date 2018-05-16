import React from "react";
import "./FollowedData.css";
//

const FollowedData = (props) => (

    <div className={props.open ? "card-body section open" : "card-body section"} onClick={() => props.clickClassName(props.stateKey,props.index)}>
        <p>{props.name}</p>
    </div>


);

export default FollowedData;
