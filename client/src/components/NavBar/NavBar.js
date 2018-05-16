import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";


const Navbar = (props) => (
    <div>

        <nav className="navbar navbar-light bg-light">
            <Link 
                 to="/"
                 className={
                    window.location.pathname === "/" ? "nav-link active" : "nav-link"
                  }
            >Dashboard
            </Link>
            <Link 
                to="/followers"
                className={
                    window.location.pathname === "/followers" ? "nav-link active" : "nav-link"
                  }
            >
                Followers
            </Link>
            <Link 
                to="/sethook/tv"
                className={
                    window.location.pathname === "/sethook/tv" ? "nav-link active" : "nav-link"
                  }
            >
                Sethook-tv
            </Link>
            <Link 
                to="/sethook/movie"
                className={
                    window.location.pathname === "/sethook/movie" ? "nav-link active" : "nav-link"
                  }
            >
                Sethook-movie
            </Link>
            <Link 
                to="/sethook/game"
                className={
                    window.location.pathname === "/sethook/game" ? "nav-link active" : "nav-link"
                  }
            >
                Sethook-game
            </Link>
            <Link 
                to="/sethook/book"
                className={
                    window.location.pathname === "/sethook/book" ? "nav-link active" : "nav-link"
                  }
            >
                Sethook-book
            </Link>
            <Link 
                to="/sethook/music"
                className={
                    window.location.pathname === "/sethook/music" ? "nav-link active" : "nav-link"
                  }
            >
                Sethook-music
            </Link>
        </nav>
    </div>
);

export default Navbar;
