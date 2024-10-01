/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'prettier',
    require.resolve('@vercel/style-guide/eslint/next'),
  ],
  env: {
    node: true,
    browser: true,
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
