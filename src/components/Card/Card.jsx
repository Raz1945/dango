import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export const Card = ({ image, price, buttonClass, onClick, isDisabled, text }) => {
  return (
    <div className='card__wrapper'>
      <div className='card__img-wrapper'>
        <img src={image} alt={`Imagen ${image}`} className='card__img' />
      </div>

      <div className='card__info'>
        <span className='card__price'>{price}</span>
        <button
          type="button"
          className={`card__btn ${isDisabled ? 'card__btn--disabled' : ''} ${buttonClass}`}
          onClick={onClick}
          disabled={isDisabled}
        >
          <span className='card__btn-text'>
            {text}
          </span>
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  buttonClass: PropTypes.string, 
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};

Card.defaultProps = {
  isDisabled: false,
  buttonClass: '',
};
