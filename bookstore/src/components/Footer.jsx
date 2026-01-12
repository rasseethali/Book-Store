import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Quick Links */}
        <div className="space-y-3">
          <h2 className="font-bold text-xl text-white">Quick Links</h2>
          <div className="flex flex-col space-y-2">
            <Link className="hover:text-green-400 transition-colors" to="/">Home</Link>
            <Link className="hover:text-green-400 transition-colors" to="/cart">Cart</Link>
            <Link className="hover:text-green-400 transition-colors" to="/books">Books</Link>
            <Link className="hover:text-green-400 transition-colors" to="/about">About Us</Link>
          </div>
        </div>

        {/* Social Media */}
        <div className="space-y-3">
          <h2 className="font-bold text-xl text-white">Follow Us</h2>
          <div className="flex flex-col space-y-2">
            <a className="hover:text-green-400 transition-colors" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a className="hover:text-green-400 transition-colors" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a className="hover:text-green-400 transition-colors" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className="hover:text-green-400 transition-colors" href="https://www.linkedin.com/company" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h2 className="font-bold text-xl text-white">Contact Us</h2>
          <div className="flex flex-col space-y-1 text-gray-400">
            <p>Email: <a className="hover:text-green-400 transition-colors" href="mailto:bookstore@example.com">bookstore@example.com</a></p>
            <p>Phone: <a className="hover:text-green-400 transition-colors" href="tel:1234567890">123-456-7890</a></p>
            <p>Address: 123 Book St, Knowledge City</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; 2026 Bookstore. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

