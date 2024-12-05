import React from 'react';

const Button = ({ type, children }) => {
  return (
    <button
      type={type}
      style={{
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
