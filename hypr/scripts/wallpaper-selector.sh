#!/usr/bin/env bash
WALLDIR="$HOME/Pictures/Wallpapers"
CWD="$(pwd)"
cd "$WALLDIR" || exit 1
IFS=$'\n'
CURR_THEME=$(cat ~/.config/fish/current_theme)

FILE=$(for a in $CURR_THEME/*; do echo -en "$a\n"; done | rofi -dmenu -p "")

# Apply wallpaper if selected
if [ -n "$FILE" ]; then
    /usr/bin/awww img "$WALLDIR/$FILE" -t wipe --transition-fps 165
    cp "$WALLDIR/$FILE" "$HOME/Pictures/Wallpapers/active_wallpaper"
fi

cd "$CWD" || exit
