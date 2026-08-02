#!/usr/bin/env bash

set -euo pipefail

# Get cursor position
read -r X Y <<< "$(hyprctl cursorpos | tr ',' ' ')"

# Find the monitor containing the cursor
MONITOR="$(
    hyprctl monitors -j | jq -r \
        --argjson x "$X" \
        --argjson y "$Y" '
        .[]
        | select(
            $x >= .x and
            $x < (.x + .width) and
            $y >= .y and
            $y < (.y + .height)
        )
        | .name
        ' | head -n1
)"

if [[ -z "$MONITOR" ]]; then
    echo "Could not determine monitor." >&2
    exit 1
fi

NM_SIDEBAR_OUTPUT=$MONITOR nm-sidebar --toggle
