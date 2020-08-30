import React, { useState, useEffect } from "react";
import "./ListView.css";
export default props => {
    const [toShow, setToShow] = useState([]);
    const [offSet, setOffSet] = useState(8)

    useEffect(() => {
        // Setando os elementos que serão mostrados, neste caso vão de zero até 8
        console.log(props.pokemonlist)
    }, [offSet]);

    const colors_types = {
        normal: "#BEBEAF",
        poison: "#AA5DA2",
        psychic: "#FA66B4",
        grass: "#8CD751",
        ground: "#EDCC56",
        ice: "#96F1FF",
        fire: "#FA5643",
        rock: "#CDBC71",
        dragon: "#8975FF",
        water: "#56AEFF",
        bug: "#C2D21F",
        dark: "#8E6956",
        fighting: "#A85643",
        ghost: "#7A75D7",
        steel: "#C4C2D9",
        flying: "#7BA3FF",
        eletric: "#FDE53C",
        fairy: "#F9ADFF"
    };
    return toShow.map((item, key) => {
        return (
            <div>
                <div key={key} className="card--list--area">
                    <div className="card ">
                        <div className="card--name">
                            {item.name} - {item.id}
                        </div>
                        <div className="card--img">
                            <img
                                src={item.image}
                                alt={`Foto do ${item.name}`}
                            />
                        </div>
                        <div className="card--types--area">
                            {item.type.map((t, key) => {
                                return (
                                    <div
                                        key={key}
                                        className="card--type"
                                        style={{
                                            backgroundColor:
                                                colors_types[t.type.name]
                                        }}
                                    >
                                        {t.type.name}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};
