#!/bin/bash

# Exit on error
set -e

echo "Starting local deployment checks..."

# 1. Clean local dist
rm -rf dist

# 2. Test build locally to ensure no compile errors
echo "Testing build locally to verify no compile errors..."
npm run build

# 3. Clean up the built dist directory locally
rm -rf dist

# 4. Stage and commit clean source files (respects .gitignore)
echo "Staging source files..."
git add .

echo "Committing changes..."
git commit -m "deploy: update environment setup and clean build assets" || echo "No changes to commit"

# 5. Push clean source code to GitHub
echo "Pushing clean source code to origin..."
CURRENT_BRANCH=$(git symbolic-ref --short HEAD)
git push origin "$CURRENT_BRANCH"

echo "Source code successfully pushed to GitHub!"
echo "Now, run the VPS deployment script on your server to pull and compile the update:"
echo "  cd /Production/Magicmond/MagicmondLearnWeb && ./vps-deploy.sh"
