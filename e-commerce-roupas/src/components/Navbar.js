import React from 'react';
import Menu from "../components/Menu";

const Navbar = () => {
  return (
    <nav style={{ background: '#333', color: '#fff', padding: '1rem' }}>
      <Menu />
    </nav>
  );
};

export default Navbar;
