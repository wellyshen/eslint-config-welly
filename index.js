// eslint-disable-next-line @typescript-eslint/no-var-requires
const readPkgUp = require("read-pkg-up");

let hasPrettier = false;
let hasJest = false;
let hasJestDom = false;
let hasTestingLibrary = false;

try {
  const { packageJson } = readPkgUp.sync({ normalize: true });
  const allDeps = Object.keys({
    ...packageJson.peerDependencies,
    ...packageJson.devDependencies,
    ...packageJson.dependencies,
  });

  hasPrettier = allDeps.includes("prettier");
  hasJest = allDeps.includes("jest");
  hasJestDom = allDeps.includes("@testing-library/jest-dom");
  hasTestingLibrary =
    allDeps.includes("@testing-library/react") ||
    allDeps.includes("@testing-library/react-hooks");
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
  plugins: [
    "@typescript-eslint",
    "promise",
    hasJest && "jest",
    hasJestDom && "jest-dom",
    hasTestingLibrary && "testing-library",
  ].filter(Boolean),
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:promise/recommended",
    "plugin:compat/recommended",
    hasJest && "plugin:jest/all",
    hasJestDom && "plugin:jest-dom/recommended",
    hasTestingLibrary && "plugin:testing-library/react",
    hasPrettier && "prettier",
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
    ...(hasJest ? { "jest/globals": true } : {}),
  },
  rules: {
    "no-use-before-define": "off", // Avoid TypeScript conflict
    "no-shadow": "off", // Avoid TypeScript conflict
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", "jsx", ".ts", ".tsx"],
      },
    ],
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
