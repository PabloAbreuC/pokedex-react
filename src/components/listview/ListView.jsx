import React from "react";
import "./ListView.css";

export default props => {
    return (
        <div className="card--list--area">
            <div className="card ">
                <div className="card--name">{props.pokename} </div>
                <div className="card--img">
                    <img src={props.pokeimg} alt="" />
                </div>
                <div className="card--id">#{props.pokeid}</div>
            </div>
        </div>
    );
};
