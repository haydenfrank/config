vim.pack.add({
  'https://github.com/daedlock/matugen.nvim',
  'https://github.com/nvim-tree/nvim-web-devicons',
  'https://github.com/nvim-lualine/lualine.nvim'
})

local matugen = require("matugen")
matugen.setup({
  colors_path = vim.fn.expand("~/.config/nvim/colors.json"),
})

vim.cmd.colorscheme("matugen")

require("lualine").setup({
  options = {
    theme = matugen.lualine(),
  },
})

vim.api.nvim_create_autocmd("User", {
  pattern = "MatugenReloaded",
  callback = function()
    require("lualine").setup({
      options = {
        theme = matugen.lualine(),
      },
    })
  end,
})
