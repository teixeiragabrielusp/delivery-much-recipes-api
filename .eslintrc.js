module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    es6: true
  },
  parser: "babel-eslint",
  extends: [
    'eslint:recommended',
    'prettier',
  ],
  rules: {
    'prefer-const': ['error', { destructuring: 'all' }],
  },
};
