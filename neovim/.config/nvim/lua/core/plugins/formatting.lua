-- ============================================================
-- SECTION 7: FORMATTING
-- conform.nvim setup and keymap
-- ============================================================
do
  -- [[ Formatting ]]
  vim.pack.add { 'https://github.com/stevearc/conform.nvim' }
  require('conform').setup {
    notify_on_error = false,
    format_on_save = function(bufnr)
      -- You can specify filetypes to autoformat on save here:
      local enabled_filetypes = {
        lua = true,
        -- python = true,
        javascript = true,
        javascriptreact = true,
        typescript = true,
        typescriptreact = true,
        toml = true,
        json = true,
        jsonc = true,
        json5 = true,
        yaml = true,
        html = true,
        vue = true,
        handlebars = true,
        css = true,
        scss = true,
        less = true,
        graphql = true,
        markdown = true,
        bash = true,
        c = true,
        cpp = true,
        hpp = true,
        h = true,
        objectivec = true,
        qml = true,
      }
      if enabled_filetypes[vim.bo[bufnr].filetype] then
        return { timeout_ms = 500 }
      else
        return nil
      end
    end,
    default_format_opts = {
      lsp_format = 'fallback', -- Use external formatters if configured below, otherwise use LSP formatting. Set to `false` to disable LSP formatting entirely.
    },
    -- You can also specify external formatters in here.
    formatters_by_ft = {
      -- rust = { 'rustfmt' },
      -- Conform can also run multiple formatters sequentially
      -- python = { "isort", "black" },
      --
      -- You can use 'stop_after_first' to run the first available formatter from the list
      -- javascript = { "prettierd", "prettier", stop_after_first = true },
      javascript = { 'oxfmt' },
      javascriptreact = { 'oxfmt' },
      typescript = { 'oxfmt' },
      typescriptreact = { 'oxfmt' },
      toml = { 'oxfmt' },
      json = { 'oxfmt' },
      jsonc = { 'oxfmt' },
      json5 = { 'oxfmt' },
      yaml = { 'oxfmt' },
      html = { 'oxfmt' },
      vue = { 'oxfmt' },
      handlebars = { 'oxfmt' },
      css = { 'oxfmt' },
      scss = { 'oxfmt' },
      less = { 'oxfmt' },
      graphql = { 'oxfmt' },
      markdown = { 'oxfmt' },
      bash = { 'shfmt' },
      lua = { 'stylua' },
      cpp = { 'clang-format' },
      c = { 'clang-format' },
      hpp = { 'clang-format' },
      h = { 'clang-format' },
      qml = { 'qmlformat' },
    },
  }

  vim.keymap.set({ 'n', 'v' }, '<leader>f', function() require('conform').format { async = true } end, { desc = '[F]ormat buffer' })
end
