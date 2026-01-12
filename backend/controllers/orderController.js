import Order from "../models/Order.js";

export const placeOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json({
      message: "Order placed successfully ✅",
      order,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
