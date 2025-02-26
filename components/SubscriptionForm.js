import React, { useState } from "react";
import ModalSuccess from "./ModalSuccess";
import { MdOutlineEmail } from "react-icons/md";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função que valida o formato do email usando expressão regular
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setErro("Por favor, insira um email válido.");
    } else {
      setErro("");
      // Aqui você pode adicionar a lógica para enviar os dados para uma API
      setIsModalOpen(true);
      setEmail(""); // Limpar o campo de input após a inscrição
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: "550px", margin: "0 auto" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          fontFamily: "Gotham",
        }}
      >
        <div style={{ position: "relative", width: "100%" }}>
          <div
            style={{
              position: "absolute",
              height: "100%",
              display: "flex",
              alignItems: "center",
              left: "16px",
              top: 0,
              pointerEvents: "none",
            }}
          >
            <MdOutlineEmail style={{ color: "#999", fontSize: "20px" }} />
          </div>
          <input
            type="email"
            placeholder="Seu email principal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "15px 20px 15px 50px",
              fontSize: "16px",
              fontFamily: "Gotham, sans-serif",
              fontWeight: 400,
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
              outline: "none",
              color: "#333",
              marginBottom: "15px",
              boxSizing: "border-box",
            }}
          />
        </div>
        {erro && <p style={{ color: "red", marginBottom: "10px" }}>{erro}</p>}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "15px 20px",
            fontSize: "16px",
            fontWeight: "500",
            backgroundColor: "#0080ff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0, 128, 255, 0.2)",
            transition: "background-color 0.3s ease",
            boxSizing: "border-box",
          }}
        >
          Inscrever-se (Grátis)
        </button>
      </form>
      {isModalOpen && <ModalSuccess onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default SubscriptionForm;
