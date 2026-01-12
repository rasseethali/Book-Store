import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItemCount(cartItems.length);
  }, []);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "cart") {
        const cartItems = JSON.parse(event.newValue || "[]");
        setCartItemCount(cartItems.length);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50
        backdrop-blur-xl bg-white/80
        border-b border-white/30
        transition-all duration-500
        ${location.pathname === "/cart" ? "shadow-lg" : "shadow-sm"}
      `}
    >
      <div className="container mx-auto px-4 md:px-0 flex justify-between items-center py-4">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          <Link
            to="/"
            className="text-green-700 hover:text-green-900 transition-colors duration-300"
          >
            Book<span className="text-gray-800">Store</span>
          </Link>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 items-center font-medium">
          <Link
            to="/"
            className="relative text-gray-700 hover:text-green-700
              after:absolute after:left-0 after:-bottom-1
              after:w-0 after:h-[2px] after:bg-green-600
              after:transition-all after:duration-300
              hover:after:w-full"
          >
            Home
          </Link>

          <Link
            to="/cart"
            className="relative flex items-center gap-1
              text-gray-700 hover:text-green-700
              transition-transform hover:scale-105"
          >
            <FaShoppingCart className="text-lg" />
            Cart

            {cartItemCount > 0 && (
              <span
                className="absolute -top-2 -right-3
                  bg-gradient-to-r from-red-500 to-pink-500
                  text-white rounded-full px-2 text-xs font-bold
                  animate-bounce shadow-lg"
              >
                {cartItemCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg
              text-gray-700 hover:text-green-700
              hover:bg-green-50
              transition-all duration-300"
          >
            {menuOpen ? (
              <FaTimes size={24} className="rotate-90 transition-transform" />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="bg-white/90 backdrop-blur-xl border-t border-gray-200 shadow-inner flex flex-col space-y-5 p-5">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-green-700 text-lg transition-colors"
          >
            Home
          </Link>

          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-gray-700 hover:text-green-700 text-lg"
          >
            <FaShoppingCart />
            Cart
            {cartItemCount > 0 && (
              <span className="bg-red-500 text-white rounded-full px-2 text-xs">
                {cartItemCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
