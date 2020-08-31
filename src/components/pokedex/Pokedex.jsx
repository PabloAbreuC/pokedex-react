import React, { useState, useEffect } from "react";
import "./Pokedex.css";
import Api from "../../services/api";
import Logotipo from "../../assets/logopokemon.png";
import Search from "../search/Search";
import LoadingScreen from "../loading/Loading";
import MoveList from "../movelist/MoveList";
import PokeBox from "../PokeBox/PokeBox";

export default props => {
    // Hooks
    const [pokemonList, setPokemonList] = useState([]);
    const [offset, setOffset] = useState(0);

    // São executados assim que o componente é carregado
    useEffect(() => {
        const loadAll = async () => {
            const res = await Api.get(`/pokemon/?limit=8&offset=${offset}`);

            // Alterando o statehook
            setPokemonList(res.data.results);
        };
        loadAll();
    }, [offset]);

    const handleNext = async () => {
        setOffset(offset + 8);
        console.log(pokemonList);
    };

    const handlePrev = async () => {
        if (offset > 0) {
            setOffset(offset - 8);
        }
        console.log(pokemonList);
    };

    const handleSearch = async e => {
        const res = await Api.get(`/pokemon/${e.toLowerCase()}`);
        setPokemonList([
            {
                name: res.data.name,
                url: `https://pokeapi.co/v2/pokemon/${res.data.id}/`
            }
        ]);
    };

    return (
        <div>
            <div className="pokedex">
                <img src={Logotipo} alt="Logo da pokedex" />
                <Search search={handleSearch} />
            </div>

            <section className="lists">
                {pokemonList.map((pokemon, index) => (
                    <PokeBox
                        key={index}
                        name={pokemon.name}
                        url={pokemon.url}
                    />
                ))}
                <MoveList next={handleNext} prev={handlePrev} />
            </section>

            <footer>
                Made with ❤ by Pablo Abreu <br /> Todos os direitos reservados a
                Pokemon Company
            </footer>
        </div>
    );
};
