// Globizora Inc - API Demo (Enhanced)
// Express.js server demonstrating Globizora's fintech & infrastructure API capability

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

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

// Enhanced Status endpoint
app.get("/status", (req, res) => {
  res.json({
    service: "Globizora API Demo",
    company: "GLOBIZORA INC",
    status: "OK",
    version: "1.0.0",
    environment: "development",
    timestamp: new Date()
  });
});

// Company info endpoint
app.get("/company", (req, res) => {
  res.json({
    name: "GLOBIZORA INC",
    industry: "AI platforms, Internet infrastructure, Fintech, Media",
    location: "Sheridan, Wyoming, USA",
    email: "info@globizora.com"
  });
});

// Token endpoint (mock)
app.get("/token/:symbol", (req, res) => {
  const { symbol } = req.params;
  res.json({
    token: symbol.toUpperCase(),
    price_usd: Math.random() * 10,
    network: "Solana (demo)"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Globizora API Demo is running at http://localhost:${PORT}`);
});
