import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Get cart count from localStorage
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItemCount(cartItems.length);
  }, []);

  // Listen to storage changes
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'cart') {
        const cartItems = JSON.parse(event.newValue || '[]');
        setCartItemCount(cartItems.length);
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <header className={`fixed w-full z-50 shadow-md transition-colors ${location.pathname === '/cart' ? 'bg-green-50' : 'bg-white'}`}>
      <div className="container mx-auto px-4 md:px-0 flex justify-between items-center py-4">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-green-700 hover:text-green-900 transition-colors">
          <Link to="/">Book Store</Link>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center font-medium">
          <Link
            to="/"
            className="relative text-gray-700 hover:text-green-700 after:block after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all hover:after:w-full"
          >
            Home
          </Link>
          <Link
            to="/cart"
            className="relative text-gray-700 hover:text-green-700 flex items-center"
          >
            <FaShoppingCart className="mr-1 text-lg" />
            Cart
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full px-2 text-xs animate-pulse">
                {cartItemCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 hover:text-green-700 transition-colors"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200 animate-slideDown">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              to="/signup"
              className="relative text-gray-700 hover:text-green-700"
            >
              Signup
            </Link>

            <Link
              to="/"
              className="text-gray-700 hover:text-green-700 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-green-700 flex items-center"
              onClick={() => setMenuOpen(false)}
            >
              <FaShoppingCart className="mr-1 text-lg" />
              Cart
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full px-2 text-xs animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
