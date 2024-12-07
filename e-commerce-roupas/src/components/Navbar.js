import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ background: '#333', color: '#fff', padding: '1rem' }}>
      <h1 style={{ display: 'inline', margin: '0 1rem' }}>Pabna</h1>
      <ul style={{ display: 'inline', listStyle: 'none' }}>
        <li style={{ display: 'inline', margin: '0 1rem' }}>Início</li>
        <li style={{ display: 'inline', margin: '0 1rem' }}>Fornecedores</li>
        <li style={{ display: 'inline', margin: '0 1rem' }}>Loja</li>
        <li style={{ display: 'inline', margin: '0 1rem' }}>Suporte</li>
      </ul>
    </nav>
  );
};

export default Navbar;
