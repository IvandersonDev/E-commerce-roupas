import React from "react";
import "../css/SupplierList.css";

const SupplierList = () => {
  const suppliers = [
    { id: 1, name: "Fornecedor 1" },
    { id: 2, name: "Fornecedor 2" },
    { id: 3, name: "Fornecedor 3" },
  ];

  return (
    <section className="supplier-section">
      <h2>Fornecedores</h2>
      <div className="supplier-list">
        {suppliers.map((supplier) => (
          <div key={supplier.id} className="supplier-card">
            <div className="image-placeholder">480x606</div>
            <p>{supplier.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupplierList;
