module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:compat/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:testing-library/react",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  plugins: [
    "@typescript-eslint",
    "jest",
    "testing-library",
    "emotion",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", "jsx", ".ts", ".tsx"],
      },
    ],
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "emotion/jsx-import": "error",
    "emotion/no-vanilla": "error",
    "emotion/import-from-emotion": "error",
    "emotion/styled-import": "error",
    "prettier/prettier": "error",
  },
};
