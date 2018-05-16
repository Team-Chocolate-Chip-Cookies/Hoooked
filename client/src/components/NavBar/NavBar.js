import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../images/logo2.png";


const Navbar = (props) => (
    <div>

        <nav className="navbar navbar-light bg-light">
            <Link 
                 to="/dashboard"
                 className={
                    window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}>
                    <img id="logo" src = {logo} alt = "logo" id = "navlogo"/>
            </Link>
            <Link 
                to="/followers"
                className={
                    window.location.pathname === "/followers" ? "nav-link active" : "nav-link"
                  }
            >
                Followers
            </Link>
            <div 
                // to="/score"
                // className={
                //     window.location.pathname === "/score" ? "nav-link active" : "nav-link"
                //   }
            >
                Score :00
            </div>
        
            <div
                // to="/Logoout"
                // className={
                //     window.location.pathname === "/logout" ? "nav-link active" : "nav-link"
                //   }
            >
                Logout
            </div>
            
        </nav>
    </div>
);

export default Navbar;
