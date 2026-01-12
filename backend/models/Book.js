import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    price: Number,
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model("Book", bookSchema);
