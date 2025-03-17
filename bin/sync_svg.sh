#!/bin/bash

# Configuration
SOURCE_REPO="https://github.com/artcoholic/akar-icons-app.git"
SOURCE_BRANCH="main"
SOURCE_DIR="src/svg" # Directory to extract from source repo
TARGET_DIR="src/svg" # Where to place files in your repo
TARGET_REPO="https://github.com/Tasta-app/react-native-akar-icons.git" # Replace with your repo
TARGET_BRANCH="akar-icons-sync"

ROOT_PATH=$(pwd)

# Temporary directory for cloning
TEMP_DIR=$(mktemp -d)

echo "📥 Cloning source repository..."
git clone --depth=1 --filter=blob:none --sparse "$SOURCE_REPO" "$TEMP_DIR"
cd "$TEMP_DIR" || exit 1

echo "📂 Setting up sparse checkout..."
git sparse-checkout set --no-cone "$SOURCE_DIR"
git checkout "$SOURCE_BRANCH"

# Prepare target repo
if [ ! -d "$ROOT_PATH/$TARGET_DIR" ]; then
  mkdir -p "$ROOT_PATH/$TARGET_DIR"
fi

if [ -d "$ROOT_PATH/$TARGET_DIR" ]; then
    echo "🗑 Clearing old SVG files..."
    find "$ROOT_PATH/$TARGET_DIR" -type f -delete
else
    echo "📁 Target directory does not exist. Creating it now..."
    mkdir -p "$ROOT_PATH/$TARGET_DIR"
fi

echo "🚚 Copying SVG files to target directory..."
cp -r "$TEMP_DIR/$SOURCE_DIR"/* "$ROOT_PATH/$TARGET_DIR"/

# Navigate to your project repository
cd - > /dev/null 2>&1
if [ ! -d ".git" ]; then
  echo "❌ Error: This is not a git repository. Please run this script inside your project."
  exit 1
fi

# Create or switch to the sync branch
git checkout -B "$TARGET_BRANCH"

# Add changes
git add "$TARGET_DIR"
if git diff --cached --quiet; then
  echo "✅ No changes to commit. Icons are already up to date."
else
  git commit -m "chore: updates icons from akar-icons"
  echo "🚀 Sync complete! Icons updated."
fi

# Clean up
rm -rf "$TEMP_DIR"
