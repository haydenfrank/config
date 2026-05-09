#!/usr/bin/env bash

WALLPAPER_DIR="$HOME/Pictures/Wallpapers"
CURRENT_WALL="$WALLPAPER_DIR/active_wallpaper"

declare -A WALLMAP

# Build list of wallpapers (name -> full path)
while IFS= read -r file; do
    name="$(basename "$file")"
    WALLMAP["$name"]="$file"
done < <(find "$WALLPAPER_DIR" -type f \
    \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \))

# Show only filenames in rofi
selected_name=$(printf "%s\n" "${!WALLMAP[@]}" | sort | rofi -dmenu -i -p "Wallpaper")

# Exit if nothing selected
[ -z "$selected_name" ] && exit 0

selected="${WALLMAP[$selected_name]}"

# Apply wallpaper
cp "$selected" "$CURRENT_WALL"

# Run matugen
matugen image "$CURRENT_WALL" --source-color-index 1
