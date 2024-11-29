import React from 'react';
import PropTypes from 'prop-types';
import './ArrowBtn.css'
import { RightArrow } from '../Icon/RightArrow';

export const RightArrowBtn = ({ className, onClick, disabled }) => {
  return (
    <button
      type="button"      
      className={`arrow-btn right ${className} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <RightArrow />
    </button>
  );
};

RightArrowBtn.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

RightArrowBtn.defaultProps = {
  className: '',
  disabled: false,
};