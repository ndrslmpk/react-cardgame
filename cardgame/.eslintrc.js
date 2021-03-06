module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'no-use-before-define': 'off',
    'import/no-extraneous-dependencies': 'error',
    'react/prefer-stateless-function': [0, { ignorePureComponents: true }],
    '@typescript-eslint/no-use-before-define': ['error'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
      { usePrettierrc: true },
    ],
  },
};
