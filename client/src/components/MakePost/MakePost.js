import React from "react";
import "./MakePost.css";

const MakePost = (props) => (
    <div>
            <br></br>
            <input type="text" name="title"  onChange={props.handleInputChange} placeholder="Title"/>
            <br></br>
            <br></br>  
            <textarea name="body"  onChange={props.handleInputChange} placeholder="Body"/>
            <br></br>
            <button onClick={() => props.clickPost()}>Post</button>
        <hr></hr>
        
    </div>
);

export default MakePost;