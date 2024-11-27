import React, { useState } from "react";
import { NavbarItem } from "./NavbarItem";
import { HiBars3 } from "react-icons/hi2";

export const Nav = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisible(!isNavbarVisible);
  };

  return (
    <>
      <nav className="navbar">
        <HiBars3
          className="navbar__menu-icon"
          size={20}
          onClick={toggleNavbar}
          aria-label="Abrir menú"
        />

        <ul className="navbar__list">
          <NavbarItem to="/home" label="Home" />
          <NavbarItem to="/item1" label="Item 1" />
          <NavbarItem to="/item2" label="Item 2" />
          <NavbarItem to="/item3" label="Item 3" />
          <NavbarItem to="/item4" label="Item 4" />
          <NavbarItem to="/item5" label="Item 5" />
        </ul>
      </nav>

      {isNavbarVisible && (
        <div className="navbar__modal">
          <button
            className="navbar__close"
            onClick={toggleNavbar}
            aria-label="Cerrar menú"
          >
            &times;
          </button>
          <ul className="navbar-modal__list">
            <NavbarItem to="/home" label="Home" />
            <NavbarItem to="/item1" label="Item 1" />
            <NavbarItem to="/item2" label="Item 2" />
            <NavbarItem to="/item3" label="Item 3" />
            <NavbarItem to="/item4" label="Item 4" />
            <NavbarItem to="/item5" label="Item 5" />
          </ul>
        </div>
      )}
    </>
  );
};
