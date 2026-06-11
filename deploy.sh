#!/bin/bash
# Local Deployment Helper Script for MagicMond Career Web

echo "🚀 Starting Local Deployment Prep..."

# Check git status
if [ -n "$(git status --porcelain)" ]; then
  echo "📦 Staging and committing changes..."
  git add .
  git commit -m "chore: deployment sync"
fi

# Push to GitHub
echo "📤 Pushing clean source code to GitHub..."
git push origin main

echo "✅ Local prep complete! Now log in to your VPS to pull and build."
