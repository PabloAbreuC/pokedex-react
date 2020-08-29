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
        const loadAll = async () => {
            // Recuperando os pokemons com axios via get
            let res = await Api.get(`/pokemon?limit=150`);

            // Percorrendo o resultado com map e salva os dados escolhidos em uma variável
            const allPokemons = res.data.results.map((item, index) => ({
                name: item.name,
                id: index + 1,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    index + 1
                }.png`
            }));

            setPokemonList(allPokemons);
        };
        loadAll();
    }, []);

    // Pesquisa pokemon por nome
    const searchByName = async name => {
        let res = await Api.get(`pokemon/${name}`);
        console.log(res.data);
    };

    return (
        <div>
            <div className="pokedex">
                <img src={Logotipo} alt="Logo da pokedex" />
                <Search />
            </div>

            <section className="lists">
                {pokemonList.map((item, key) => (
                    <ListView
                        key={key}
                        pokename={item.name}
                        pokeurl={`https://pokeapi.co/api/v2/pokemon/${item.id}`}
                        pokeimg={item.image}
                        pokeid={item.id}
                    />
                ))}
            </section>

            {pokemonList.length <= 0 && <LoadingScreen />}
            <footer>
                Made with ❤ by Pablo Abreu Todos os direitos reservados a
                Pokemon Company
            </footer>
        </div>
    );
};
