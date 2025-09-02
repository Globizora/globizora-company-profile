const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Root
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Globizora Inc API Demo",
    company: "Globizora Inc",
    status: "running",
    version: "1.0.0"
  });
});

// Enhanced Status
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

// ✅ Company Info
app.get("/company", (req, res) => {
  res.json({
    name: "GLOBIZORA INC",
    industry: "AI platforms, Internet infrastructure, Fintech, Media",
    location: "Sheridan, Wyoming, USA",
    email: "info@globizora.com"
  });
});

// Token mock
app.get("/token/:symbol", (req, res) => {
  const { symbol } = req.params;
  res.json({
    token: symbol.toUpperCase(),
    price_usd: Math.random() * 10,
    network: "Solana (demo)"
  });
});

// Start
app.listen(PORT, () => {
  console.log(`Globizora API Demo is running at http://localhost:${PORT}`);
});
