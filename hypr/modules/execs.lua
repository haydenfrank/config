hl.on("hyprland.start", function()
	hl.exec_cmd("gnome-keyring-daemon --start --components=secrets")
	hl.exec_cmd("dbus-update-activation-environment --all")
	hl.exec_cmd("sleep 1 && dbus-update-activation-environment --systemd WAYLAND_DISPLAY XDG_CURRENT_DESKTOP")
	hl.exec_cmd("dbus-update-activation-environment --systemd --all")

	hl.exec_cmd("sudo scxctl start --sched lavd --args performance")

	hl.exec_cmd("hypridle")
	hl.exec_cmd("hyprlock")

	hl.exec_cmd("easyeffects --hide-window --service-mode")

	hl.exec_cmd(
		[[wl-paste --type text --watch bash -c 'cliphist store && qs -c $qsConfig ipc call cliphistService update']]
	)
	hl.exec_cmd(
		[[wl-paste --type image --watch bash -c 'cliphist store && qs -c $qsConfig ipc call cliphistService update']]
	)
	hl.exec_cmd("wl-clip-persist --clipboard regular")

	hl.exec_cmd("awww-daemon &")
	hl.exec_cmd("waybar &")
end)
