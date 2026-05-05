#!/usr/bin/env bash
set -euo pipefail

# Switch waybar style by creating symlinks for config and css and restarting waybar

WORKDIR="$(dirname "$(realpath "$0")")/.."
STYLES_DIR="$WORKDIR/styles"
LAUNCH_SCRIPT="$WORKDIR/scripts/launch.sh"
CURRSTYLE="$(cat "$WORKDIR/active" 2>/dev/null || echo "none")"

list_styles() {
  for style in "$STYLES_DIR"/*/; do
    [ -d "$style" ] && basename "$style"
  done
}

pick_style() {
  list_styles | rofi -dmenu -p "waybar style" || true
}

# styles/dyanmic-island styles/normal
# styles/dynamic/style.css should import cat (active).css

STYLE="$(pick_style)"
if [ -z "$STYLE" ] || [ "$STYLE" = "$CURRSTYLE" ]; then
  echo "No new style selected or you selected the same style. Exiting." >&2
  exit 1
fi
echo $STYLE >$WORKDIR/active

ln -sfn $WORKDIR/styles/$STYLE/style.css $WORKDIR/style.css
ln -sfn $WORKDIR/styles/$STYLE/config.jsonc $WORKDIR/config.jsonc
echo "Set Waybar style: $STYLE"
$WORKDIR/scripts/launch.sh &>/dev/null
