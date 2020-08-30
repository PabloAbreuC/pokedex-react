import React from "react";
import "./ListView.css";

export default props => {
    return props.pokemonlist.map((item, key) => {
        return (
            <div key={key} className="card--list--area">
                <div className="card ">
                    <div className="card--name">
                        {item.name} - {item.id}
                    </div>
                    <div className="card--img">
                        <img src={item.image} alt={`Foto do ${item.name}`} />
                    </div>
                    <div className="card--types--area">
                        {item.type.map((t, key) => {
                            return (
                                <div
                                    key={key}
                                    className={`card--type ${t.type.name}`}
                                >
                                    {t.type.name}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    });
};
