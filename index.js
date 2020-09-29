// eslint-disable-next-line @typescript-eslint/no-var-requires
const readPkgUp = require("read-pkg-up");

let hasJestDom = false;
let hasTestingLibrary = false;
let hasEmotion = false;

try {
  const { packageJson } = readPkgUp.sync({ normalize: true });
  const allDeps = Object.keys({
    ...packageJson.peerDependencies,
    ...packageJson.devDependencies,
    ...packageJson.dependencies,
  });

  hasJestDom = allDeps.includes("@testing-library/jest-dom");
  hasTestingLibrary =
    allDeps.includes("@testing-library/react") ||
    allDeps.includes("@testing-library/react-hooks");
  hasEmotion =
    allDeps.includes("@emotion/core") || allDeps.includes("@emotion/styled");
} catch (error) {
  // ignore error
}

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
    hasJestDom && "plugin:jest-dom/recommended",
    hasTestingLibrary && "plugin:testing-library/react",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react",
  ].filter(Boolean),
  plugins: [
    "@typescript-eslint",
    "jest",
    hasJestDom && "jest-dom",
    hasTestingLibrary && "testing-library",
    hasEmotion && "emotion",
    "prettier",
  ].filter(Boolean),
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    "jest/globals": true,
  },
  rules: {
    "no-use-before-define": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", "jsx", ".ts", ".tsx"],
      },
    ],
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    ...(hasEmotion
      ? {
          "emotion/jsx-import": "error",
          "emotion/no-vanilla": "error",
          "emotion/import-from-emotion": "error",
          "emotion/styled-import": "error",
        }
      : null),
    "prettier/prettier": "error",
  },
};
