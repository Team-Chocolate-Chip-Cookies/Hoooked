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
                to="/sethook"
                className={
                    window.location.pathname === "/sethook" ? "nav-link active" : "nav-link"
                  }
            >
                Sethook
            </Link>
        </nav>
    </div>
);

export default Navbar;
