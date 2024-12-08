import React from 'react';
import { FaShoppingBag, FaSearch, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={{ display: "flex", alignItems: "center", marginRight: "20px" }}>
        <FaShoppingBag style={{ fontSize: "24px", marginRight: "10px" }} />
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>Pabna</div>
      </div>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>INÍCIO</Link>
        <Link to="/loja" style={linkStyle}>LOJA</Link>
        <Link to="/roupas" style={linkStyle}>ROUPAS</Link>
        <FaSearch style={{ fontSize: "18px", marginLeft: "15px", cursor: "pointer" }} />
        <FaUserCircle style={{ fontSize: "24px", marginLeft: "15px", cursor: "pointer" }} />
      </nav>
    </header>
  );
};

const headerStyle = { backgroundColor: "#333", padding: "10px 20px", display: "flex", justifyContent: "center", alignItems: "center" };
const navStyle = { display: "flex", alignItems: "center" };
const linkStyle = { color: "#fff", textDecoration: "none", margin: "0 15px", fontSize: "14px", fontWeight: "bold" };

export default Header;
