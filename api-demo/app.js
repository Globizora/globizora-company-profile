// Globizora Inc - API Demo
// A simple Express.js server to demonstrate Globizora's fintech & blockchain API capability

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for JSON
app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Globizora Inc API Demo",
    company: "Globizora Inc",
    status: "running",
    version: "1.0.0"
  });
});

// Example: health check endpoint
app.get("/status", (req, res) => {
  res.json({
    service: "Globizora API Demo",
    status: "OK",
    timestamp: new Date()
  });
});

// Example: sample token data (simulating blockchain API)
app.get("/token/:symbol", (req, res) => {
  const { symbol } = req.params;
  res.json({
    token: symbol.toUpperCase(),
    price_usd: Math.random() * 10, // mock data
    network: "Solana (demo)"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Globizora API Demo is running at http://localhost:${PORT}`);
});
