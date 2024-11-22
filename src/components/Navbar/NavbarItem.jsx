import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const NavbarItem = ({ to, label }) => {
  return (
    <li className="navbar__item">
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "navbar__link--active" : "navbar__link")}
        aria-label={`Ir a ${label}`}
      >
        {label}
      </NavLink>
    </li>
  );
};

NavbarItem.propTypes = {
  to: PropTypes.string.isRequired, 
  label: PropTypes.string.isRequired,
};
