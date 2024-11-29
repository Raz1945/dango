import React, { useState } from 'react';
import { Card } from '../Card/Card';
import { LeftArrowBtn } from '../ArrowBtn/LeftArrowBtn';
import { RightArrowBtn } from '../ArrowBtn/RightArrowBtn';
import { collection } from '../../assets/collection';
import './Collection.css'

const itemsPerPage = 8; // Cantidad de items maximo por página
const allData = Object.values(collection);

export const Collection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Cálculo de cards visibles
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleData = allData.slice(startIndex, endIndex);

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

  return (
    <>
      <div className="collection__wrapper">
        <h1 className='collection__title'>Featured Collection</h1>
        <div className="collection__grid">
          {visibleData.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              price={`$${item.price}`}

              onClick={() => console.log(`Click en item ${index + startIndex}`)}
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
    </>
  );
};
