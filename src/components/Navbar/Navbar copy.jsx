import React from 'react';
import { HiBars3 } from "react-icons/hi2";
import { Tienda } from '../Icon/Tienda';
import { NavbarItem } from './NavbarItem';
import '../Navbar/index.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <HiBars3 
        className="navbar__menu-icon" 
        color="black" 
        size={20} 
        onClick={() => console.log("Abrir menú")} // todo 
      />

      <ul className="navbar__list">
        <NavbarItem to="/home" label="Home" />
        <NavbarItem to="/item1" label="Item 1" />
        <NavbarItem to="/item2" label="Item 2" />
        <NavbarItem to="/item3" label="Item 3" />
        <NavbarItem to="/item4" label="Item 4" />
        <NavbarItem to="/item5" label="Item 5" />
      </ul>

      <Tienda 
        param="navbar__shop-icon" 
        onClick={() => console.log("Tienda clickeada")} // todo 
      />
    </nav>
  );
};
