import React from "react";

function ProductList() {
  const products = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    name: "Lorem Ipsum Dolor",
    image: "https://via.placeholder.com/480x606"
  }));

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px"
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflow: "hidden"
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "auto" }}
            />
            <div style={{ backgroundColor: "#000", color: "#fff", padding: "10px" }}>
              {product.name}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        <button style={{
          padding: "10px 20px",
          marginRight: "10px",
          border: "none",
          backgroundColor: "#ddd",
          cursor: "pointer"
        }}>Anterior</button>
        <button style={{
          padding: "10px 20px",
          border: "none",
          backgroundColor: "#ddd",
          cursor: "pointer"
        }}>Próximo</button>
      </div>
    </div>
  );
}

export default ProductList;
