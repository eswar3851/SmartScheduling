@echo off
REM SmartScheduling Deployment Script for Windows
REM This script builds and deploys the application

echo 🚀 Starting SmartScheduling deployment...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ and try again.
    pause
    exit /b 1
)

echo ✅ Node.js version:
node --version

REM Install dependencies
echo 📦 Installing dependencies...
npm ci

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

REM Run linting
echo 🔍 Running ESLint...
npm run lint

if %errorlevel% neq 0 (
    echo ⚠️  Linting issues found, but continuing with build...
)

REM Build the application
echo 🏗️  Building application...
npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed
    pause
    exit /b 1
)

echo ✅ Build completed successfully!

REM Export static files
echo 📤 Exporting static files...
npm run export

if %errorlevel% neq 0 (
    echo ❌ Export failed
    pause
    exit /b 1
)

echo ✅ Static files exported to 'out' directory

REM Check deployment target
if "%1"=="netlify" (
    echo 🌐 Deploying to Netlify...
    REM Add Netlify deployment commands here
) else if "%1"=="vercel" (
    echo 🌐 Deploying to Vercel...
    REM Add Vercel deployment commands here
) else if "%1"=="docker" (
    echo 🐳 Building Docker image...
    docker build -t smartscheduling .
    if %errorlevel% equ 0 (
        echo ✅ Docker image built successfully!
        echo Run with: docker run -p 3000:3000 smartscheduling
    ) else (
        echo ❌ Docker build failed
        pause
        exit /b 1
    )
) else (
    echo 📁 Static files ready for deployment in 'out' directory
    echo You can upload the contents of the 'out' directory to any static hosting service
)

echo 🎉 Deployment process completed!
echo.
echo 📋 Next steps:
echo 1. Upload the 'out' directory to your hosting service
echo 2. Configure environment variables if needed
echo 3. Set up custom domain (optional)
echo 4. Test the deployed application
echo.
echo 🔗 Useful links:
echo - Documentation: README.md
echo - ThemeForest Docs: THEMEFOREST_DOCUMENTATION.md
echo - Demo: /demo
echo - Dashboard: /dashboard

pause
