import React from "react";
import { Link } from "react-router-dom";
import "./SetHook.css";


const SetHook = (props) => (
    

        // <div className="card">
        //     <div className="card-body">
            <div>
                <span className="card-title">Set Hoooks</span>
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <Link
                to="/sethook/movie"
                className={
                    window.location.pathname === "/sethook/movie" ? "nav-link active" : "nav-link"
                }>
                <button type="button" className="btn btn-primary setHookBtn">Movies</button>
                </Link>
                <Link

                to="/sethook/tv"
                className={
                    window.location.pathname === "/sethook/tv" ? "nav-link active" : "nav-link"
                }>
                <button type="button" className="btn btn-primary setHookBtn">TV</button>
                </Link>
                <Link
                to="/sethook/music"
                className={
                    window.location.pathname === "/sethook/music" ? "nav-link active" : "nav-link"
                }>
                <button type="button" className="btn btn-primary setHookBtn">Music</button>
                </Link>
                <Link
                to="/sethook/game"
                className={
                    window.location.pathname === "/sethook/game" ? "nav-link active" : "nav-link"
                }>
                <button type="button" className="btn btn-primary setHookBtn">Games</button>
                </Link>
                <Link
                to="/sethook/book"
                className={
                    window.location.pathname === "/sethook/book" ? "nav-link active" : "nav-link"
                }>
                <button type="button" className="btn btn-primary setHookBtn">Books</button>
                </Link>
                </div>
            </div>
        //  </div>
        //  </div>




    
);

export default SetHook;
