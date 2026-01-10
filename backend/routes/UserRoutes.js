// routes/user.js or server.js
import express from "express";
import { signup } from "./controllers/auth.js"; // your signup function
const router = express.Router();

router.post("/signup", signup);  // ✅ must be lowercase
export default router;
