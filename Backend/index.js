import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api/v1/users", userRoutes);

// Health check path here
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "API is healthy" });
});

app.get("/", (req, res) => {
  res.send("Welcome to the Basti Ki Pathshala Foundation API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const keepAlive = () => {
  setInterval(async () => {
    try {
      const res = await axios.get(
        "https://bkp-foundation.onrender.com/health",
        {
          timeout: 4000,
        }
      );
      console.log("✅ Ping successful:", res.status);
    } catch (error) {
      console.warn("⚠️ Ping failed:", error);
    }
  }, 1000 * 60 * 10); // every 10 minutes
};

keepAlive();
