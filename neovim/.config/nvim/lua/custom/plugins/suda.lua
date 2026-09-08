vim.pack.add {
  'https://github.com/denialofsandwich/sudo.nvim',
  'https://github.com/MunifTanjim/nui.nvim',
}

require('sudo').setup {
  -- Whether to create the default user commands
  commands = true,
}
