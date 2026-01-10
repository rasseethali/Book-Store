// routes/user.js or server.js
import express from "express";
import { signup , login } from "./controllers/auth.js"; // your signup function
const router = express.Router();

router.post("/signup", signup); 
router.post("/login", login);
// ✅ must be lowercase
export default router;
