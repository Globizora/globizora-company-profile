# 🌐 Globizora Inc. - API Demo

This directory contains a demo API service for **Globizora Inc.**.  
The purpose is to showcase our **backend development capability** and demonstrate how our company can build **real-time APIs** for SaaS and infrastructure services.

---

## 🚀 Features

- RESTful API demo using [Express.js](https://expressjs.com/)  
- `/company` → Returns company profile information  
- `/status` → Health check endpoint  
- `/data/:symbol` → Sample data endpoint (for demonstration)  
- Designed for extensibility into **SaaS, analytics, and infrastructure services**  

---

## 📡 API Endpoints

### `/status`
Returns system health and metadata.
```json
{
  "service": "Globizora API Demo",
  "company": "GLOBIZORA INC",
  "status": "OK",
  "version": "1.0.0",
  "environment": "development",
  "timestamp": "2025-09-02T06:10:00.000Z"
}
