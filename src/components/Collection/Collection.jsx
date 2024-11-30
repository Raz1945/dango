import React, { useState, useEffect } from 'react';
import { Card } from '../Card/Card';
import { MiniCard } from '../miniCard/miniCard';

import { LeftArrowBtn } from '../ArrowBtn/LeftArrowBtn';
import { RightArrowBtn } from '../ArrowBtn/RightArrowBtn';
import { collection } from '../../assets/collection';
import './Collection.css';

const itemsPerPage = 8; // Cantidad de items máximo por página
const allData = Object.values(collection);

export const Collection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);

  // Cálculo de cards visibles
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleData = allData.slice(startIndex, endIndex);

  // Controles 
  const handleNextPage = () => {
    if (currentPage < Math.ceil(allData.length / itemsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Agregar producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Quita producto al carrito
  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const indexToRemove = prevCart.findIndex((item) => item === product);
      if (indexToRemove !== -1) {
        return [
          ...prevCart.slice(0, indexToRemove),
          ...prevCart.slice(indexToRemove + 1),
        ];
      }
      return prevCart; 
    });
  };
  

  const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);

  // Muestra automáticamente el modal si hay productos en el carrito
  useEffect(() => {
    if (cart.length > 0) {
      setShowCartModal(true);
    }
  }, [cart]);

  return (
    <>
      <div className="collection__wrapper">
        <h1 className="collection__title">Featured Collection</h1>

        <div className="collection__grid">
          {visibleData.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              price={`$${item.price}`}
              onClick={() => addToCart(item)}
              buttonClass="card__btn"
              text="Buy now"
            />
          ))}
        </div>

        {/* Controles */}
        <div className="pagination__controls">
          <LeftArrowBtn
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          />
          <RightArrowBtn
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(allData.length / itemsPerPage)}
          />
        </div>
      </div>


      {/* //todo Mover */}
      {/* Modal del carrito */}
      {showCartModal && (
        <div className={`cart-modal ${showCartModal ? 'show' : ''}`}>
          <div className="cart-modal__wrapper">
            <div className="cart-modal__product-card">
              {cart.map((item, index) => (
                <MiniCard
                  key={index}
                  image={item.image}
                  price={`$${item.price}`}
                  onClick={() => removeFromCart(item)}
                  buttonClass='quit'
                  text='Quit'
                />
              ))}
              <span className="cart-modal__price">Total: ${totalPrice.toFixed(2)}</span>
            </div>
            <button
              type="button"
              className="cart-modal__close-btn"
              onClick={() => setShowCartModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
