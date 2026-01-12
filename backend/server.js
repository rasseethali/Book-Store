import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/* ✅ CORS – ONLY ONCE */
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://book-store-cqxi49ufu-raseethalis-projects.vercel.app"
  ],
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));


/* ✅ JSON PARSER */
app.use(express.json());

/* ✅ ROUTES */
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("Bookstore backend running ✅");
});

/* ✅ MONGODB */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
