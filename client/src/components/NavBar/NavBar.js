import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../images/logo2.png";
import peopleLogo from "../../images/peopleIcon.png"
import logoutLogo from "../../images/logout.png"
import SetHook from "../../components/SetHook";


const Navbar = (props) => (
    <div>

        <nav className="navbar navbar-light bg-light">
            <Link 
                 to="/dashboard"
                 className={
                    window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}>
                    <img id="logo" src = {logo} alt = "logo" id = "navlogo"/>
            </Link>
            <div>
            <SetHook />
            </div>
            <div>
            
            </div>
            {/* <div 
                // to="/score"
                // className={
                //     window.location.pathname === "/score" ? "nav-link active" : "nav-link"
                //   }
            >
                Score :00
            </div> */}
            <div>
            
            </div>
            <Link 
                to="/followers"
                className={
                    window.location.pathname === "/followers" ? "nav-link active" : "nav-link"}>
                <img id="peoplelogo" src = {peopleLogo} alt = "Link to Followers Page" id = "peoplelogo"/>
            </Link>
            
            <Link
            to="/"
            className={
            window.location.pathname === "/followers" ? "nav-link active" : "nav-link"}>
                <img id="logoutLogo" src = {logoutLogo} alt = "logo" id = "logoutlogo"/>
            
            </Link>
        </nav>
    </div>
);

export default Navbar;
