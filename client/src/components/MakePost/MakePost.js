import React from "react";
import "./MakePost.css";

const MakePost = (props) => (
    <div>
            <br></br>

            <input className="form-control center posts" type="text" name="title"  onChange={props.handleInputChange} placeholder="Title"/>
            <br></br>
             
            <textarea className="form-control center posts" name="body"  onChange={props.handleInputChange} placeholder="Comments"/>

            <br></br>
            <button className="btn btn-lg btn-primary btn-outline-secondary" onClick={() => props.clickPost()}>Post</button>
        <hr></hr>
        
    </div>
);

export default MakePost;