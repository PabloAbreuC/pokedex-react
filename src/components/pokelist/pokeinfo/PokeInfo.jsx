import React from "react";
import Modal from "react-modal";


export default (props) => {
  const { id, showInfo, callBackInfo } = props;

  return (
    <div>
      <Modal isOpen={showInfo} >
        <h1>Pokemon founded is {id}!</h1>
        <button onClick={() => callBackInfo()}>Close</button>
      </Modal>
    </div>
  );
};
