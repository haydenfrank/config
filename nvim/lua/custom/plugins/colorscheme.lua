-- Minimal watcher: run `:colorscheme <name>` when
-- ~/.config/fish/current_theme changes. First non-empty line used.

local theme_file = vim.fn.expand('~/.config/fish/current_theme')

local function read_theme()
  if vim.fn.filereadable(theme_file) == 0 then
    return nil
  end
  local lines = vim.fn.readfile(theme_file)
  if not lines or #lines == 0 then
    return nil
  end
  for _, l in ipairs(lines) do
    local t = l:match('^%s*(.-)%s*$')
    if t and t ~= '' then
      return t
    end
  end
  return nil
end

local function apply_theme()
  local theme = read_theme()
  if not theme then
    return
  end
  pcall(vim.cmd, 'colorscheme ' .. theme)
  vim.g.colors_name = theme
end

-- apply immediately
apply_theme()

-- also ensure it's applied once on startup (after VimEnter)
pcall(function()
  if vim.api and vim.api.nvim_create_autocmd then
    vim.api.nvim_create_autocmd('VimEnter', { once = true, callback = apply_theme })
  end
end)

-- start a tiny fs poll watcher (portable)
-- Use an fs event watcher on the theme directory for faster updates.
local uv = vim.loop
local w = uv.new_fs_event()
local theme_dir = vim.fn.fnamemodify(theme_file, ':h')
local theme_base = vim.fn.fnamemodify(theme_file, ':t')

local ok, err = pcall(function()
  w:start(theme_dir, {}, vim.schedule_wrap(function(err, fname)
    if err then
      return
    end
    -- Some platforms return nil for fname; react conservatively.
    if not fname or fname == theme_base then
      apply_theme()
    end
  end))
end)
if not ok then
  -- fallback to polling if fs_event isn't available
  local poll = uv.new_fs_poll()
  poll:start(theme_file, 500, function()
    vim.schedule(apply_theme)
  end)
end

-- done. require this module in your init to enable auto-updates.
return {}
