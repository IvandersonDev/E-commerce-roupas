import React from "react";
import { Link } from "react-router-dom"; // Importação do Link para navegação

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Cabeçalho */}
      <header className="header">
        <div className="logo">Pabna</div>
        <nav className="menu">
          <Link to="/">Início</Link>
          <Link to="/registro">Registro</Link>
          <Link to="/cadastro-produto">Produtos</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </header>

      {/* Resto do conteúdo */}
      <div className="banner">
        <h1>Entre em contato</h1>
        <p>Início | Entre em Contato</p>
      </div>
    </div>
  );
};

export default Contact;
