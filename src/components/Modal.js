import React from "react";

const Modal = ({ setOpenModal }) => {
  return (
    <div className="absolute top flex flex-row justify-center h-screen w-screen pt-20">
      <div className="z-20 bg-white p-10 max-w-4xl w-full max-h-40">OK</div>
      <div
        onClick={() => setOpenModal(false)}
        className="z-10 absolute inset-0 modal-close h-full w-full"
      />
    </div>
  );
};

export default Modal;
