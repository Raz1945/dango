import React, { useState, useEffect } from 'react';
import { Card } from '../Card/Card';
import { MiniCard } from '../miniCard/miniCard';

import { LeftArrowBtn } from '../ArrowBtn/LeftArrowBtn';
import { RightArrowBtn } from '../ArrowBtn/RightArrowBtn';
import { collection } from '../../assets/collection';
import './Collection.css';

const itemsPerPage = 8; // Cantidad de items máximo por página
const allData = Object.values(collection);

// Lógica actualizada para manejar productos con cantidad
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
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        // Si el producto ya existe, incrementamos la cantidad
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        // Si no existe, lo añadimos con cantidad inicial 1
        return [...prevCart, { product, cantidad: 1 }];
      }
    });
  };

  // Quitar producto del carrito
  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        if (existingItem.cantidad > 1) {
          // Si la cantidad es mayor a 1, reducimos la cantidad
          return prevCart.map((item) =>
            item.product.id === product.id
              ? { ...item, cantidad: item.cantidad - 1 }
              : item
          );
        } else {
          // Si la cantidad es 1, eliminamos el producto del carrito
          return prevCart.filter((item) => item.product.id !== product.id);
        }
      }
      return prevCart;
    });
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.product.price * item.cantidad, 0);

  // Mostrar automáticamente el modal si hay productos en el carrito
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
          <LeftArrowBtn onClick={handlePrevPage} disabled={currentPage === 1} />
          <RightArrowBtn
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(allData.length / itemsPerPage)}
          />
        </div>
      </div>

      {/* Modal del carrito */}
      {showCartModal && (
        <div className={`cart-modal ${showCartModal ? "show" : ""}`}>
          <div className="cart-modal__wrapper">
            <div className="cart-modal__product-card">
              {cart.map((item) => (
                <MiniCard
                  key={item.product.id}
                  image={item.product.image}
                  price={`$${item.product.price}`}
                  cant={item.cantidad}
                  onClick={() => removeFromCart(item.product)}
                  buttonClass="quit"
                  text="Quit"
                />
              ))}
            </div>
            <div className="cart-modal__bottom">
              <span className="cart-modal__price">
                Total: ${totalPrice.toFixed(2)}
              </span>
              <button
                type="button"
                className="cart-modal__close-btn"
                onClick={() => setShowCartModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

