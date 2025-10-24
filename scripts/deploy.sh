#!/bin/bash

# SmartScheduling Deployment Script
# This script builds and deploys the application

echo "🚀 Starting SmartScheduling deployment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ and try again."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Run linting
echo "🔍 Running ESLint..."
npm run lint

if [ $? -ne 0 ]; then
    echo "⚠️  Linting issues found, but continuing with build..."
fi

# Build the application
echo "🏗️  Building application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build completed successfully!"

# Export static files
echo "📤 Exporting static files..."
npm run export

if [ $? -ne 0 ]; then
    echo "❌ Export failed"
    exit 1
fi

echo "✅ Static files exported to 'out' directory"

# Check if deployment target is specified
if [ "$1" = "netlify" ]; then
    echo "🌐 Deploying to Netlify..."
    # Add Netlify deployment commands here
elif [ "$1" = "vercel" ]; then
    echo "🌐 Deploying to Vercel..."
    # Add Vercel deployment commands here
elif [ "$1" = "docker" ]; then
    echo "🐳 Building Docker image..."
    docker build -t smartscheduling .
    if [ $? -eq 0 ]; then
        echo "✅ Docker image built successfully!"
        echo "Run with: docker run -p 3000:3000 smartscheduling"
    else
        echo "❌ Docker build failed"
        exit 1
    fi
else
    echo "📁 Static files ready for deployment in 'out' directory"
    echo "You can upload the contents of the 'out' directory to any static hosting service"
fi

echo "🎉 Deployment process completed!"
echo ""
echo "📋 Next steps:"
echo "1. Upload the 'out' directory to your hosting service"
echo "2. Configure environment variables if needed"
echo "3. Set up custom domain (optional)"
echo "4. Test the deployed application"
echo ""
echo "🔗 Useful links:"
echo "- Documentation: README.md"
echo "- ThemeForest Docs: THEMEFOREST_DOCUMENTATION.md"
echo "- Demo: /demo"
echo "- Dashboard: /dashboard"
