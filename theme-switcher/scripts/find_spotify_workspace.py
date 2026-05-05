#!/usr/bin/env python3
import subprocess
import json


def get_hyprland_clients():
    try:
        # Get JSON info about all clients
        result = subprocess.run(
            ["hyprctl", "-j", "clients"], capture_output=True, text=True, check=True
        )
        return json.loads(result.stdout)
    except (subprocess.CalledProcessError, json.JSONDecodeError):
        return []


def find_spotify_workspace():
    clients = get_hyprland_clients()
    for client in clients:
        # Check window class (Spotify usually reports as 'Spotify')
        if client.get("class") == "spotify":
            return client.get("workspace").get("name")
    return None


if __name__ == "__main__":
    workspace = find_spotify_workspace()
    if workspace:
        print(f"{workspace}")
    else:
        print("-1")
