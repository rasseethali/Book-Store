import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../CartContext';
import books from '../data/books';

function BookDetails() {
  const { id } = useParams();
  const { cart, setCart } = useContext(CartContext);

  const book = books.find((b) => b.id === id);
  if (!book) return <p className="p-4 text-center text-gray-500">Book not found.</p>;

  const addToCart = () => {
    const existing = cart.find((item) => item.id === id);
    let updatedCart;
    if (existing) {
      updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...book, quantity: 1 }];
    }
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row gap-8">
      <img className="w-full md:w-1/3 h-auto object-cover rounded shadow" src={book.image} alt={book.title} />
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold">{book.title}</h2>
        <p className="text-gray-600">Author: {book.author}</p>
        <p className="text-gray-700">{book.description}</p>
        <p className="text-green-700 font-bold text-xl">Price: ${book.price}</p>
        <button
          onClick={addToCart}
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default BookDetails;
