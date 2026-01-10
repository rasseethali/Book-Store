import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { CartContext } from '../CartContext';

function BookCard({ book }) {
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const existing = cart.find((item) => item.id === book.id);
    let updatedCart;

    if (existing) {
      // Increase quantity if already in cart
      updatedCart = cart.map((item) =>
        item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // Add new book
      updatedCart = [...cart, { ...book, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${book.title} added to cart!`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
      {/* Book Image */}
      <img
        className="w-32 h-48 object-cover rounded-md mb-4"
        src={book.image}
        alt={book.title}
      />

      {/* Book Info */}
      <h3 className="font-semibold text-lg text-center text-gray-800">{book.title}</h3>
      <p className="text-green-700 font-bold mt-1">Price: ${book.price}</p>

      {/* Action Buttons */}
      <div className="mt-4 flex space-x-2">
        <Link
          to={`/book/${book.id}`}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors flex items-center"
        >
          View Details
        </Link>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors flex items-center"
          onClick={handleAddToCart}
        >
          <FaCartPlus className="mr-2" /> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default BookCard;
