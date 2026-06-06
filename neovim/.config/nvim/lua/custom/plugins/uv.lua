return {
  'benomahony/uv.nvim',
  dependencies = { 'nvim-lua/plenary.nvim' },
  config = function()
    require('uv').setup()
  end,
}
