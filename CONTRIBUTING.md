# Contributing to eslint-config-welly

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

> Working on your first Pull Request? You can learn how from [this free video series](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github).

## Pull Request Process

1. Fork the repository and create your branch from `master`.
2. Run `yarn` to install dependencies.
3. Run `yarn test` to validate you've got it working.
4. Run `yarn lint` to lint your code.
5. Create a branch for your PR.

> Tip: Keep your `master` branch pointing at the original repository and make
> pull requests from branches on your fork. To do this, run:
>
> ```
> git remote add upstream https://github.com/wellyshen/eslint-config-welly.git
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```
>
> This will add the original repository as a "remote" called "upstream," Then
> fetch the git information from that remote, then set your local `master`
> branch to use the upstream master branch whenever you run `git pull`. Then you
> can make all of your pull request branches based on this `master` branch.
> Whenever you want to update your version of `master`, do a regular `git pull`.

## License

By contributing to eslint-config-welly, you agree that your contributions will be licensed under its MIT license.
