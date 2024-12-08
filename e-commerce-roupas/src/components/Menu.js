import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaSearch, FaUserCircle } from 'react-icons/fa';
import '../css/Menu.css';

function Menu() {
  return (
    <header className="menu-header">
      <div className="menu-logo">
        <FaShoppingBag className="menu-icon" />
        <div className="menu-title">Pabna</div>
      </div>
      <nav className="menu-nav">
        <Link to="/" className="menu-link">INÍCIO</Link>
        <Link href="/SupplierList" className="menu-link">FORNECEDORES</Link> 
        <a href="#loja" className="menu-link">LOJA</a>
        <a href="#roupas" className="menu-link">ROUPAS</a>
        <Link to="/Contact" className="menu-link">CONTATO</Link>
        
        <FaSearch className="menu-search" />
        <FaUserCircle className="menu-user" />
      </nav>
    </header>
  );
}

export default Menu;
