import User from "../models/User.js";
import bcrypt from "bcryptjs";

// ✅ SIGNUP
export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // 🔍 email already exists check
    const exists = await User.findOne({ email });
    if (exists) {
      return res
        .status(400)
        .json({ message: "Email already exists ❌" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Signup successful ✅",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error ❌" });
  }
};

// ✅ LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 🔍 user check
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found ❌" });
    }

    // 🔐 password check
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Invalid password ❌" });
    }

    res.status(200).json({
      message: "Login successful ✅",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error ❌" });
  }
};
