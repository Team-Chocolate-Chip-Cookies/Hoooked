import React from "react";
import { Link } from "react-router-dom";
import "./SetHook.css";


const SetHook = (props) => (
    <div className="container">

        <div className="card">
            <div className="card-body">
                <p className="card-title">Hoooks</p>
                <Link
                to="/sethook/movie"
                className={
                    window.location.pathname === "/sethook/movie" ? "nav-link active" : "nav-link"
                }>
                <button type="button" className="btn btn-info setHookBtn">Movies</button>
                </Link>
                <Link
                to="/sethook/tv"
                className={
                    window.location.pathname === "/sethook/tv" ? "nav-link active" : "nav-link"
                }>
                <button type="button" className="btn btn-info setHookBtn">TV</button>
                </Link>
                <Link
                to="/sethook/music"
                className={
                    window.location.pathname === "/sethook/music" ? "nav-link active" : "nav-link"
                }>
                <button type="button" className="btn btn-info setHookBtn">Music</button>
                </Link>
                <Link
                to="/sethook/game"
                className={
                    window.location.pathname === "/sethook/game" ? "nav-link active" : "nav-link"
                }>
                <button type="button" className="btn btn-info setHookBtn">Games</button>
                </Link>
                <Link
                to="/sethook/book"
                className={
                    window.location.pathname === "/sethook/book" ? "nav-link active" : "nav-link"
                }>
                <button type="button" className="btn btn-info setHookBtn">Books</button>
                </Link>
            </div>
        </div>




    </div>
);

export default SetHook;
