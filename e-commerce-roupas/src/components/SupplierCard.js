import React from "react";
import PropTypes from "prop-types";
import "../css/SupplierCard.css";

const SupplierCard = ({ name }) => {
  return (
    <div className="supplier-card">
      <div className="image-placeholder" aria-label={`Imagem do fornecedor ${name}`}>
        <p>Imagem do fornecedor</p>
      </div>
      <p className="supplier-name">{name}</p>
    </div>
  );
};

SupplierCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SupplierCard;
