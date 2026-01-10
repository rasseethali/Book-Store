import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    price: Number,
    image: String,
    isPurchased: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Book", bookSchema);
