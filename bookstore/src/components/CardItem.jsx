import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

function CartItem({ item, onQuantityChange, onRemoveItem }) {
  const handleIncrease = () => onQuantityChange(item.id, item.quantity + 1);
  const handleDecrease = () => {
    if (item.quantity > 1) onQuantityChange(item.id, item.quantity - 1);
  };
  const handleRemove = () => onRemoveItem(item.id);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center border rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow bg-white">
      
      {/* Book Info */}
      <div className="flex-1 mb-2 md:mb-0">
        <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
        <p className="text-green-700 font-semibold mt-1">Price: ${item.price}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-2 mb-2 md:mb-0">
        <button
          onClick={handleDecrease}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors text-lg font-semibold"
        >
          -
        </button>
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value))}
          className="w-14 text-center border rounded py-1"
          min={1}
        />
        <button
          onClick={handleIncrease}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors text-lg font-semibold"
        >
          +
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={handleRemove}
        className="flex items-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
      >
        <FaTrashAlt className="mr-2" /> Remove
      </button>
    </div>
  );
}

export default CartItem;
