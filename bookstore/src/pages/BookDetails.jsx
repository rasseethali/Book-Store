import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../CartContext";
import books from "../data/books";

function BookDetails() {
  const { id } = useParams();
  const { cart, setCart } = useContext(CartContext);

  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <p className="p-8 text-center text-gray-400 text-lg animate-pulse">
        Book not found
      </p>
    );
  }

  const addToCart = () => {
    const existing = cart.find((item) => item.id === book.id);
    let updatedCart;

    if (existing) {
      updatedCart = cart.map((item) =>
        item.id === book.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...book, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-6 md:p-10
                        animate-[fadeIn_0.8s_ease-in-out]">

          {/* Book Image */}
          <div className="md:w-1/3 flex justify-center">
            <img
              src={book.image}
              alt={book.title}
              className="w-full max-w-sm rounded-2xl shadow-lg
                         transform transition duration-500
                         hover:scale-105 hover:shadow-2xl"
            />
          </div>

          {/* Book Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
              {book.title}
            </h2>

            <p className="text-sm uppercase tracking-widest text-gray-500">
              Author
            </p>
            <p className="text-lg font-medium text-gray-700">
              {book.author}
            </p>

            <p className="text-gray-600 leading-relaxed text-base">
              {book.description}
            </p>

            <div className="flex items-center justify-between pt-4">
              <p className="text-3xl font-bold text-green-600">
                ${book.price}
              </p>

              <button
                onClick={addToCart}
                className="relative px-8 py-3 rounded-full
                           bg-gradient-to-r from-green-500 to-emerald-600
                           text-white font-semibold tracking-wide
                           shadow-lg overflow-hidden
                           transition-all duration-300
                           hover:scale-105 hover:shadow-2xl
                           active:scale-95"
              >
                <span className="relative z-10">Add to Cart</span>
                <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
