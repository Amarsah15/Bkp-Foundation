import { User } from "../models/User.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  try {
    const { name, email, role, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    if (role && !["volunteer", "intern"].includes(role)) {
      return res.status(400).json({ success: false, message: "Invalid role" });
    }

    const userExists = await User.findOne({ email });
    if (userExists)
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      role,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in registration",
      error: err.message,
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    if (users.length === 0) {
      return res
        .status(200)
        .json({
          success: true,
          message: "No users has been registered yet",
          users,
        });
    }
    res
      .status(200)
      .json({ success: true, message: "Users fetched successfully", users });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in fetching all users",
      error: err.message,
    });
  }
};
