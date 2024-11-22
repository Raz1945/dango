import React from 'react';
import PropTypes from 'prop-types';
import { smIcons } from "../../assets/icons";
import '../Icon/Tienda.css';

export const Tienda = ({ param, onClick }) => {
  return (
    <div
      className={param}
      tabIndex="0"
      role="button"
      aria-label="Abrir tienda"
      onClick={onClick}
    >
      <img src={smIcons.carrito.active} alt="Carrito de productos" />
      <img src={smIcons.elipse.con} className="elipse" alt="Marca si hay items en el carrito" />
    </div>
  );
};

Tienda.propTypes = {
  param: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
