import React from "react";
import "./ApiDataBook.css";


const ApiDataBook = (props) => (
    <div className="">
        <img src={props.image} className="img-fluid" alt="cover art" />
        <h3><a href={props.link} target="_blank">{props.title}</a></h3>
        <p>Author(s): {props.authors}</p>
        <p>Published: {props.publishedDate}</p>
        <p>Description: {props.description}</p>
        <button className="btn btn-primary">Pick Me!</button>
        {/* onClick={() => props.clickDelete(props.id)} */}
    </div>
);

export default ApiDataBook;
