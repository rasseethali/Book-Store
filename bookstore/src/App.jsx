
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./CartContext";

import Home from "./pages/Home";

import Cart from "./pages/Cart";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />

        <main className="min-h-screen container mx-auto p-4">
          <Routes>
            {/* Signup page as default */}
            
            {/* Home page */}
            <Route path="/" element={<Home />} />
            {/* Cart page */}
            <Route path="/cart" element={<Cart />} />
            {/* Book details page */}
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
