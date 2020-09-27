module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "global-require": 0 ,
    'no-use-before-define': 'off',
    'space-before-function-paren': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'object-curly-newline': 'off',
    'arrow-parens': 'off',
    'spaced-comment': 'off',
    'one-var': 'off',
    'linebreak-style': 'off',
    'keyword-spacing': 'off',
    'operator-linebreak': 'off',
    'no-return-assign': 'off',
    'no-trailing-spaces': 'off',
    'react/forbid-prop-types': 'off',
    'no-plusplus': 'off',
    'no-unused-expressions': 'off',
    'arrow-body-style': 'off',
    'consistent-return': 'off',
    'no-bitwise': 'off',
    'no-nested-ternary': 'off',
    'no-case-declarations': 'off',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'no-return-await': 'off',
    'import/prefer-default-export': 'off',
    'dot-notation': 'off',
    "react/jsx-curly-brace-presence": 'off',
  },
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": ["error",  {"devDependencies": true}],
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
  },
};
