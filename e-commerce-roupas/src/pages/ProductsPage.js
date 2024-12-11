import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar"; 
import ProductList from "../components/ProductList"; 
import "../css/ProductsPage.css"; 

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5002/produtospage");
        
        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
        }
        
        // Verifica se a resposta é um JSON válido
        const data = await response.json();
        
        if (!Array.isArray(data)) {
          throw new Error("A resposta da API não é um array");
        }
        
        setProducts(data);
      } catch (err) {
        console.error("Erro ao buscar produtos:", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="products-page">
      <Navbar />
      <header className="page-header">
        <h1>Listagem de Roupas</h1>
      </header>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default ProductsPage;

