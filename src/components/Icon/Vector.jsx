import React from 'react';
import PropTypes from 'prop-types';
import { smIcons } from "../../assets/icons";

export const Vector = ({param}) => {
  return (
    <div className={param}>
      <img src={smIcons.vector} alt="vector" />
    </div>
  );
};

Vector.propTypes = {
  param: PropTypes.string.isRequired,
};
