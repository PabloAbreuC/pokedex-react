import React from "react";
import "./Search.css";

export default props => {
    return (
        <div className="search">
            <input
                placeholder="Search pokemon by name"
                className="search--pokename"
                type=""
            />
            <button className="search--button" href="">
                Search
            </button>
        </div>
    );
};
