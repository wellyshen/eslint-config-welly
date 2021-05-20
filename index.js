// eslint-disable-next-line @typescript-eslint/no-var-requires
const readPkgUp = require("read-pkg-up");

let hasPrettier = false;
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

  hasPrettier = allDeps.includes("prettier");
  hasJestDom = allDeps.includes("@testing-library/jest-dom");
  hasTestingLibrary =
    allDeps.includes("@testing-library/react") ||
    allDeps.includes("@testing-library/react-hooks");
  hasEmotion =
    allDeps.includes("@emotion/react") ||
    allDeps.includes("@emotion/styled") ||
    allDeps.includes("@emotion/css");
} catch (error) {
  // ignore error
}

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
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
    hasPrettier && "prettier",
  ].filter(Boolean),
  plugins: [
    hasEmotion && "@emotion",
    "@typescript-eslint",
    "jest",
    hasJestDom && "jest-dom",
    hasTestingLibrary && "testing-library",
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
    "no-shadow": "off",
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
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    ...(hasEmotion
      ? {
          "@emotion/pkg-renaming": "error",
        }
      : null),
  },
};
