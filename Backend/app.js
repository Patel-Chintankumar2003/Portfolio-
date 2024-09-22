import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

export const app = express();

// Middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

// CORS Configuration
const corsOptions = {
  origin: "http://localhost:5173", // Adjust if your frontend URL is different
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"], // Allowed methods as an array
  credentials: true, // Allow cookies/headers with credentials
};
app.use(cors(corsOptions));

// Routes
import { userRouter } from "./routes/User.js";
app.use("/api/v1", userRouter);

// Serving frontend (Production build)
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./frontend/build/index.html"));
});

// Start your server in your main file
