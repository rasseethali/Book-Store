import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("Bookstore backend running ✅");
});


app.use(cors({
  origin: "https://your-frontend-url.vercel.app", // replace with your frontend URL
  credentials: true,
}));

app.use(express.json());
// DB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
