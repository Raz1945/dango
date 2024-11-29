import React from 'react'
import PropTypes from 'prop-types';
import './Card.css'

export const Card = ({ image, price, onClick }) => {
  return (
    <div className='card__wrapper'>

      <div className='card__img-wrapper'>
        <img src={image} alt={`Imagen ${image}`} className='card__img' />
      </div>

      <div className='card__info'>
        <span className='card__price'>{price}</span>
        <button type="button" className='card__btn' onClick={onClick}>
          <span className='card__btn-text'>
            Buy now
          </span>
        </button>
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

