-- Matugen color export (Lua)

colors = {
<* for name, value in colors *>
    {{name}} = "rgba({{value.default.hex_stripped}}ff)",
<* endfor *>
}

return colors
