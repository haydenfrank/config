#!/usr/bin/env bash
set -euo pipefail

WORKDIR="$(realpath "$(dirname "$0")/..")" # theme-switcher root directory
THEMEDIR="$WORKDIR/themes"
CURRTHEME="$(cat "$WORKDIR/active" 2>/dev/null || echo "none")"

list_themes() {
  for theme in "$THEMEDIR"/*; do
    [ -d "$theme" ] && basename "$theme"
  done
}

pick_theme() {
  list_themes | rofi -dmenu -p "theme" || true
  return
}

COLOR="$(pick_theme)"
if [ -z "$COLOR" ] || [ "$COLOR" = "$CURRTHEME" ]; then
  echo "No new theme selected, exiting." >&2
  exit 1
fi
echo $COLOR >$WORKDIR/active
echo "Selected theme: $COLOR"

gsettings set org.gnome.desktop.interface gtk-theme "$COLOR"
echo "Set GTK theme: $COLOR"

ROFI_THEME="$WORKDIR/themes/$COLOR/rofi/$COLOR.rasi"
ROFI_LINK="$HOME/.local/share/rofi/themes/curr_theme.rasi"
ln -sfn "$ROFI_THEME" "$ROFI_LINK"
echo "Set Rofi theme: $COLOR"

ln -sfn $WORKDIR/themes/$COLOR/waybar/$COLOR.css $HOME/.config/waybar/active_color.css
$HOME/.config/waybar/scripts/launch.sh &>/dev/null
echo "Set Waybar theme: $COLOR"

ln -sfn $WORKDIR/themes/$COLOR/terminal-sequences/$COLOR.txt $HOME/.config/fish/active.txt
for tty in /dev/pts/*; do
  [ -e "$tty" ] || continue
  [ "$tty" = "/dev/ptmx" ] && continue
  owner=$(stat -c %U "$tty" 2>/dev/null || true)
  if [ "$owner" = "$(whoami)" ]; then
    printf "%s" "$(cat "$HOME/.config/fish/active.txt")" >"$tty" 2>/dev/null || true
    printf '\033[0m' >"$tty" 2>/dev/null || true
  fi
done
echo "Set Terminal sequences: $COLOR"

cp $WORKDIR/active $HOME/.config/fish/current_theme
echo "Set Neovim colorscheme: $COLOR"

WALL_BASE="$HOME/Pictures/Wallpapers"
WALL_DIR="$WALL_BASE/$COLOR"

mapfile -t WALLS < <(find "$WALL_DIR" -type f \( -iname "*.jpg" -o -iname "*.png" -o -iname "*.webp" \))

RANDOM_WALL="${WALLS[$RANDOM%${#WALLS[@]}]}"
awww img "$RANDOM_WALL" -t wipe --transition-fps 165 --transition-duration 0.3
cp -a "$RANDOM_WALL" "$WALL_BASE/active_wallpaper"
echo "Set random $COLOR wallpaper: $RANDOM_WALL"

SPICETIFY_BIN="$(command -v spicetify)"
SPOTIFY_WORKSPACE=$($WORKDIR/scripts/find_spotify_workspace.py)
ACTIVE_WORKSPACE=$($WORKDIR/scripts/find_active_workspace.py)
WAS_PLAYING=$(playerctl -p spotify status || true)
TIME=$(playerctl -p spotify position || true)

if [ "$SPOTIFY_WORKSPACE" != "-1" ] && [ "$SPOTIFY_WORKSPACE" != "$ACTIVE_WORKSPACE" ]; then
  $SPICETIFY_BIN config current_theme Default color_scheme "$COLOR" &>/dev/null
  $SPICETIFY_BIN apply &>/dev/null
  killall -9 spotify
  flatpak run com.spotify.Client >/dev/null 2>&1
  sleep 3
  hyprctl dispatch focuswindow class:spotify &>/dev/null
  hyprctl dispatch movetoworkspacesilent "$SPOTIFY_WORKSPACE" &>/dev/null
  echo "Set Spotify theme: $COLOR and moved it back to workspace $SPOTIFY_WORKSPACE"
  if [ "$WAS_PLAYING" = "Playing" ]; then
    playerctl -p spotify play
    playerctl -p spotify position $TIME
  fi
elif [ "$SPOTIFY_WORKSPACE" = "$ACTIVE_WORKSPACE" ]; then
  echo "Set Spotify theme: $COLOR (Spotify is on the active workspace, no need to move it)"
  $SPICETIFY_BIN config current_theme Default color_scheme "$COLOR" &>/dev/null
  $SPICETIFY_BIN apply &>/dev/null
  killall -9 spotify
  flatpak run com.spotify.Client >/dev/null 2>&1 &
  if [ "$WAS_PLAYING" = "Playing" ]; then
    sleep 3
    playerctl -p spotify play
    playerctl -p spotify position $TIME
  fi
else
  $SPICETIFY_BIN config current_theme Default color_scheme "$COLOR" &>/dev/null
  $SPICETIFY_BIN apply &>/dev/null
  echo "Spotify not running. Updated theme config for next launch."
fi
