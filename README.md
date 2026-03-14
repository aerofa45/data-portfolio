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

# Skills Demonstrated

This project portfolio demonstrates experience in the following areas:

Data Analysis
Statistical analysis
Time-series analysis
Signal processing
Financial data analysis
Healthcare data analysis
Feature engineering
Data visualization
Interactive charting
Database design
REST API development
Full-stack web development
PostgreSQL
SQL querying
Drizzle ORM
Node.js / Express
React / Vite / Tailwind
Production deployment
Render cloud deployment
Environment configuration
Database migrations
Debugging deployment issues




# Case Studies (Detailed Project Descriptions)

## 1. Stock Price Prediction Model (Finance)

This project analyzes historical stock price data to understand time-series behavior and evaluate simple predictive indicators.
Daily price data including open, high, low, close, and volume was collected and cleaned before analysis.
Moving averages, rolling statistics, and trend indicators were computed to identify patterns in market behavior.
The model compares short-term and long-term moving averages to detect trend changes and potential buy or sell signals.
Visualization was implemented using interactive line charts to display price movement and prediction overlays.
The goal of the project was to demonstrate time-series analysis, financial data handling, and visualization of predictive trends.


## 2. Market Capitalization Analysis (Finance)

This case study examines market capitalization data across multiple companies to compare growth patterns and relative company size.
Data was grouped by company and date, and summary statistics were calculated to track market value changes over time.
The analysis focuses on identifying differences between large-cap, mid-cap, and small-cap companies.
Bar charts and trend plots were used to visualize how market capitalization evolves across different sectors.
The project demonstrates data aggregation, grouping, and comparative analysis using real financial datasets.

Skills demonstrated:

* Data aggregation
* SQL-style grouping
* Financial analytics
* Comparative visualization
* Trend analysis



## 3. Crypto Volatility Tracker (Finance)

This project analyzes cryptocurrency price data to measure volatility and detect unstable market periods.
Historical price data was processed to compute daily returns, standard deviation, and rolling volatility.
Different cryptocurrencies were compared to determine which assets show higher risk levels.
Area charts and line plots were used to visualize price fluctuations and volatility over time.
The analysis highlights how statistical metrics can be used to quantify financial risk.

Skills demonstrated:

* Statistical analysis
* Variance / standard deviation
* Time-series processing
* Financial risk analysis
* Interactive visualization



## 4. Patient Recovery Rate Analysis (Healthcare)

This project analyzes a healthcare dataset containing patient treatment outcomes.
The data was cleaned to remove missing values and grouped by treatment type and patient condition.
Recovery rates were computed using aggregation functions and compared across categories.
Bar charts were used to visualize differences in treatment effectiveness.
The goal was to demonstrate how data analysis can be used to evaluate medical outcomes.

Skills demonstrated:

* Data cleaning
* Grouping and aggregation
* Healthcare analytics
* Statistical comparison
* Visualization



## 5. Disease Spread Simulation (Healthcare)

This project models disease spread using time-based data to understand growth patterns.
Infection counts were analyzed over time to observe exponential growth behavior.
Different scenarios were simulated by changing parameters such as transmission rate.
Line charts were used to visualize infection curves and compare different conditions.
The project demonstrates how time-series data can be used to study epidemiological trends.

Skills demonstrated:

* Time-series modeling
* Simulation
* Growth analysis
* Visualization
* Mathematical interpretation


## 6. ECG Anomaly Detection (Biomedical Signal Processing)

This project analyzes ECG waveform data to identify abnormal patterns in heart signals.
Raw signal data was plotted to visualize peaks and intervals.
Irregularities in waveform shape were used to detect potential anomalies.
The project demonstrates basic signal processing techniques applied to biomedical data.
Visualization was used to highlight differences between normal and abnormal signals.



## 7. ECG Signal Noise Reduction (Biomedical Signal Processing)

This project focuses on improving ECG signal quality by removing noise from raw waveform data.
Filtering techniques were applied to smooth the signal and remove high-frequency noise.
The cleaned signal was compared with the original to show improvement.
Line plots were used to visualize before-and-after results.
The goal was to demonstrate preprocessing techniques used in real biomedical applications.



## 8. Speech Emotion Recognition (Audio Analysis)

This project analyzes audio features extracted from speech recordings to identify emotional tone.
Frequency-based features such as pitch and amplitude were computed from audio signals.
Feature distributions were compared across samples to observe differences.
Bar charts and frequency plots were used for visualization.
The project demonstrates feature extraction and analysis of audio data.




## 9. Audio Frequency Analysis (Signal Processing)

This project converts audio waveform data into the frequency domain using spectral analysis.
The goal was to understand how sound signals vary across frequencies.
Fourier-style transformations were used to compute frequency components.
Area charts were used to visualize amplitude versus frequency.
The project demonstrates signal processing techniques used in audio analysis.



## 10. Customer Churn Prediction (Data Analytics)

This project analyzes customer behavior data to identify factors associated with churn.
Features such as usage, subscription length, and activity level were compared.
Grouping and statistical summaries were used to find patterns related to customer loss.
Pie charts and bar charts were used to visualize churn distribution.
The goal was to demonstrate exploratory data analysis and pattern detection.


---



