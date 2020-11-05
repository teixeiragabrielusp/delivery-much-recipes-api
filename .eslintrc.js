module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'prettier',
  ],
  rules: {
    'prefer-const': ['error', { destructuring: 'all' }],
  },
};
