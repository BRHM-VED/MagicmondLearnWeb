#!/bin/bash
# VPS Build & Deploy Script for MagicMond Career Web
# Location on VPS: /Production/Magicmond/vps-deploy.sh

echo "🚀 Starting VPS Build & Deployment..."

# Navigate to the project directory
cd /Production/Magicmond || exit

# 1. Pull latest changes from GitHub
echo "📥 Pulling latest code from GitHub..."
git pull origin main

# 2. Install dependencies
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

# 3. Build the production bundle
echo "🏗️ Building production static files..."
npm run build

# 4. Reload Nginx to serve the new static files
echo "🔄 Reloading Nginx..."
sudo systemctl reload nginx

echo "✅ VPS Deployment completed successfully!"
