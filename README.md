# Data Science Portfolio

A full-stack data science portfolio showcasing analysis projects across Finance, Healthcare, ECG, and Audio domains.
Built with React, Express, PostgreSQL, and Drizzle ORM.
Styled with a dark theme, gold accents, parallax scrolling, and animated UI effects.

---

## Live Demo

[![Open Portfolio](https://img.shields.io/badge/Open-Live%20Portfolio-black?style=for-the-badge)](https://data-portfolio-w1ip.onrender.com/portfolios)

Direct link:
https://data-portfolio-w1ip.onrender.com/portfolios

---

## Tech Stack

Frontend
React 18
Vite
Tailwind CSS
Framer Motion
Recharts

Backend
Node.js
Express.js

Database
PostgreSQL
Drizzle ORM

Deployment
Render.com

---

## Local Development

### Install dependencies

npm install

### Create .env file

Create a file named `.env` in the project root

DATABASE_URL=your_postgres_url
SESSION_SECRET=testsecret
NODE_ENV=development
PORT=5000

### Push database schema

npm run db:push

### Start development server

npm run dev

Open in browser

http://localhost:5000

---

## Deployment (Render)

1. Push project to GitHub

2. Create PostgreSQL database on Render

3. Copy External Database URL

4. Create Web Service on Render

5. Use these settings

Build Command

npm install --include=dev && npm run build

Start Command

npm run start

6. Add Environment Variables

DATABASE_URL=your_render_database_url
SESSION_SECRET=random_secret_string
NODE_ENV=production

7. Push schema once locally

npx drizzle-kit push

8. Redeploy service

Manual Deploy → Clear build cache & deploy

---

## Projects Included

1. Stock Price Prediction
2. Market Cap Analysis
3. Crypto Volatility Tracker
4. Patient Recovery Rates
5. Disease Spread Simulation
6. ECG Anomaly Detection
7. ECG Signal Filtering
8. Speech Emotion Recognition
9. Audio Frequency Analysis
10. Customer Churn Prediction

---
