#!/bin/bash

if ! command -v nvm > /dev/null 2>&1; then
    echo "Installing NVM (Node Version Manager)..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
fi

if [ -z "$NVM_DIR" ]; then
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
fi

if ! command -v nvm > /dev/null 2>&1; then
    echo "NVM installation failed. Please check your system."
    exit 1
fi

echo "Installing Node.js version 20.12.2..."
nvm install 20.12.2
nvm use 20.12.2

node_version=$(node -v)
if [ "$node_version" != "v20.12.2" ]; then
    echo "Failed to install Node.js version 20.12.2. Current version: $node_version"
    exit 1
fi
echo "Node.js version: $node_version"
echo "NPM version: $(npm -v)"
dependencies=(
    libx11-xcb1
    libxtst6
    libnss3
    libatk-bridge2.0-0
    libgtk-3-0
    libxcomposite1
    libxrandr2
    libasound2
    libcups2
    libgbm1
    libpangocairo-1.0-0
)
echo "Installing system dependencies..."
for lib in "${dependencies[@]}"; do
    if ! dpkg -l | grep -qw "$lib"; then
        apt-get install -y "$lib"
    fi
done

if [ ! -d "node_modules" ]; then
    echo "Installing Node.js dependencies..."
    npm install puppeteer
    npm install tesseract.js
fi

echo "Setup complete. Node.js version 20.12.2 and all dependencies are installed."
