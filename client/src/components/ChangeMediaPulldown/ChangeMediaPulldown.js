import React from "react";
import { Link } from "react-router-dom";
import "./ChangeMediaPulldown.css";

import SetHook from "../../pages/SetHook"


const ChangeMediaPulldown = (props) => (
    
<div className="btn-group text-center">
  <button type="button" className="btn btn-primary btn-sm dropdown-toggle" id="changeMediaButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose Another Media Type
  </button>

  <div className="dropdown-menu">
  {/* <a className="dropdown-item"> */}
    <Link className="dropdown-item"
    to="/sethook/music"
    classname={
      window.location.pathname === "/sethook/music" ? "nav-link active" : "nav-link"
    }
    >
    Music
    </Link>
    {/* </a> */}
    <Link className="dropdown-item"
    to="/sethook/movie"
    classname={
      window.location.pathname === "/sethook/movie" ? "nav-link active" : "nav-link"
    }
    >
    Movies
    </Link>
    <Link className="dropdown-item"
    to="/sethook/game"
    classname={
      window.location.pathname === "/sethook/game" ? "nav-link active" : "nav-link"
    }
    >
    Games
    </Link>
    <Link className="dropdown-item"
    to="/sethook/book"
    classname={
      window.location.pathname === "/sethook/book" ? "nav-link active" : "nav-link"
    }
    >
    Books
    </Link>
    <Link className="dropdown-item"
    to="/sethook/tv"
    classname={
      window.location.pathname === "/sethook/tv" ? "nav-link active" : "nav-link"
    }
    >
    TV
    </Link>
    {/* <a className="dropdown-item" href="/sethook/movie">Movies</a>
    <a className="dropdown-item" href="/sethook/tv">TV</a>
    <a className="dropdown-item" href="/sethook/game">Games</a>
    <a className="dropdown-item" href="/sethook/book">Books</a>
    <a className="dropdown-item" href="/sethook/music">Music</a> */}

  </div>

</div>

        
);

export default ChangeMediaPulldown;
