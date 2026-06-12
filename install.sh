#!/bin/bash

echo "Installing dependencies..."
yay -S --noconfirm --needed \
	fish \
	hyprland \
	kitty \
	neovim \
	swaync \
	waybar \
	matugen \
	rofi \
	starship \
	stow

clear
mkdir -p "$HOME/.local/bin/"

if [ -e "$HOME/kitty" ]; then
	mv "$HOME/kitty" -r "$HOME/kitty.old"
fi
if [ -e "$HOME/fish" ]; then
	mv "$HOME/fish" -r "$HOME/fish.old"
fi
stow fish hyprland kitty neovim swaync waybar matugen rofi starship gtk rofi-wifi-menu

sudo chmod +x "$HOME/.local/bin/rofi-wifi-menu"
mkdir -p "$HOME/Pictures/Wallpapers"
read -p "You must put at least one wallpaper in ~/Pictures/Wallpapers now. Once you have done that, press any button to continue" -n 1 -r

WALLPAPER_DIR="$HOME/Pictures/Wallpapers"
CURRENT_WALL="$WALLPAPER_DIR/active_wallpaper"
first_image=$(find "$WALLPAPER_DIR" -maxdepth 1 -type f \( \
	-iname "*.jpg" -o \
	-iname "*.jpeg" -o \
	-iname "*.png" -o \
	-iname "*.gif" -o \
	-iname "*.webp" \
	\) | sort | head -n 1)

cp "$first_image" "$CURRENT_WALL"

matugen image "$CURRENT_WALL" --source-color-index 0 >/dev/null 2>&1
