import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={{ width: '480px', margin: '10px', textAlign: 'center', background: '#f0f0f0', padding: '1rem' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;
