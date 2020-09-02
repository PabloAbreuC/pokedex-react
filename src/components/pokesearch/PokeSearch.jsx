import React, { useState } from "react";
import "./PokeSearch.css";

export default props => {
    // Hooks do componente
    const [pokeInput, setPokeInput] = useState("");

    // Recuperando a propriedade
    const { search } = props;

    return (
        <div className="search">
            <input
                placeholder="Search pokemon by name"
                className="search--pokename"
                type="text"
                onChange={e => setPokeInput(e.target.value)}
            />

            <button
                className="search--button"
                onClick={() => search(pokeInput)}
            >
                Search
            </button>
        </div>
    );
};
