#!/bin/bash
# VPS Build & Deploy Script for MagicMond Career Web
# Location on VPS: /Production/Magicmond/vps-deploy.sh

echo "🚀 Starting VPS Build & Deployment..."

# Load Node.js (nvm) on VPS
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Navigate to the directory where this script lives (project root)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR" || exit

# 1. Pull latest changes from GitHub
echo "📥 Pulling latest code from GitHub..."
git pull origin main

# 2. Install dependencies
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

# 3. Build the production bundle
echo "🏗️ Building production static files..."
npm run build

# 4. Point Nginx to this project's dist folder (keeps existing SSL/Certbot config)
echo "🔧 Updating Nginx dist path..."
NGINX_SITE="/etc/nginx/sites-available/magicmond-career"
sudo sed -i "s|^[[:space:]]*root .*;|    root $SCRIPT_DIR/dist;|" "$NGINX_SITE"
sudo chmod -R 755 "$SCRIPT_DIR/dist"

# 5. Reload Nginx to serve the new static files
echo "🔄 Reloading Nginx..."
sudo nginx -t || exit 1
sudo systemctl reload nginx

echo "✅ VPS Deployment completed successfully!"
