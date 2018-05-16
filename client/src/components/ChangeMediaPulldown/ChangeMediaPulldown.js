import React from "react";
import { Link } from "react-router-dom";
import "./ChangeMediaPulldown.css";


const ChangeMediaPulldown = (props) => (
    
<div className="btn-group text-center">
  <button type="button" className="btn btn-primary btn-sm dropdown-toggle" id="changeMediaButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose Another Media Type
  </button>
  <div className="dropdown-menu">
    <a className="dropdown-item" href="/sethook/movie">Movies</a>
    <a className="dropdown-item" href="/sethook/tv">TV</a>
    <a className="dropdown-item" href="/sethook/game">Games</a>
    <a className="dropdown-item" href="/sethook/book">Books</a>
    <a className="dropdown-item" href="/sethook/music">Music</a>
   
  </div>
</div>

        
);

export default ChangeMediaPulldown;
