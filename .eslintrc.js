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
  plugins: [
    '@typescript-eslint',
    'jest',
    'react',
    'prettier',
  ],
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
    'react/prop-types': 'off',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
      },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/restrict-template-expressions':
      'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/ban-types': 'off',
    'no-case-declarations': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
};
