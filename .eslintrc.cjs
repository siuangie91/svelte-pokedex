module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['svelte3', '@typescript-eslint', 'unused-imports'],
  ignorePatterns: ['*.cjs'],
  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
  settings: {
    'svelte3/typescript': () => require('typescript'),
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    "semi": "off",
    "@typescript-eslint/semi": ["error"],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-inferrable-types': 'warn',
    'array-element-newline': ['error', { multiline: true, minItems: 4 }],
    'array-bracket-spacing': ['error', 'never', { objectsInArrays: false }],
    'object-curly-newline': ['error', { consistent: true, multiline: true }],
    'object-curly-spacing': ['error', 'always'],
    'computed-property-spacing': ['warn', 'never'],
    'no-multi-spaces': ['error'],
    'keyword-spacing': ['error', { before: true, after: true }],
    'prefer-destructuring': [
      'warn',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    indent: ['error', 2],
  },
};
