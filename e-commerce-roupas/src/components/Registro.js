import React, { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { Helmet } from "react-helmet";
import Menu from "../components/Menu";


function Registro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
  
    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        setMessage("Usuário registrado com sucesso!");
        setEmail("");
        setPassword("");
        return;
      }
      
      const data = await response.json();
      setMessage(data.error || "Erro ao registrar usuário.");
    } catch (err) {
      setMessage("Erro ao conectar ao servidor.");
    }
  };
  

  return (
    <div style={{ fontFamily: "Arial, sans-serif", position: "relative" }}>
      <Helmet>
        <title>Registro - Pabna</title>
      </Helmet>
      <header
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      <Menu />
      </header>

      {/* Mensagem de resposta como pop-up */}
      {message && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            backgroundColor: message.includes("sucesso") ? "#d4edda" : "#f8d7da",
            color: message.includes("sucesso") ? "#155724" : "#721c24",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            zIndex: 1000,
          }}
        >
          <button
            onClick={() => setMessage("")}
            style={{
              position: "absolute",
              top: "5px",
              right: "10px",
              background: "none",
              border: "none",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              color: message.includes("sucesso") ? "#155724" : "#721c24",
            }}
          >
            &times;
          </button>
          {message}
        </div>
      )}

      {/* Banner */}
      <main
        style={{
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#dcdcdc",
            padding: "20px",
            margin: "0 auto",
            maxWidth: "800px",
          }}
        >
          <h1 style={{ fontSize: "72px", margin: "0", color: "#333" }}>1920x453</h1>
          <h2 style={{ fontSize: "24px", margin: "10px 0", color: "#333" }}>NOVO USUÁRIO</h2>
        </div>

        {/* Formulário de Registro */}
        <div
          style={{
            marginTop: "30px",
            backgroundColor: "#f9f9f9",
            padding: "30px",
            maxWidth: "400px",
            margin: "30px auto",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ marginBottom: "20px" }}>CRIAR UMA NOVA CONTA</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Insira o E-mail"
              style={inputStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Insira sua senha"
              style={inputStyle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              style={buttonStyle}
            >
              REGISTRAR-SE
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  margin: "0 15px",
  fontSize: "14px",
  fontWeight: "bold",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontSize: "14px",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#333",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  fontSize: "16px",
  cursor: "pointer",
};

export default Registro;