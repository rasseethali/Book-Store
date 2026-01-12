import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import CartItem from "../components/CardItem";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";
import { API_URL } from "../config"; // ✅ Import at the top

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  // ... rest of your code

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty ❌");
      return;
    }

    try {
      await axios.post(`${API_URL}/orders`, {
        userDetails: { name, phone: phoneNumber, address },
        books: cart.map(item => ({
          bookId: item.id,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
        })),
        totalPrice,
      });

      alert("Order placed successfully ✅");
      setCart([]);
      localStorage.removeItem("cart");
      setName("");
      setAddress("");
      setPhoneNumber("");
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.message || "Order failed ❌");
    }
  };

  // ... rest of your component





  return (
    <div className="container mx-auto p-4 space-y-6">
      <h2 className="text-3xl font-bold">Shopping Cart</h2>

      <div className="space-y-4">
        {cart.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onQuantityChange={handleQuantityChange}
            onRemoveItem={handleRemoveItem}
          />
        ))}
      </div>

      <div className="bg-white p-6 rounded shadow flex flex-col md:flex-row justify-between items-center">
        <p className="text-2xl font-bold text-green-700">
          Total: ₹{totalPrice}
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-2 mt-4 md:mt-0"
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-600 text-white px-6 py-2 rounded disabled:opacity-50"
          >
            {isSubmitting ? "Placing..." : "Place Order"}
          </button>
        </form>
      </div>
    </div>
  );
} 

export default Cart;
