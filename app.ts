import express from "express";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/auth.routes";
import config from "./config";
import mongoose from "mongoose";

const app = express();

// Connect to MongoDB
mongoose
  .connect(config.MONGODB_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());

// Mounting routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
