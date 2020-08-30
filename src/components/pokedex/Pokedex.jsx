import React, { useState, useEffect } from "react";
import "./Pokedex.css";
import Api from "../../services/api";
import Logotipo from "../../assets/logopokemon.png";
import Search from "../search/Search";
import LoadingScreen from "../loading/Loading";
import ListView from "../listview/ListView";

export default props => {
    // Hooks
    const [pokemonList, setPokemonList] = useState([]);

    // São executados assim que o componente é carregado
    useEffect(() => {
        const loadAll = async size => {
            // Array que irá connter os pokemons
            let arrayPokemons = [];

            // Recuperando os pokemons com axios via get
            let res = await Api.get(`/pokemon?limit=${size}`);

            // Fazendo novas requisições e salvando os dados em um array
            for (var i = 1; i < size + 1; i++) {
                await Api.get(`/pokemon/${i}`).then(resp => {
                    arrayPokemons.push({
                        id: resp.data.id,
                        name: resp.data.name,
                        image: resp.data.sprites.front_default,
                        type: resp.data.types
                    });
                });
            }

            // Alterando o statehook
            setPokemonList(arrayPokemons);
        };
        loadAll(150);
    }, []);

    console.log(pokemonList);

    return (
        <div>
            <div className="pokedex">
                <img src={Logotipo} alt="Logo da pokedex" />
                <Search />
            </div>

            <section className="lists">
                <ListView pokemonlist={pokemonList} />
            </section>

            <footer>
                Made with ❤ by Pablo Abreu Todos os direitos reservados a
                Pokemon Company
            </footer>
        </div>
    );
};
