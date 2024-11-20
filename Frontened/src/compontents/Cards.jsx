import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cards({ item }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    sessionStorage.setItem('item', JSON.stringify(item));
    navigate('/details');
  };

  const formatPrice = (price) => {
    if (typeof price === 'number' && !isNaN(price)) {
      return `₹${price.toFixed(2)}`;
    } else if (typeof price === 'string' && !isNaN(Number(price))) {
      return `₹${Number(price).toFixed(2)}`;
    }
    return '₹0.00';
  };

  return (
    <div
      className="card bg-white w-full sm:w-72 md:w-80 lg:w-96 shadow-lg dark:bg-slate-800 dark:text-white dark:border cursor-pointer transform transition-all hover:scale-105 hover:rotate-2"
      onClick={handleCardClick}
    >
      <figure className="h-48 sm:h-56 md:h-64 flex items-center justify-center overflow-hidden mb-4">
        <img
          src={item?.image || 'https://via.placeholder.com/300'}
          alt={item?.title || 'Product Image'}
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out"
        />
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title text-lg font-semibold text-gray-800 dark:text-white">
          {item?.name || 'Unnamed Product'}
          <div className="bg-green-700 text-white rounded-full px-3 py-1 text-sm ml-3">
            {item?.category || 'Uncategorized'}
          </div>
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">{item?.description || 'No description available'}</p>
        <div className="card-actions flex justify-between items-center mt-4">
          {/* Show the formatted price */}
          <div className="badge badge-outline text-gray-800 dark:text-white">
            {formatPrice(item?.price)}
          </div>
          <div className="badge badge-outline text-gray-600 dark:text-gray-300">
            {item?.rating?.rate ? `${item.rating.rate} ★` : 'No ratings'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
