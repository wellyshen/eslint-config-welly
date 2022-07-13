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
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  plugins: ["@typescript-eslint", "promise", hasJestDom && "jest-dom"].filter(
    Boolean
  ),
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:promise/recommended",
    "plugin:compat/recommended",
    hasJestDom && "plugin:jest-dom/recommended",
    hasPrettier && "prettier",
  ].filter(Boolean),
  overrides: [
    // Run jest and testing-library only against test files
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      plugins: [
        hasJest && "jest",
        hasTestingLibrary && "testing-library",
      ].filter(Boolean),
      extends: [
        hasJest && "plugin:jest/all",
        hasTestingLibrary && "plugin:testing-library/react",
      ].filter(Boolean),
    },
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
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
