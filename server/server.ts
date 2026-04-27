import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import quoteRequestRoutes from "./routes/quoteRequest";
import contactRequestRoutes from "./routes/contactRequest";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.status(200).send("API running");
});

app.use("/api", quoteRequestRoutes);
app.use("/api", contactRequestRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});