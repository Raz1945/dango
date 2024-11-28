import React, { useState } from 'react';
import { imgs } from '../../assets/images';

import { Vector } from '../Icon/Vector'
import { LeftArrow } from '../Icon/LeftArrow'
import { RightArrow } from '../Icon/RightArrow'

import './Home.css';


export const Home = () => {
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
    <div className="home__wrapper">
      <div className="home__left">
        <div className="home__left-items">

          <h1 className="home__title">Lorem ipsum dolor sit amet</h1>

          <p className="home__subtitle">
            Nunc porttitor tortor metus, nec sagittis lectus accumsan quis.
            Aenean euismod mollis tempor.
          </p>

          {/* Buttons */}
          <div className='home__btn'>
            <button type="button" className="home__shop-btn shop">
              shop now <Vector />
            </button>

            <button type="button" className="home__quiz-btn quiz">
              take the quiz <Vector />
            </button>
          </div>


          {/* Arrows */}
          <div className="home__arrow">
            <button
              type="button"
              className="home__arrow-btn left"
              onClick={arrowClickLeft}
            >
              <LeftArrow />
            </button>

            <button
              type="button"
              className="home__arrow-btn right"
              onClick={arrowClickRight}
            >
              <RightArrow />
            </button>
          </div>
        </div>

      </div>

      <div className="home__right">
        <img
          src={images[currentImageIndex]}
          alt={`Imagen ${currentImageIndex}`}
          className="home__image"
        />
      </div>
    </div>
  );
};
