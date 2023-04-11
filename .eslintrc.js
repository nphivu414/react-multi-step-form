module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  // extends: ['plugin:react/recommended'],
  overrides: [],
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      ecmaVersion: 12,
    },
  },
  // plugins: ['react'],
  rules: {
    // quotes: [2, 'single', { allowTemplateLiterals: true }],
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-restricted-syntax": "off",
    "comma-dangle": "off",
    "no-unused-vars": "warn",
    "no-underscore-dangle": "off",
    "react/jsx-filename-extension": "off",
    "react/function-component-definition": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
};
