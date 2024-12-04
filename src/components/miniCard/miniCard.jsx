import React from 'react';
import PropTypes from 'prop-types';
import './miniCard.css';

export const MiniCard = ({
  image,
  price,
  buttonClass = '',
  onClick,
  isDisabled = false,
  text,
  cant,
}) => {
  return (
    <div className='miniCard__wrapper'>
      <div className='miniCard__img-wrapper'>
        <img src={image} alt={`Imagen ${image}`} className='miniCard__img' />
      </div>

      <div className='miniCard__info'>
        <div className='miniCard__price-info'>
          <span className='miniCard__price'>{price}</span>
          <span className='miniCard__price-cant'>cant: {cant}</span>
        </div>
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
  cant: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool,
};
