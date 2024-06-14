module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off', // Disable prop-types validation
    'no-unused-vars': 'warn',  // Warn instead of error for unused variables
    'react/jsx-props-no-spreading': 'off', // Allow prop spreading
    'react/react-in-jsx-scope': 'off', // Disable React in scope for React 17+
    'no-console': 'warn', // Warn instead of error for console logs
    'no-debugger': 'warn', // Warn instead of error for debugger statements
    'react-hooks/exhaustive-deps': 'warn', // Warn instead of error for missing dependencies in hooks
  },
};

