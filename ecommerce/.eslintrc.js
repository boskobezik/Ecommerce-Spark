module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'prefer-destructuring': 'off',
  },
};
