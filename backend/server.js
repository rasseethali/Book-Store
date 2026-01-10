import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import UserRoutes from "./routes/UserRoutes.js";
import BookRoutes from "./routes/BookRoutes.js";
import OrderRoutes from "./routes/OrderRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", UserRoutes);
app.use("/api/books", BookRoutes);
app.use("/api/orders", OrderRoutes);

app.get("/", (req, res) => {
  res.send("Backend running ✅");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.log("MongoDB ERROR ❌", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🔥 Server started on port ${PORT}`)
);
