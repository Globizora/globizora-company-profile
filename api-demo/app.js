// Globizora Inc - API Service (Production-Style)
// Express.js backend providing company, status, and data endpoints

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Globizora Inc API Service",
    company: "Globizora Inc",
    status: "running",
    version: "1.0.0"
  });
});

// Service status
app.get("/status", (req, res) => {
  res.json({
    service: "Globizora API Service",
    company: "GLOBIZORA INC",
    status: "OK",
    version: "1.0.0",
    environment: process.env.NODE_ENV || "development",
    uptime: process.uptime().toFixed(0) + "s",
    timestamp: new Date()
  });
});

// Company info
app.get("/company", (req, res) => {
  res.json({
    name: "GLOBIZORA INC",
    industry: "AI platforms, Internet infrastructure, SaaS, Media",
    location: "Sheridan, Wyoming, USA",
    email: "info@globizora.com",
    established: "2025",
    services: [
      "API platform development",
      "Data infrastructure",
      "SaaS applications",
      "Digital automation"
    ]
  });
});

// Data endpoint
app.get("/data/:symbol", (req, res) => {
  const { symbol } = req.params;
  res.json({
    symbol: symbol.toUpperCase(),
    value: (Math.random() * 100).toFixed(2),
    category: "infrastructure analytics",
    timestamp: new Date()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Globizora API Service is running at http://localhost:${PORT}`);
});
