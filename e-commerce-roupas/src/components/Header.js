import React from 'react';
import { FaShoppingBag, FaSearch, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../css/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <FaShoppingBag className="header-icon" />
        <span className="header-title">Pabna</span>
      </div>
      <nav className="header-nav">
        <Link to="/" className="header-link">Início</Link>
        <Link to="/loja" className="header-link">Loja</Link>
        <Link to="/roupas" className="header-link">Roupas</Link>
        <FaSearch className="header-action" aria-label="Buscar" />
        <FaUserCircle className="header-action" aria-label="Perfil" />
      </nav>
    </header>
  );
};

const headerStyle = { backgroundColor: "#333", padding: "10px 20px", display: "flex", justifyContent: "center", alignItems: "center" };
const navStyle = { display: "flex", alignItems: "center" };
const linkStyle = { color: "#fff", textDecoration: "none", margin: "0 15px", fontSize: "14px", fontWeight: "bold" };

export default Header;
