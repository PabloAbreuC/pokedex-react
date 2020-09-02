import React, { useState, useEffect } from "react";
import "./PokeBox.css";
import Api from "../../../services/api.js";
import PokeInfo from "../pokeinfo/PokeInfo";

export default (props) => {
  const [pokeType, setPokeType] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const index = props.url.split("/")[props.url.split("/").length - 2];

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
    electric: "#FDE53C",
    fairy: "#F9ADFF",
  };

  const callBackInfo = () => {
    setShowInfo(false);
  };

  // Busca as informações sempre que o index é atualizado
  useEffect(() => {
    const getTypes = async () => {
      const res = await Api.get(`/pokemon/${index}`);
      setPokeType(res.data.types);
    };
    getTypes();
  }, [index]);

  // JSX do componente
  return (
    <div>
      <PokeInfo id={index} showInfo={showInfo} callBackInfo={callBackInfo} />
      <div className="card--list--area">
        <div className="card" onClick={() => setShowInfo(true)}>
          <div className="card--name">
            {props.name} - {index}
          </div>
          <div className="card--img">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
              alt={`Foto do ${props.name}`}
            />
          </div>
          <div className="card--types--area">
            {pokeType.map((t, key) => {
              return (
                <div
                  key={key}
                  className="card--type"
                  style={{
                    backgroundColor: colors_types[t.type.name],
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
};
