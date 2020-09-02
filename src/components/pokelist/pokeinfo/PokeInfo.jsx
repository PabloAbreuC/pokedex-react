import React, { useState, useEffect } from "react";
import "./PokeInfo.css";
import Modal from "react-modal";
import Api from "../../../services/api";
import CloseIcon from "@material-ui/icons/Close";

export default (props) => {
  const { id, showInfo, callBackInfo } = props;
  const [info, setInfo] = useState([]);
  const [stats, setStats] = useState([]);
  const [abilities, setAbilities] = useState([]);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "50%",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#E5E5E5",
    },
  };

  useEffect(() => {
    const getInfo = async () => {
      const res = await Api.get(`/pokemon/${id}`);
      setInfo(res.data);
      setStats(res.data.stats);
      setAbilities(res.data.abilities);
    };
    getInfo();
  }, [info]);

  return (
    <div>
      <Modal
        style={customStyles}
        isOpen={showInfo}
        shouldCloseOnOverlayClick={false}
      >
        <div className="modal--info">
          <div className="modal--info--header">
            <CloseIcon
              className="close--button"
              onClick={() => callBackInfo()}
            />
          </div>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={`Foto do pokemon ${info.name}`}
          />
          <div className="modal--info--detail">
            <div className="detail--header">
              <div className="name">
                {info.name} #{id}
              </div>
            </div>

            <div className="detail--stats">
              {stats.map((t, key) => {
                return (
                  <div className="stat" key={key}>
                    {t.stat.name}: {t.base_stat}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
