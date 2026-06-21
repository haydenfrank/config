hl.on("hyprland.start", function()
	hl.exec_cmd("gnome-keyring-daemon --start --components=secrets")
	hl.exec_cmd("systemctl --user start hyprland-session.target")
	hl.exec_cmd("sudo scxctl start --sched lavd --args performance")

	hl.exec_cmd("hypridle")
	hl.exec_cmd("hyprlock")

	hl.exec_cmd("easyeffects --hide-window --service-mode")

	hl.exec_cmd("wl-clip-persist --clipboard regular")

	hl.exec_cmd("awww-daemon &")
	hl.exec_cmd("waybar &")
end)

hl.on("hyprland.shutdown", function()
	os.execute("systemctl --user stop hyprland-session.target && sleep 0.1")
	-- uses a blocking exec function and sleeps a bit to give things time to close
	-- you might also want to kill troublesome/crashing non-systemd background services here:
	-- os.execute("pkill wallpaperthing; systemctl --user stop hyprland-session.target && sleep 0.1")
end)
