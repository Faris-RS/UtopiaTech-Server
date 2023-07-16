import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/user.model";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt";

const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    // Generate access and refresh tokens
    const accessToken = generateAccessToken(newUser.id);
    const refreshToken = generateRefreshToken(newUser.id);

    return res.json({ accessToken, refreshToken });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Implement login, refresh token, and delete user functions here

export { signup };
