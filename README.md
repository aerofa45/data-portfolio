# Data Science Portfolio

A data science portfolio showcasing 10 analysis projects across Finance, Healthcare, ECG, and Audio domains. Inspired by the Audemars Piguet aesthetic — dark theme, gold accents, parallax scrolling, and magnetic button effects.

## Tech Stack

- **Frontend**: React 18 + Vite + Tailwind CSS + Framer Motion + Recharts
- **Backend**: Express.js + Node.js
- **Database**: PostgreSQL + Drizzle ORM

## Local Development

### 1. Install dependencies
```
npm install
```

### 2. Set up environment
```
cp .env.example .env
```
Edit `.env` with your PostgreSQL credentials.

### 3. Initialize database
```
npm run db:push
```

### 4. Start server
```
npm run dev
```
Open http://localhost:5000

---

## Steps to deploy on Render.com:

1. Push this folder to a GitHub repository
2. Sign up at https://render.com
3. Click **New +** → **Web Service**
4. Connect your GitHub repository
5. Configure:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
6. Add environment variables:
   - `DATABASE_URL` — your PostgreSQL connection string
   - `SESSION_SECRET` — any long random string
   - `NODE_ENV` — `production`
7. Click **Create Web Service**


---

## Projects Included

| # | Title | Domain | Chart Type |
|---|-------|--------|------------|
| 1 | Stock Price Prediction Model | Finance | Line |
| 2 | Market Cap Analysis | Finance | Bar |
| 3 | Crypto Volatility Tracker | Finance | Area |
| 4 | Patient Recovery Rates | Healthcare | Bar |
| 5 | Disease Spread Simulation | Healthcare | Line |
| 6 | ECG Anomaly Detection | ECG | Line |
| 7 | ECG Signal Noise Reduction | ECG | Line |
| 8 | Speech Emotion Recognition | Audio | Bar |
| 9 | Audio Frequency Analysis | Audio | Area |
| 10 | Customer Churn Prediction | General | Pie |
