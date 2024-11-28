import React from 'react';
import { smIcons } from "../../assets/icons";
import './index.css';

export const RightArrow = () => {
  return (
    <div className='layout__arrow'>
      <img src={smIcons.arrow.right} alt="right arrow" />
    </div>
  );
};
