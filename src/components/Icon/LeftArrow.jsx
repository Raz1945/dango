import React from 'react';
import { smIcons } from "../../assets/icons";
import './index.css';

export const LeftArrow = () => {
  return (
    <div className='layout__arrow'>
      <img src={smIcons.arrow.left} alt="left arrow" />
    </div>
  );
};
