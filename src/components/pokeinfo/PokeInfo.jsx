import React, { useState } from "react";
import Modal from "react-modal";

// Evita warnings
Modal.setAppElement('#root')

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


export default props => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div>
            <Modal style={customStyles} isOpen={modalOpen}>
                <h1>Olá, mundo. Estou vivo!</h1>
                <button onClick={()=> setModalOpen(false)}>Fechar</button>
            </Modal>
            <button onClick={() => setModalOpen(true)}>abrir modal</button>
        </div>
    );
};
