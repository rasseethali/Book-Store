import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// ===== POST /api/orders =====
router.post("/", async (req, res) => {
  try {
    const orderData = req.body;

    // Validate basic data (optional, but good practice)
    if (!orderData || !orderData.userDetails || !orderData.books) {
      return res.status(400).json({ message: "Invalid order data ❌" });
    }

    const newOrder = await Order.create(orderData);
    res.status(201).json({
      message: "Order placed successfully ✅",
      order: newOrder
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Order failed ❌" });
  }
});

// ===== GET /api/orders =====
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Failed to fetch orders ❌" });
  }
});

export default router;
