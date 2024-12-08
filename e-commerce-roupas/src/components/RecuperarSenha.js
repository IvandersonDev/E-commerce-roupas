import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Menu from "../components/Menu";

function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleRecoverPassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
  
    try {
      const response = await fetch("http://localhost:3001/recover-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
  
      if (response.ok) {
        const data = await response.json();
        setMessage(`Token gerado com sucesso! Verifique o arquivo ${email}.json.`);
        return;
      }
      
      const data = await response.json();
      setError(data.error || "Erro ao processar a recuperação de senha.");
    } catch (err) {
      setError("Erro ao conectar ao servidor.");
    }
  };
  

  return (
    <div style={{ fontFamily: "Arial, sans-serif", position: "relative" }}>
      <Helmet>
        <title>Recuperar Senha - Pabna</title>
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
      {(message || error) && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            backgroundColor: message ? "#d4edda" : "#f8d7da",
            color: message ? "#155724" : "#721c24",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            zIndex: 1000,
          }}
        >
          <button
            onClick={() => {
              setMessage("");
              setError("");
            }}
            style={{
              position: "absolute",
              top: "5px",
              right: "10px",
              background: "none",
              border: "none",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              color: message ? "#155724" : "#721c24",
            }}
          >
            &times;
          </button>
          {message || error}
        </div>
      )}

      <main style={{ textAlign: "center", marginTop: "50px" }}>
        <div
          style={{
            backgroundColor: "#dcdcdc",
            padding: "20px",
            margin: "0 auto",
            maxWidth: "800px",
          }}
        >
          <h1 style={{ fontSize: "72px", margin: "0", color: "#333" }}>1920x453</h1>
          <h2 style={{ fontSize: "24px", margin: "10px 0", color: "#333" }}>RECUPERAR SENHA</h2>
        </div>

        <section
          style={{
            marginTop: "20px",
            backgroundColor: "#f9f9f9",
            padding: "30px",
            maxWidth: "400px",
            margin: "30px auto",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ marginBottom: "20px", fontWeight: "normal" }}>
            Insira o seu e-mail válido para receber um token de acesso
          </h3>
          <form onSubmit={handleRecoverPassword}>
            <input
              type="email"
              placeholder="Insira o E-mail"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#333",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              RECEBER CÓDIGO
            </button>
          </form>
        </section>
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

export default RecuperarSenha;
