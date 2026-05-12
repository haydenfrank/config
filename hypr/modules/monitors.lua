------------------
---- MONITORS ----
------------------

-- See https://wiki.hypr.land/Configuring/Basics/Monitors/
hl.monitor({
	output = "eDP-1",
	mode = "preferred",
	position = "1920x0",
	scale = "1.25",
})

hl.monitor({
	output = "DP-4",
	mode = "highrr",
	position = "0x0",
	scale = "1",
})

hl.workspace_rule({ workspace = "1", monitor = "DP-4" })
hl.workspace_rule({ workspace = "2", monitor = "eDP-1" })
