# eslint-config-welly
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

ESlint configuration for my personal [React](https://reactjs.org) projects, which integrates [TypeScript](https://www.typescriptlang.org), [Prettier](https://prettier.io), and [more](#whats-inside).

[![build status](https://img.shields.io/travis/wellyshen/eslint-config-welly/master?style=flat-square)](https://travis-ci.org/wellyshen/eslint-config-welly)
[![npm version](https://img.shields.io/npm/v/eslint-config-welly?style=flat-square)](https://www.npmjs.com/package/eslint-config-welly)
[![npm downloads](https://img.shields.io/npm/dm/eslint-config-welly?style=flat-square)](https://www.npmtrends.com/eslint-config-welly)
[![npm downloads](https://img.shields.io/npm/dt/eslint-config-welly?style=flat-square)](https://www.npmtrends.com/eslint-config-welly)
[![dependencies status](https://img.shields.io/david/wellyshen/eslint-config-welly?style=flat-square)](https://david-dm.org/wellyshen/eslint-config-welly)
[![devDependencies status](https://img.shields.io/david/dev/wellyshen/eslint-config-welly?style=flat-square)](https://david-dm.org/wellyshen/eslint-config-welly?type=dev)
[![MIT licensed](https://img.shields.io/github/license/wellyshen/eslint-config-welly?style=flat-square)](https://raw.githubusercontent.com/wellyshen/eslint-config-welly/master/LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](https://github.com/wellyshen/eslint-config-welly/blob/master/CONTRIBUTING.md)
[![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fwellyshen%2Feslint-config-welly)](https://twitter.com/intent/tweet?text=With%20@eslint-config-welly,%20I%20can%20code%20by%20following%20the%20best%20style%20guide.%20Thanks,%20@Welly%20Shen%20🤩)

## Installation

This package is distributed via [npm](https://www.npmjs.com/package/eslint-config-welly), it requires [eslint](https://github.com/eslint/eslint), [typescript](https://github.com/microsoft/TypeScript), and [prettier](https://github.com/prettier/prettier).

Install the correct versions of each package, which are listed by the command:

```sh
npm info "eslint-config-welly@latest" peerDependencies
```

If using **npm 5+**, use this shortcut:

```sh
npx install-peerdeps --dev eslint-config-welly
```

Or install each package by yourself:

```sh
npm install --save-dev eslint-config-welly eslint@^x.x.x prettier@^x.x.x typescript@^x.x.x
# or
yarn add --dev eslint-config-welly eslint@^x.x.x prettier@^x.x.x typescript@^x.x.x
```

## Usage

Then add the extends to your `.eslintrc.js`:

```js
module.exports = {
  extends: "welly",
  rules: {
    // your overrides
  },
};
```

## What's Inside?

This configuration contains the following cool packages.

| Package                                                                                                       | Description                                                                                  |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)                                   | Monorepo for all the tooling which enables ESLint to support TypeScript.                     |
| [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)        | This package provides Airbnb's .eslintrc as an extensible shared config.                     |
| [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)                                       | React specific linting rules for ESLint.                                                     |
| [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) | This ESLint plugin enforces the [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html). |
| [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)                                     | Static AST checker for a11y rules on JSX elements.                                           |
| [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)                                   | ESLint plugin with rules that help validate proper imports.                                  |
| [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)                                  | ESLint plugin for Prettier formatting.                                                       |
| [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat)                                     | Lint the browser compatibility of your code.                                                 |
| [eslint-plugin-emotion](https://github.com/emotion-js/emotion/tree/master/packages/eslint-plugin-emotion)     | ESLint rules for emotion.                                                                    |
| [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)                                    | ESLint plugin for Jest.                                                                      |
| [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library)             | ESLint plugin for Testing Library.                                                           |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.alexypdu.com"><img src="https://avatars3.githubusercontent.com/u/28721952?v=4" width="100px;" alt=""/><br /><sub><b>Alex Du</b></sub></a><br /><a href="https://github.com/wellyshen/eslint-config-welly/commits?author=alexypdu" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!