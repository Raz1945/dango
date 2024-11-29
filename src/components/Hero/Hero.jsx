import React, { useState } from 'react';
import { Vector } from '../Icon/Vector'
import { LeftArrowBtn } from '../ArrowBtn/LeftArrowBtn';
import { RightArrowBtn } from '../ArrowBtn/RightArrowBtn';
import { imgs } from '../../assets/images';
import './Hero.css';

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = Object.values(imgs.collection);

  const arrowClickRight = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const arrowClickLeft = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="hero__wrapper">
      <div className="hero__left">
        <div className="hero__left-items">
          {/* Texts */}
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
              take the quiz <Vector param='quiz-visibiliti' />
            </button>
          </div>

          {/* Arrows */}
          <div className="hero__arrow">
            <LeftArrowBtn onClick={arrowClickLeft} />
            <RightArrowBtn onClick={arrowClickRight} />
          </div>

        </div>
      </div>

      {/* Img */}
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
