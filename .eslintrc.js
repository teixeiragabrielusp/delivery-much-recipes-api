module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  sourceType: {
    module
  },
  extends: [
    'eslint:recommended',
    'prettier',
  ],
  rules: {
    'prefer-const': ['error', { destructuring: 'all' }],
  },
};
