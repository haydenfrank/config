hl.window_rule({
	match = {
		class = "^()$",
		title = "^()$",
	},
	no_blur = true,
})

hl.window_rule({
	match = {
		class = ".*",
	},
	no_blur = true,
})

hl.window_rule({
	match = {
		title = "^(Open File)(.*)$",
	},
	center = true,
	float = true,
})

hl.window_rule({
	match = {
		title = "^(Select a File)(.*)$",
	},
	center = true,
	float = true,
})

hl.window_rule({
	match = {
		title = "^(Open Folder)(.*)$",
	},
	center = true,
	float = true,
})

hl.window_rule({
	match = {
		title = "^(Save As)(.*)$",
	},
	center = true,
	float = true,
})

hl.window_rule({
	match = {
		title = "^(Library)(.*)$",
	},
	center = true,
	float = true,
})

hl.window_rule({
	match = {
		title = "^(File Upload)(.*)$",
	},
	center = true,
	float = true,
})

hl.window_rule({
	match = {
		title = "^(.*)(wants to save)$",
	},
	center = true,
	float = true,
})

hl.window_rule({
	match = {
		title = "^(.*)(wants to open)$",
	},
	center = true,
	float = true,
})

hl.window_rule({
	match = {
		class = "^(pavucontrol)$",
	},
	float = true,
	size = { "(monitor_w*0.45)", "(monitor_h*0.45)" },
	center = true,
})

hl.window_rule({
	match = {
		class = "^(nm-connection-editor)$",
	},
	float = true,
	size = { "(monitor_w*0.45)", "(monitor_h*0.45)" },
	center = true,
	rounding = 0,
})

hl.window_rule({
	match = {
		title = "^([Pp]icture[-\\s]?[Ii]n[-\\s]?[Pp]icture)(.*)$",
	},
	float = true,
	keep_aspect_ratio = true,
	move = { "(monitor_w*0.73)", "(monitor_h*0.72)" },
	size = { "(monitor_w*0.25)", "(monitor_h*0.25)" },
	pin = true,
})

hl.window_rule({ match = { float = 0 }, no_shadow = true })

hl.workspace_rule({ workspace = "special:special", gaps_out = 30 })

hl.layer_rule({ match = { namespace = ".*" }, xray = true })
hl.layer_rule({ match = { namespace = "walker" }, no_anim = true })
hl.layer_rule({ match = { namespace = "selection" }, no_anim = true })
hl.layer_rule({ match = { namespace = "overview" }, no_anim = true })
hl.layer_rule({ match = { namespace = "anyrun" }, no_anim = true })
hl.layer_rule({ match = { namespace = "indicator.*" }, no_anim = true })
hl.layer_rule({ match = { namespace = "osk" }, no_anim = true })
hl.layer_rule({ match = { namespace = "hyprpicker" }, no_anim = true })

hl.layer_rule({ match = { namespace = "noanim" }, no_anim = true })
hl.layer_rule({ match = { namespace = "gtk-layer-shell" }, blur = true, ignore_alpha = 0 })
hl.layer_rule({ match = { namespace = "launcher" }, blur = true, ignore_alpha = 0.5 })
hl.layer_rule({ match = { namespace = "notifications" }, blur = true, ignore_alpha = 0.69 })
hl.layer_rule({ match = { namespace = "logout_dialog" }, blur = true })
hl.layer_rule({ match = { namespace = "gtk4-layer-shell" }, no_anim = true })

hl.window_rule({
	match = {
		title = ".*\\.exe",
	},
	immediate = false,
	workspace = 1,
})

hl.window_rule({
	match = {
		title = ".*minecraft.*",
	},
	immediate = false,
	workspace = 1,
})

hl.window_rule({
	match = {
		class = "^(steam_app).*",
	},
	immediate = false,
	workspace = 1,
})

hl.window_rule({
	match = {
		class = "^(gamescope).*",
	},
	immediate = false,
	workspace = 1,
})

hl.window_rule({
	match = {
		class = "^(kitty).*",
	},
	no_blur = false,
})

hl.layer_rule({
	match = {
		namespace = "waybar",
	},
	xray = true,
	blur = true,
	ignore_alpha = 0.5,
})

hl.window_rule({
	match = {
		class = "^(org.gnome.Calculator).*",
	},
	float = true,
	size = { 708, 616 },
})

hl.window_rule({
	match = {
		title = "^(Friends List).*",
	},
	float = true,
	size = { 500, 500 },
})
