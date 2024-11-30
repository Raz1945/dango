import React from 'react';
import PropTypes from 'prop-types';
import './miniCard.css';

export const MiniCard = ({ image, price, buttonClass, onClick, isDisabled, text }) => {
  return (
    <div className='miniCard__wrapper'>
      <div className='miniCard__img-wrapper'>
        <img src={image} alt={`Imagen ${image}`} className='miniCard__img' />
      </div>

      <div className='miniCard__info'>
        <span className='miniCard__price'>{price}</span>
        <button
          type="button"
          className={`miniCard__btn ${isDisabled ? 'miniCard__btn--disabled' : ''} ${buttonClass}`}
          onClick={onClick}
          disabled={isDisabled}
        >
          <span className='miniCard__btn-text'>
            {text}
          </span>
        </button>
      </div>
    </div>
  );
};

MiniCard.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  buttonClass: PropTypes.string, 
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};

MiniCard.defaultProps = {
  isDisabled: false,
  buttonClass: '',
};
