import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userDetails: {
      name: String,
      phone: String,
      address: String,
    },
    books: [
      {
        bookId: String,   // frontend item.id
        title: String,
        price: Number,
        quantity: Number,
      },
    ],
    totalPrice: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
