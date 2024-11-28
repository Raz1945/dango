import React from "react";
import { Banner } from '../Banner/index';
import { Nav } from './Nav';
import { Tienda } from '../Icon/Tienda';

import '../Navbar/index.css';

export const Navbar = () => {


  return (
      <>
        <Banner />

        <div className="navbar__wrapper">
          <Nav />
          <Tienda
            param="navbar__shop-icon"
            onClick={() => console.log("Tienda clickeada")}
          />
        </div>
      </>
  );
}  
