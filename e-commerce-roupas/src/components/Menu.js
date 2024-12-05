import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUserCircle, FaShoppingBag } from "react-icons/fa"; // Adicionei a importação correta
import '../css/Menu.css';  // Ajuste o caminho de acordo com a estrutura do seu projeto

const Menu = () => {
  return (
    <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Logo com ícone */}
        <div style={{ display: "flex", alignItems: "center", marginRight: "20px" }}>
          <FaShoppingBag style={{ fontSize: "24px", marginRight: "10px" }} />
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>Pabna</div>
        </div>

        {/* Links do Menu */}
        <Link to="/" style={linkStyle}>INÍCIO</Link>
        <a href="#loja" style={linkStyle}>LOJA</a>
        <a href="#roupas" style={linkStyle}>ROUPAS</a>
      </div>

      {/* Ícones de Pesquisa e Usuário */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <FaSearch style={{ fontSize: "18px", marginLeft: "15px", cursor: "pointer" }} />
        <FaUserCircle style={{ fontSize: "24px", marginLeft: "15px", cursor: "pointer" }} />
      </div>
    </nav>
  );
};

const linkStyle = {
  textDecoration: "none",
  color: "#000",
  marginRight: "20px",
  fontSize: "18px",
};

export default Menu;
