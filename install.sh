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
	starship

mkdir -p "$HOME/Pictures/Wallpapers"
