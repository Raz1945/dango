import React, { useState } from 'react';
import { imgs } from '../../assets/images';

import { Vector } from '../Icon/Vector'
import { LeftArrow } from '../Icon/LeftArrow'
import { RightArrow } from '../Icon/RightArrow'

import './Hero.css';


export const Hero = () => {
  // Estado para la imagen actual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Obtenemos el total de imágenes
  const images = Object.values(imgs.collection);

  // Cambia a la siguiente imagen
  const arrowClickRight = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Ciclo circular
  };

  // Cambia a la anterior imagen
  const arrowClickLeft = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="hero__wrapper">
      <div className="hero__left">
        <div className="hero__left-items">

          <h1 className="hero__title">Lorem ipsum dolor sit amet</h1>

          <p className="hero__subtitle">
            Nunc porttitor tortor metus, nec sagittis lectus accumsan quis.
            Aenean euismod mollis tempor.
          </p>

          {/* Buttons */}
          <div className='hero__btn'>
            <button type="button" className="hero__shop-btn shop">
              shop now <Vector />
            </button>

            <button type="button" className="hero__quiz-btn quiz">
              take the quiz <Vector param='quiz-visibiliti'/>
            </button>
          </div>


          {/* Arrows */}
          <div className="hero__arrow">
            <button
              type="button"
              className="hero__arrow-btn left"
              onClick={arrowClickLeft}
            >
              <LeftArrow />
            </button>

            <button
              type="button"
              className="hero__arrow-btn right"
              onClick={arrowClickRight}
            >
              <RightArrow />
            </button>
          </div>
        </div>

      </div>

      <div className="hero__right">
        <img
          src={images[currentImageIndex]}
          alt={`Imagen ${currentImageIndex}`}
          className="hero__image"
        />
      </div>
    </div>
  );
};
