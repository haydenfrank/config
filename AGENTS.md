# AGENTS.md

## Repository scope and workflow

- This repository is `haydenfrank/config`, a symlink-oriented Linux dotfiles repository.
- Never edit files outside this repository.
- Commit after each working change. Keep commits focused and include a clear message.
- Ask before installing packages, dependencies, or system tools.
- Preserve unrelated user changes; do not reset, discard, or rewrite existing work.
- Prefer the repository's existing structure and configuration style over introducing new tooling.

## Stack

- **Desktop/session:** Hyprland, Hyprlock, Hypridle, systemd user services
- **Shell and CLI:** Fish, Starship, Zoxide, Tmux, NVM, Eza, FD, Pyroclear
- **Terminal/editor:** Kitty and Neovim
- **Desktop UI:** Quickshell, Waybar, SwayNC, Rofi
- **Theming:** Matugen, GTK 3/4, KDE/Kvantum, Spicetify
- **Utilities:** btop and Fastfetch
- **Desktop integration:** MIME associations and `.desktop` launchers

## Layout

Top-level directories are deployable packages whose contents mirror paths below `$HOME`:

| Directory | Managed content |
| --- | --- |
| `btop/` | btop configuration and Matugen theme |
| `fastfetch/` | Fastfetch configuration and image |
| `fish/` | Fish config, functions, completions, plugins, and tmux integration |
| `gtk/` | GTK 3/4 settings, CSS, assets, and bookmarks |
| `hyprland/` | Hyprland Lua modules, Hyprlock, Hypridle, scripts, and systemd target |
| `kitty/` | Kitty configuration, scripts, and themes |
| `matugen/` | Matugen configuration, templates, and post-processing scripts |
| `mimeapps/` | MIME associations, Neovim desktop entry, and local launcher |
| `neovim/` | Modular Neovim Lua configuration and plugin lockfile |
| `qt/` | KDE globals and Kvantum theme configuration |
| `quickshell/` | `DynamicGlacier`, `new`, and `og` Quickshell shells |
| `rofi/` | Rofi configuration, colors, and Wi-Fi menu |
| `spicetify/` | Spotify configuration and themes |
| `starship/` | Starship prompt configuration |
| `swaync/` | SwayNC configuration, styling, themes, and icons |
| `waybar/` | Waybar configuration, styling, modules, and launch script |

Most package roots are linked into `~/.config`. Kitty uses per-file links under
`~/.config/kitty`; `kdeglobals`, the Hyprland systemd target, the Neovim desktop
entry, and local helper scripts are also linked individually.

## Theming and generated files

Matugen is the source of generated colors. Its configuration is at
`matugen/.config/matugen/config.toml` and writes runtime output to Hyprland,
Hyprlock, Kitty, GTK, Kvantum, Spicetify, Rofi, SwayNC, Neovim, btop, and both
the `new` and `og` Quickshell configurations.

Generated color files are ignored by Git. Change the corresponding template in
`matugen/.config/matugen/templates/` rather than hand-editing generated output.

## Reload commands

Run commands from the repository or through their linked `$HOME` paths:

```sh
# Hyprland configuration
hyprctl reload

# Generate wallpaper-driven colors
matugen image /path/to/wallpaper

# Kitty theme
kitty +kitten themes --reload-in=all Matugen

# Neovim color reload for running instances
pkill -SIGUSR1 nvim

# Restart Waybar and SwayNC using the repository script
~/.config/waybar/scripts/launch.sh

# Restart the current Fish session
exec fish
```

For Neovim plugin or Lua-structure changes, restart Neovim instead of relying on
the color-reload signal. Restart the active Quickshell shell after changing its
QML structure.
