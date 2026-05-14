#!/bin/bash
ROUNDING=$(hyprctl getoption -j decoration.rounding | jq -r '.int')

if [ "$ROUNDING" -ne 0 ]; then
	cp "$HOME/Pictures/Wallpapers/black.png" \
		"$HOME/Pictures/Wallpapers/active_wallpaper"

	matugen image "$HOME/Pictures/Wallpapers/black.png" \
		--source-color-index 0

	hyprctl eval 'hl.config({
        decoration = {
            rounding = 0
        },
        general = {
            gaps_in = 0,
            gaps_out = 0
        },
        animations = {
            enabled = false
        }
    })'

else
	"$HOME/.config/hypr/scripts/wallpaper-selector.sh"
fi
