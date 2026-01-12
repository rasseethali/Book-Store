import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/* ✅ CORS – ONLY ONCE, TOP */
app.use(cors({
  origin: "https://book-store-one-coral.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

/* ✅ BODY PARSER – ONLY ONCE */
app.use(express.json());

/* ✅ ROUTES */
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("Bookstore backend running ✅");
});

/* ✅ DB CONNECT */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
