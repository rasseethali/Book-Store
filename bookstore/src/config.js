// src/config.js
export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://book-store-backend-o0p0.onrender.com"
    : "http://localhost:5000";
