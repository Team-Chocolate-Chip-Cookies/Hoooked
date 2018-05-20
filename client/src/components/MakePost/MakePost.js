import React from "react";
import "./MakePost.css";

const MakePost = (props) => (
    <div className="opac">
            <br></br>

            <input className="form-control center posts" type="text" name="title"  onChange={props.handleInputChange} value={props.valueTitle} placeholder="Title"/>
            <br></br>
             
            <textarea className="form-control center posts" name="body"  onChange={props.handleInputChange}  value={props.valueBody} placeholder="Comments"/>

            <br></br>
            <button className="btn btn-lg btn-primary btn-outline-secondary" onClick={() => props.clickPost()}>Post</button>
        <hr></hr>
        
    </div>
);

export default MakePost;