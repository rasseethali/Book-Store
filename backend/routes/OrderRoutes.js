import express from "express";
import Order from "../models/Order.js"; // adjust path to your Order model

const router = express.Router();

// POST /api/orders
router.post("/", async (req, res) => {
  try {
    const orderData = req.body;
    const newOrder = await Order.create(orderData);
    res.status(201).json({ message: "Order placed successfully ✅", order: newOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Order failed ❌" });
  }
});

export default router;
