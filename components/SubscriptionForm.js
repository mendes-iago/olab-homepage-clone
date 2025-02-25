// components/SubscriptionForm.js
import React, { useState } from "react";
import ModalSuccess from "./ModalSuccess";

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
    <div style={{ width: "100%", maxWidth: "400px" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", marginBottom: "10px", width: "100%" }}
        />
        {erro && <p style={{ color: "red" }}>{erro}</p>}
        <button type="submit" style={{ padding: "10px 20px" }}>
          Inscreva-se
        </button>
      </form>
      {isModalOpen && <ModalSuccess onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default SubscriptionForm;
