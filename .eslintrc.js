const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/typescript',
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/react',
    '@vercel/style-guide/eslint/next',
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  // add rules configurations here
  rules: {
    eqeqeq: ['error', 'always'],
    curly: 'error',
    semi: 'error',
    'no-unused-vars': 'off',
    'no-use-before-define': 'error',
    'consistent-return': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/consistent-return': 'off',
    'unicorn/no-null': 'off',
    'import/no-default-export': 'off',
    'array-callback-return': 'off',
  },
  overrides: [
    {
      files: ['*.config.js', '*.config.ts', '.*rc.js', '.*rc.ts'],
      env: {
        node: true,
      },
    },
    {
      files: ['test.ts', 'test.tsx'],
      env: {
        jest: true,
      },
    },
  ],
};
