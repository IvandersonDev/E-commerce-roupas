import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/api';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <header style={{ textAlign: 'center', padding: '2rem 0', background: '#ddd' }}>
        <h1>Listagem de Roupas</h1>
      </header>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
