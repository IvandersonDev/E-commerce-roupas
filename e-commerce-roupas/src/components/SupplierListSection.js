import React from "react";
import SupplierCard from "./SupplierCard";
import "../css/SupplierList.css";

const SupplierListSection = () => {
  const suppliers = [
    { id: 1, name: "Fornecedor 1" },
    { id: 2, name: "Fornecedor 2" },
    { id: 3, name: "Fornecedor 3" },
  ];

  return (
    <section className="supplier-list-section">
      <h2>Fornecedores</h2>
      <div className="supplier-list-container">
        {suppliers.map(({ id, name }) => (
          <SupplierCard key={id} name={name} />
        ))}
      </div>
    </section>
  );
};

export default SupplierListSection;
