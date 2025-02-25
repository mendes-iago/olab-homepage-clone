import React from "react";

const ModalSuccess = ({ onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
          minWidth: "300px",
        }}
      >
        <h2>Sucesso!</h2>
        <p>Você se inscreveu com sucesso.</p>
        <button
          onClick={onClose}
          style={{ padding: "10px 20px", marginTop: "10px" }}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ModalSuccess;
