# Data Science Portfolio - Complete Self-Hosting Guide

## Overview
Your portfolio application is built with:
- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Express.js + Node.js
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM

---

## Part 1: Getting Full Source Code

### Option A: Download from Replit
1. Go to your Replit project
2. Click **Tools** → **Git** → **Git History**
3. Copy the GitHub URL
4. Clone locally: `git clone <url>`

### Option B: Export Files Manually
1. Download the entire project folder
2. Copy these key directories:
   ```
   client/          → Frontend code
   server/          → Backend code
   shared/          → Shared types & schema
   package.json     → Dependencies
   vite.config.ts   → Build configuration
   drizzle.config.ts → Database config
   ```

---

## Part 2: Local Development Setup

### Prerequisites
- **Node.js 18+** - https://nodejs.org
- **PostgreSQL 12+** - https://www.postgresql.org/download
- **Git** (optional)

### Step 1: Install Dependencies
```bash
cd my-portfolio
npm install
```

### Step 2: Create PostgreSQL Database
```bash
# Start PostgreSQL
# On macOS: brew services start postgresql
# On Linux: sudo systemctl start postgresql
# On Windows: Start PostgreSQL from Services

# Create database
createdb portfolio_db

# Get connection string
postgresql://localhost:5432/portfolio_db
```

### Step 3: Configure Environment
Create `.env` file in project root:
```bash
DATABASE_URL=postgresql://postgres:password@localhost:5432/portfolio_db
SESSION_SECRET=your-random-secret-key-12345
NODE_ENV=development
PORT=5000
```

### Step 4: Initialize Database
```bash
npm run db:push
```

### Step 5: Start Development Server
```bash
npm run dev
```
Visit: http://localhost:5000

---

## Part 3: Fix Image Loading Issues

If images aren't showing in portfolio:

**Solution 1: Use External URLs (Recommended)**
The app uses Unsplash URLs by default - these work everywhere. No changes needed.

**Solution 2: Local Images**
1. Create `public/images/` folder
2. Add your images there
3. Update `server/routes.ts` to use local paths:
```typescript
imageUrl: "/images/my-image.jpg"
```

**Solution 3: CORS Issues**
If images fail to load:
- Check browser DevTools → Network tab
- Use images from CORS-enabled sources (Unsplash, Pexels, Pixabay)
- Avoid restricted image sources

---

## Part 4: Production Deployment

### Option 1: Render.com (Easiest, Free Tier Available)

**Steps:**
1. Push code to GitHub
2. Sign up at https://render.com
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Build Command**: `npm run build`
   - **Start Command**: `npm run start`
   - **Environment Variables**:
     - `DATABASE_URL`: [Render PostgreSQL URL]
     - `SESSION_SECRET`: Generate random string
     - `NODE_ENV`: `production`

6. Click **Create Web Service**
7. Render builds and deploys automatically

**Cost**: Free tier available (limited, paid options for production)

---

### Option 2: Railway.app (Simple, Good Free Tier)

**Steps:**
1. Sign up at https://railway.app
2. Click "New Project"
3. Select "Deploy from GitHub"
4. Choose your repository
5. Railway auto-detects Node.js
6. Add PostgreSQL plugin:
   - Click "Add Service" → PostgreSQL
   - It auto-configures `DATABASE_URL`
7. Set environment variables:
   - `SESSION_SECRET`: Random string
   - `NODE_ENV`: `production`
8. Deploy automatically

**Cost**: $5/month free credit, pay-as-you-go

---

### Option 3: Vercel (Frontend) + Railway (Backend)

**Vercel (Frontend only):**
1. Push to GitHub
2. Sign up at https://vercel.com
3. Import project
4. Set root directory: `client`
5. Deploy

**Railway (Backend + Database):**
1. Deploy backend separately to Railway
2. Update frontend to call backend API:
   ```typescript
   // client/src/lib/queryClient.ts
   const API_URL = process.env.VITE_API_URL || 'https://your-backend.railway.app'
   ```

---

### Option 4: Self-Hosted VPS (DigitalOcean, Linode, AWS)

**Ubuntu/Debian Server:**

```bash
# 1. SSH into server
ssh root@your-server-ip

# 2. Install Node.js & PostgreSQL
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs postgresql postgresql-contrib

# 3. Clone project
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# 4. Install dependencies
npm install

# 5. Create database
sudo -u postgres createdb portfolio_db

# 6. Create .env file
cat > .env << EOF
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/portfolio_db
SESSION_SECRET=$(openssl rand -base64 32)
NODE_ENV=production
PORT=5000
EOF

# 7. Initialize database
npm run db:push

# 8. Build for production
npm run build

# 9. Install PM2 for process management
sudo npm install -g pm2

# 10. Start application
pm2 start "npm run start" --name "portfolio"
pm2 save
pm2 startup

# 11. Setup Nginx reverse proxy (optional, for HTTPS)
sudo apt-get install -y nginx certbot python3-certbot-nginx

# Create Nginx config
sudo tee /etc/nginx/sites-available/portfolio > /dev/null <<EOF
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Enable Nginx config
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl start nginx

# Add SSL certificate
sudo certbot --nginx -d yourdomain.com
```

---

## Part 5: Environment Variables Reference

| Variable | Purpose | Example |
|----------|---------|---------|
| `DATABASE_URL` | PostgreSQL connection | `postgresql://user:pass@host/db` |
| `SESSION_SECRET` | Encrypt session cookies | `random-32-char-string` |
| `NODE_ENV` | Environment mode | `production` or `development` |
| `PORT` | Server port | `5000` |
| `VITE_API_URL` | Frontend API endpoint | `https://api.example.com` |

---

## Part 6: Build for Production

```bash
# Build both frontend and backend
npm run build

# Output:
# - dist/public/      (Frontend assets)
# - dist/index.cjs    (Backend bundle)

# Start production server
npm run start

# Or with PM2
pm2 start dist/index.cjs --name "portfolio"
```

---

## Part 7: Troubleshooting

### Database Connection Failed
```
Error: ECONNREFUSED 127.0.0.1:5432
```
**Solution:**
- Ensure PostgreSQL is running: `psql -U postgres`
- Check DATABASE_URL format
- Verify credentials

### Port 5000 Already in Use
```bash
# Use different port
PORT=3000 npm run dev

# Or kill process on 5000
lsof -ti:5000 | xargs kill -9
```

### Images Not Loading
- Check browser DevTools → Network tab
- Verify image URLs are accessible
- Try external URLs first (Unsplash, etc.)
- For local images, ensure they're in `public/` folder

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install
npm run build
```

### Database Migration Issues
```bash
# Force push schema changes
npm run db:push -- --force
```

---

## Part 8: Customization

### Change Portfolio Items
Edit `server/routes.ts` - update seed data in `registerRoutes()` function

### Update Branding
- Site name: `Navigation.tsx` - change "Analytica" to your name
- Colors: `client/src/index.css` - update CSS variables
- Domain: Update in `client/src/App.tsx`

### Add New Pages
1. Create file in `client/src/pages/YourPage.tsx`
2. Register route in `client/src/App.tsx`
3. Add navigation link in `client/src/components/Navigation.tsx`

---

## Summary

**For Local Development:**
1. Install dependencies: `npm install`
2. Create `.env` with DATABASE_URL and SESSION_SECRET
3. Run `npm run db:push`
4. Start: `npm run dev`

**For Production:**
- **Easiest**: Use Render.com or Railway.app (auto-deploy from GitHub)
- **Self-hosted**: Follow VPS setup above with PM2 + Nginx

