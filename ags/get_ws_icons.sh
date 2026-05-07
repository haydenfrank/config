#!/usr/bin/env bash

set -euo pipefail

# Produce JSON mapping workspace number -> icon path by calling test.sh
clients=$(hyprctl clients -j 2>/dev/null || true)

if [[ -z "${clients// /}" ]]; then
  echo "{}"
  exit 0
fi

wspaces=$(echo "$clients" | jq -r '.[].workspace' | sed -E 's/:.*//' | sort -u)

first=1
printf "{"
for ws in $wspaces; do
  icon=$("/home/hayden/.config/ags/test.sh" "$ws" 2>/dev/null || true)
  # if empty, skip
  if [[ -z "$icon" ]]; then
    continue
  fi
  if [[ $first -eq 0 ]]; then
    printf ","
  else
    first=0
  fi
  # escape backslashes and double quotes
  esc=${icon//\\/\\\\}
  esc=${esc//\"/\\\"}
  printf '"%s":"%s"' "$ws" "$esc"
done
printf "}\n"
