import React from 'react';
import PropTypes from 'prop-types';
import './ArrowBtn.css';
import { LeftArrow } from '../Icon/LeftArrow';

export const LeftArrowBtn = ({ className, onClick, disabled }) => {
  return (
    <button
      type="button"
      className={`arrow-btn left ${className} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <LeftArrow />
    </button>
  );
};

LeftArrowBtn.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

LeftArrowBtn.defaultProps = {
  className: '',
  disabled: false,
};
