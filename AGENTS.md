# AGENTS.md

## Repository scope and workflow

- This repository is `haydenfrank/config`, a symlink-oriented Linux dotfiles repository.
- Never edit files outside this repository.
- Commit after each validated, working change. Keep commits focused and include a clear message.
- Treat `git commit` as a local operation. Push to GitHub only when the user explicitly requests it.
- Ask before installing packages, dependencies, or system tools.
- Preserve unrelated user changes; do not reset, discard, or rewrite existing work.
- Prefer the repository's existing structure and configuration style over introducing new tooling.
- After completing a change, add durable repository-specific knowledge learned during
  the task to this file before finishing, and validate and commit that update.

## Available skills

- **customize-cloud-agent:** Use when configuring the Copilot cloud agent, setup steps, runners, or preinstalled tools.
- **github-pr-media:** Use when adding screenshots, diagrams, recordings, or other media to a GitHub pull request or comment.
- **pr-stack:** Use when creating, splitting, extending, restacking, rebasing, or landing dependent pull request stacks.

## Quickshell and QtQml documentation

- **Quickshell:** Use the official documentation at
  https://quickshell.org/docs/v0.3.2/ for the usage guide, QML language
  overview, layout guidance, and Quickshell type definitions. Prefer the
  repository's existing patterns when the documentation and local code differ.
- **Qt QML:** Use the Qt 6 module documentation at
  https://doc.qt.io/qt-6/qtqml-index.html for QML language semantics,
  JavaScript integration, object and property systems, and QML type behavior.
- **Qt Quick:** Use https://doc.qt.io/qt-6/qtquick-index.html for visual
  types, layouts, animations, models, and views used by Quickshell interfaces.

## Task triggers and change checks

- Treat prompts beginning with `keybinds:` as requests to change a keybinding.
- Before changing a keybinding, search all relevant repository configs and inspect
  live bindings with `hyprctl binds` when Hyprland is running.
- Hyprland keybindings live in `hyprland/.config/hypr/modules/keybinds.lua`;
  preserve the existing `hl.bind(...)` and `hl.dsp` style when editing them.
- The Bluetooth manager shortcut uses `bluedevil-wizard` as the repository's
  Bluetooth settings entry point.
- For a keybinding change, identify the existing action rather than duplicating
  it, replace only its key unless the user requests an action change, and verify
  the live binding after reload.
- Check for conflicts across Hyprland, Fish, Kitty, Quickshell, Rofi,
  and other affected tools. Report conflicts or uncertain global/application
  shortcuts before making a risky change.
- After every edit, run `git diff --check` and the smallest relevant validation
  command. For Hyprland changes, use `hyprctl reload` followed by
  `hyprctl configerrors` when the compositor is available.
- Do not commit until the relevant validation passes. Report failed or skipped
  checks explicitly.
- When a GitHub update is requested, commit the validated change first, then
  push the intended branch to its configured remote.

## Hyprland reference

Use the official Hyprland wiki for configuration syntax and current behavior:

- https://wiki.hypr.land/
- https://wiki.hypr.land/Configuring/
- https://wiki.hypr.land/Configuring/Variables/

Prefer the repository's existing Hyprland patterns over examples from older
documentation.

The Lua keybinding helper uses `{ release = true }` for actions that should run
when a key is released rather than pressed.

## Quickshell reference

- Desktop notifications use `Quickshell.Services.Notifications.NotificationServer`
  in `quickshell/.config/quickshell/components/Bar/modules/Notifications.qml`;
  do not reintroduce SwayNC for notification delivery.
- Capture `Hyprland.focusedMonitor` when each notification arrives and store its
  screen name. Render per-screen `PanelWindow` variants so existing notifications
  stay on their arrival monitor when focus changes.
- Resolve notification app icon names with `Quickshell.iconPath`, use
  `AppSearch.guessIcon` only when it resolves to a real icon, and omit the icon
  item when no icon is available.
- Notification popups fade after 10 seconds, then call `notification.expire()`.
- The combined Quickshell entrypoint lives at
  `quickshell/.config/quickshell/shell.qml`; it owns the desktop modules and
  the lock screen in `quickshell/.config/quickshell/components/Lock/`. Keep
  `hypridle.conf` pointed at its `lockScreen` IPC handler rather than launching
  a second locker process.

## Stack

- **Desktop/session:** Hyprland, Hyprlock, Hypridle, systemd user services
- **Shell and CLI:** Fish, Starship, Zoxide, Tmux, NVM, Eza, FD, Pyroclear
- **Terminal/editor:** Kitty and Neovim
- **Desktop UI:** Quickshell, Rofi
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

Most package roots are linked into `~/.config`. Kitty uses per-file links under
`~/.config/kitty`; `kdeglobals`, the Hyprland systemd target, the Neovim desktop
entry, and local helper scripts are also linked individually.

## Theming and generated files

Matugen is the source of generated colors. Its configuration is at
`matugen/.config/matugen/config.toml` and writes runtime output to Hyprland,
Hyprlock, Kitty, GTK, Kvantum, Spicetify, Rofi, Neovim, btop, and both
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

# Restart the current Fish session
exec fish
```

For Neovim plugin or Lua-structure changes, restart Neovim instead of relying on
the color-reload signal. Restart the active Quickshell shell after changing its
QML structure.
