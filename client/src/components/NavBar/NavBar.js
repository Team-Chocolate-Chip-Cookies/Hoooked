import React from "react";
import "./NavBar.css";


const Navbar = (props) => (
    <div>

        <nav className="navbar navbar-light bg-light">
            <Link 
                 to="/"
                 className={
                    window.location.pathname === "/" ? "nav-link active" : "nav-link"
                  }
            >Home
            </Link>
            <Link onClick={() => props.populateSaved()}
                to="/saved"
                className={
                    window.location.pathname === "/saved" ? "nav-link active" : "nav-link"
                  }
            >
                Saved
            </Link>
        </nav>
    </div>
);

export default Navbar;
