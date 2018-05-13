import React, { Component } from "react";
import "./SearchBar.css";

export const SearchBar = props => (
    <div>
        Search<br />
        <input
            type="text"
            name="search"
            // value={this.state.search}
            onChange={props.handleInputChange}
        />
        <input type="button" value="Search" id="searchButton" onClick={() => props.clickSearch(props.id)} />
    </div>
)


export default SearchBar;