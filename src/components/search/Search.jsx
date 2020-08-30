import React, { useState } from "react";
import "./Search.css";

export default props => {
    // Hooks do componente
    const [pokeInput, setPokeInput] = useState("");
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
                onClick={() => props.pokename(pokeInput)}
            >
                Search
            </button>
        </div>
    );
};
