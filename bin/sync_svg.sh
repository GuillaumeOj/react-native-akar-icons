#!/bin/bash

# #############
# Configuration
# #############
# Project
ROOT_PATH=$(pwd)
# Source
SOURCE_REPO="https://github.com/artcoholic/akar-icons-app.git"
SOURCE_BRANCH="main"
SOURCE_DIR="src/svg" # Directory to extract from source repo
# Target
TARGET_DIR="src/svg" # Where to place files the repo
TARGET_REPO="https://github.com/Tasta-app/react-native-akar-icons.git"
TARGET_BRANCH="akar-icons-sync-$(date '+%Y-%m-%d-%H-%M-%S')"

# ######
# Script
# ######
# Temporary directory for cloning source repo
TEMP_DIR=$(mktemp -d)

# Cloning
echo "📥 Cloning source repository..."
git clone --depth=1 --filter=blob:none --sparse "$SOURCE_REPO" "$TEMP_DIR"
cd "$TEMP_DIR" || exit 1

echo "📂 Setting up sparse checkout..."
git sparse-checkout set --no-cone "$SOURCE_DIR"
git checkout "$SOURCE_BRANCH"

# Copying
if [ -d "$ROOT_PATH/$TARGET_DIR" ]; then
    echo "🗑 Clearing old SVG files..."
    find "$ROOT_PATH/$TARGET_DIR" -type f -delete
else
    echo "📁 Target directory does not exist. Creating it now..."
    mkdir -p "$ROOT_PATH/$TARGET_DIR"
fi

echo "🚚 Copying SVG files to target directory..."
cp -r "$TEMP_DIR/$SOURCE_DIR"/* "$ROOT_PATH/$TARGET_DIR"/

# Navigate back to the project repository
cd - > /dev/null 2>&1
if [ ! -d ".git" ]; then
  echo "❌ Error: This is not a git repository. Please run this script inside your project."
  exit 1
fi

# Create or switch to the sync branch
git checkout -B "$TARGET_BRANCH"

# Commit changes
git add "$TARGET_DIR"
if git diff --cached --quiet; then
  echo "✅ No changes to commit. Icons are already up to date."
else
  git commit -m "chore: updates icons from akar-icons"
  echo "🚀 Sync complete! Icons updated."
fi

# Clean up
rm -rf "$TEMP_DIR"
