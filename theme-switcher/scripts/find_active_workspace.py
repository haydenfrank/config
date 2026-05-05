#!/usr/bin/env python3
import subprocess
import re


def get_active_workspace():
    try:
        # Run 'hyprctl activeworkspace' and capture output
        result = subprocess.run(
            ["hyprctl", "activeworkspace"], capture_output=True, text=True, check=True
        )
        output = result.stdout

        # Parse the workspace ID from the first line
        match = re.search(r"workspace ID (\d+)", output)
        if match:
            return match.group(1)
    except (subprocess.CalledProcessError, FileNotFoundError):
        pass
    return None


if __name__ == "__main__":
    ws = get_active_workspace()
    if ws:
        print(ws)  # Just print the workspace number
