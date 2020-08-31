import React, { useState, useEffect } from "react";
import Api from "../../services/api";
import Logotipo from "../../assets/logopokemon.png";
import LoadingScreen from "../loading/Loading";
import Search from "../search/Search";
import PokeBox from "../pokebox/PokeBox";
import MoveList from "../movelist/MoveList";
import PokeInfo from "../pokeinfo/PokeInfo";
import Modal from "react-modal";
import "./Pokedex.css";

export default props => {
    // Config do modal
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#ef5350",
            padding: "35px",
            backgroundColor: "#ef5350",
        }
    };

    // Hooks
    const [pokemonList, setPokemonList] = useState([]); // Lista que irá guardar os pokemons
    const [offset, setOffset] = useState(0); // A partir de qual pokemon eu quero pegar
    const [modalIsOpen, setModalOpen] = useState(false);

    // São executados assim que o componente é carregado
    useEffect(() => {
        const loadAll = async () => {
            const res = await Api.get(`/pokemon/?limit=8&offset=${offset}`);

            // Alterando o statehook
            setPokemonList(res.data.results);
        };

        loadAll();
    }, [offset]);

    // Altera o offset pegando os próximos 8 pokemons
    const handleNext = async () => {
        setOffset(offset + 8);
    };

    // Altera o offset pegando os 8 pokemons anteriores (desde que offset > 0 )
    const handlePrev = async () => {
        if (offset > 0) {
            setOffset(offset - 8);
        }
    };

    const handleSearch = async e => {
        try {
            const res = await Api.get(`/pokemon/${e.toLowerCase()}`);
            setPokemonList([
                {
                    name: res.data.name,
                    url: `https://pokeapi.co/v2/pokemon/${res.data.id}/`
                }
            ]);
        } catch {
            setModalOpen(true);
        }
    };

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div>
            <div className="pokedex">
                <img
                    onClick={reloadPage}
                    src={Logotipo}
                    alt="Logo da pokedex"
                />
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
            <PokeInfo />

            <Modal style={customStyles} isOpen={modalIsOpen}>
                <h2 className='modal--warning--text'>Pokemon not found</h2>
                <button className='modal--warning--button' onClick={() => setModalOpen(false)}>Back</button>
            </Modal>

            <footer>
                Made with ❤ by Pablo Thadeu Abreu <br /> Todos os direitos
                reservados a Pokemon Company
            </footer>
        </div>
    );
};
