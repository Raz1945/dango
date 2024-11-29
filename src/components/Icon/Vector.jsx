import React from 'react';
import PropTypes from 'prop-types';
import './index.css'

export const Vector = ({ param }) => {
  return (
    <div className={param}>
      <svg
        width="8"
        height="15"
        viewBox="0 0 8 15"
        xmlns="http://www.w3.org/2000/svg"
        className="vector-icon"
      >
        <path
          d="M0 1.3281L1.22022 0L8 7.42836L1.21337 14.8567L0 13.5286L5.57326 7.42836L0 1.3281Z"
        />
      </svg>
    </div>
  );
};

Vector.propTypes = {
  param: PropTypes.string.isRequired,
};
