local colors = dofile("/home/" .. os.getenv("USER") .. "/.config/hypr/colors.lua")

hl.config({
	general = { col = { active_border = colors.primary } },
})
