import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("savedEmail");
    const savedPassword = localStorage.getItem("savedPassword");
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", { email, password });
      setMessage(response.data.message);

      if (rememberMe) {
        localStorage.setItem("savedEmail", email);
        localStorage.setItem("savedPassword", password);
      } else {
        localStorage.removeItem("savedEmail");
        localStorage.removeItem("savedPassword");
      }

      if (response.data.success) {
        navigate("/home");
      }
    } catch (error) {
      setMessage(error.response?.data?.error || "Erro ao efetuar login");
    }
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
    if (!e.target.checked) {
      localStorage.removeItem("savedEmail");
      localStorage.removeItem("savedPassword");
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", position: "relative" }}>
      <Helmet>
        <title>Login - Pabna</title>
      </Helmet>
      {/* Cabeçalho */}
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
          <h2 style={{ fontSize: "24px", margin: "10px 0", color: "#333" }}>LOGIN</h2>
        </div>

        {/* Formulário de Login */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
            gap: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "30px",
              maxWidth: "400px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ marginBottom: "20px" }}>LOGIN</h3>
            <p style={{ marginBottom: "20px" }}>Olá, bem-vindo à sua conta</p>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Endereço de e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                required
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
                required
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                    style={{ marginRight: "5px" }}
                  />
                  Lembre de mim
                </label>
                <button
                  type="button"
                  onClick={() => navigate("/recuperar-senha")}
                  style={{
                    fontSize: "12px",
                    color: "#333",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "0",
                  }}
                >
                  Esqueceu sua senha?
                </button>
              </div>
              <button type="submit" style={buttonStyle}>LOGIN</button>
            </form>

            {/* Botão Sign Up */}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button
                type="button"
                onClick={() => navigate("/registro")}
                style={buttonStyle}
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

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

export default Login;
