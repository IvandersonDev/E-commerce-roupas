import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ title, image }) => {
  return (
    <div className="card">
      <img src={image} alt={`Imagem de ${title}`} className="card-image" />
      <div className="card-footer">
        <p>{title}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
