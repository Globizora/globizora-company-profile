# 🌐 Globizora Inc. - API Service

**Globizora Inc.** is a technology-driven company registered in **Wyoming, USA**.  
We build **AI platforms, internet infrastructure, SaaS applications, and automation services**.  

This repository demonstrates our **production-style API service**, developed with Node.js, Express.js, and MongoDB.  
It includes authentication, subscription management, API key generation, and Stripe (sandbox) integration.

---

## 🚀 Features

- **User Management**
  - Register & login with JWT authentication
  - Secure password hashing (bcrypt)
  - User profile and subscription tracking  

- **API Key Management**
  - Generate API keys for secure API calls
  - Track usage per user  

- **Subscription & Payments**
  - Plans: Free / Pro / Enterprise
  - Integrated with Stripe (sandbox mode for demonstration)
  - Webhook support for payment confirmation  

- **Service Monitoring**
  - `/status` → API health check  
  - `/metrics` → System metrics & database status  

- **Company Information**
  - `/company` endpoint returns company profile & pricing info  

- **Documentation**
  - Swagger UI available at `/docs`

---

## 🏢 Company Information

- **Name:** GLOBIZORA INC  
- **Industry:** AI platforms, SaaS, Internet infrastructure, Media  
- **Headquarters:** Sheridan, Wyoming, USA  
- **Email:** info@globizora.com  
- **Established:** 2025  

---

## 📦 Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/globizora/globizora-api-service.git
cd globizora-api-service/api
