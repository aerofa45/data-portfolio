import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Seed data if empty
  const existing = await storage.getPortfolios();
  if (existing.length === 0) {
    console.log("Seeding portfolios...");
    const seeds = [
      {
        title: "Stock Price Prediction Model",
        description: "LSTM-based neural network for predicting S&P 500 movements.",
        category: "Finance",
        visualizationType: "line",
        imageUrl: "https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80&w=1000",
        codeSnippet: `import numpy as np
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense

model = Sequential()
model.add(LSTM(50, return_sequences=True, input_shape=(100, 1)))
model.add(LSTM(50, return_sequences=False))
model.add(Dense(25))
model.add(Dense(1))
model.compile(optimizer='adam', loss='mean_squared_error')`,
        data: [
          { name: "Day 1", value: 100 }, { name: "Day 2", value: 120 }, { name: "Day 3", value: 115 },
          { name: "Day 4", value: 130 }, { name: "Day 5", value: 125 }, { name: "Day 6", value: 140 },
          { name: "Day 7", value: 135 }, { name: "Day 8", value: 150 }, { name: "Day 9", value: 145 },
          { name: "Day 10", value: 160 }
        ]
      },
      {
        title: "Market Cap Analysis",
        description: "Comparative analysis of top tech companies market capitalization.",
        category: "Finance",
        visualizationType: "bar",
        imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1000",
        codeSnippet: `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('market_cap.csv')
plt.figure(figsize=(10,6))
plt.bar(df['Company'], df['MarketCap'])
plt.title('Top Tech Market Caps')
plt.show()`,
        data: [
          { name: "Apple", value: 2800 }, { name: "Microsoft", value: 2500 },
          { name: "Google", value: 1800 }, { name: "Amazon", value: 1600 },
          { name: "Nvidia", value: 1200 }
        ]
      },
      {
        title: "Crypto Volatility Tracker",
        description: "Real-time volatility index for Bitcoin and Ethereum.",
        category: "Finance",
        visualizationType: "area",
        imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=1000",
        codeSnippet: `def calculate_volatility(prices):
    log_returns = np.log(prices / prices.shift(1))
    return log_returns.std() * np.sqrt(365)`,
        data: [
          { name: "10:00", value: 10 }, { name: "11:00", value: 40 }, { name: "12:00", value: 30 },
          { name: "13:00", value: 70 }, { name: "14:00", value: 20 }, { name: "15:00", value: 50 },
          { name: "16:00", value: 80 }
        ]
      },
      {
        title: "Patient Recovery Rates",
        description: "Analysis of recovery times across different treatment groups.",
        category: "Healthcare",
        visualizationType: "bar",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
        codeSnippet: `import seaborn as sns
sns.boxplot(x='Treatment', y='RecoveryTime', data=patients)
plt.title('Recovery Time by Treatment')`,
        data: [
          { name: "Group A", value: 12 }, { name: "Group B", value: 8 },
          { name: "Group C", value: 15 }, { name: "Group D", value: 10 }
        ]
      },
      {
        title: "Disease Spread Simulation",
        description: "SIR model simulation for infectious disease spread.",
        category: "Healthcare",
        visualizationType: "line",
        imageUrl: "https://images.unsplash.com/photo-1584036561566-b9374436587d?auto=format&fit=crop&q=80&w=1000",
        codeSnippet: `def sir_model(y, t, N, beta, gamma):
    S, I, R = y
    dSdt = -beta * S * I / N
    dIdt = beta * S * I / N - gamma * I
    dRdt = gamma * I
    return dSdt, dIdt, dRdt`,
        data: [
          { name: "Day 1", value: 1 }, { name: "Day 5", value: 50 }, { name: "Day 10", value: 500 },
          { name: "Day 15", value: 2000 }, { name: "Day 20", value: 4000 }, { name: "Day 25", value: 3000 },
          { name: "Day 30", value: 1000 }
        ]
      },
      {
        title: "ECG Anomaly Detection",
        description: "Detecting arrhythmias using deep learning on ECG data.",
        category: "ECG",
        visualizationType: "line",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-217358c7e618?auto=format&fit=crop&q=80&w=1000",
        codeSnippet: `# Autoencoder for anomaly detection
input_layer = Input(shape=(140,))
encoder = Dense(32, activation="relu")(input_layer)
decoder = Dense(140, activation="sigmoid")(encoder)
autoencoder = Model(inputs=input_layer, outputs=decoder)`,
        data: [
          { name: "0ms", value: 0 }, { name: "100ms", value: 10 }, { name: "200ms", value: -5 },
          { name: "300ms", value: 80 }, { name: "400ms", value: -20 }, { name: "500ms", value: 0 },
          { name: "600ms", value: 10 }
        ]
      },
      {
        title: "ECG Signal Noise Reduction",
        description: "Applying wavelet transform to clean noisy ECG signals.",
        category: "ECG",
        visualizationType: "line",
        imageUrl: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1000",
        codeSnippet: `import pywt
coeffs = pywt.wavedec(signal, 'db4', level=6)
threshold = 0.5
coeffs_thresh = [pywt.threshold(c, threshold, mode='soft') for c in coeffs]`,
        data: [
          { name: "0", value: 5 }, { name: "1", value: 7 }, { name: "2", value: 4 },
          { name: "3", value: 80 }, { name: "4", value: 2 }, { name: "5", value: 6 },
          { name: "6", value: 4 }
        ]
      },
      {
        title: "Speech Emotion Recognition",
        description: "Classifying emotion from audio files using MFCC features.",
        category: "Audio",
        visualizationType: "bar",
        imageUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?auto=format&fit=crop&q=80&w=1000",
        codeSnippet: `import librosa
y, sr = librosa.load(audio_file)
mfccs = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=40)
model.predict(mfccs)`,
        data: [
          { name: "Happy", value: 85 }, { name: "Sad", value: 10 },
          { name: "Angry", value: 5 }, { name: "Neutral", value: 20 }
        ]
      },
      {
        title: "Audio Frequency Analysis",
        description: "Spectral analysis of industrial machinery sounds for maintenance.",
        category: "Audio",
        visualizationType: "area",
        imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000",
        codeSnippet: `D = librosa.amplitude_to_db(np.abs(librosa.stft(y)), ref=np.max)
librosa.display.specshow(D, y_axis='log', x_axis='time')`,
        data: [
          { name: "100Hz", value: 30 }, { name: "500Hz", value: 80 },
          { name: "1kHz", value: 60 }, { name: "5kHz", value: 40 },
          { name: "10kHz", value: 20 }
        ]
      },
      {
        title: "Customer Churn Prediction",
        description: "Predicting user churn based on usage patterns.",
        category: "General",
        visualizationType: "pie",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
        codeSnippet: `from sklearn.ensemble import RandomForestClassifier
clf = RandomForestClassifier(max_depth=2, random_state=0)
clf.fit(X, y)`,
        data: [
          { name: "Retained", value: 700 }, { name: "Churned", value: 300 }
        ]
      }
    ];

    for (const p of seeds) {
      await storage.createPortfolio(p as any);
    }
  }

  app.get(api.portfolios.list.path, async (req, res) => {
    const items = await storage.getPortfolios();
    res.json(items);
  });

  app.get(api.portfolios.get.path, async (req, res) => {
    const item = await storage.getPortfolio(Number(req.params.id));
    if (!item) {
      return res.status(404).json({ message: "Portfolio not found" });
    }
    res.json(item);
  });

  return httpServer;
}
