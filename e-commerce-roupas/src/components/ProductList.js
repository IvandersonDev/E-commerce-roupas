import React from "react";
import ProductCard from "./ProductCard";
import "../css/ProductList.css";

function ProductList() {
  const products = Array.from({ length: 6 }, (_, index) => ({
    id: `product-${index + 1}`, // Garantindo keys únicas
    name: "Lorem Ipsum Dolor",
    price: `$${(index + 1) * 10}`,
    image: "https://via.placeholder.com/300x400",
  }));

  return (
    <div className="product-list">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="product-navigation">
        <button className="product-button">Anterior</button>
        <button className="product-button">Próximo</button>
      </div>
    </div>
  );
}

export default ProductList;
