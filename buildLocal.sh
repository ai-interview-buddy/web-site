#!/bin/bash
set -e 

# Clean previous build
rm -rf .next out
rm -rf .next out2

# Build static export
npm run build

# Create target subfolder
mkdir -p out2/app-ai-interview-buddy
mv out/* out2/app-ai-interview-buddy/

# Serve the out directory
npx serve out2
