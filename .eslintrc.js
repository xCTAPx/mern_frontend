module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'jest', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
  rules: {
    quotes: ['error', 'single'],
    'no-extra-semi': 'error',
    'no-console': 'warn',
    'no-alert': 'error',
    semi: ['error', 'always'],
  },
};
