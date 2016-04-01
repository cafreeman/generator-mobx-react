# generator-mobx-react [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]
>

## Introduction

**Note: This generator is massively WIP so use at your own risk**

`mobx-react` is a fantastic library that combines [MobX](https://github.com/mobxjs/mobx) observables with [React](https://facebook.github.io/react/) for powerful, intuitive state management.

This generator is intended to help people get started with `mobx-react` by providing a relatively lightweight project generator that takes care of the basic project infrastructure and lets the user get started coding right away.

## What `yo mobx-react` handles for you

This generator will set up the following things for you:

- Babel 6, along with the following presets and plugins:
    - [babel-preset-es2015](http://babeljs.io/docs/plugins/preset-es2015/)
    - [babel-preset-stage-1](https://babeljs.io/docs/plugins/preset-stage-1/) (for spread/rest and extended class syntax)
    - [babel-preset-react](http://babeljs.io/docs/plugins/preset-react/)
    - [babel-plugin-transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy) (since Babel 6 doesn't currently support decorators, we need this to work with `mobx`)
    - [babel-plugin-transform-object-assign](http://babeljs.io/docs/plugins/transform-object-assign/)
    - [babel-plugin-array-includes](https://github.com/stoeffel/babel-plugin-array-includes)
- Webpack, with the following configuration
    - transpilation via `babel-loader`
    - css bundling
    - npm-auto-install
    - code splitting in production builds
    - webpack-dev-server with hot module reloading
- eslint
    - `babel-eslint` parser so the linter doesn't freak out about decorators (or other features)
    - uses the [Airbnb style guide](https://github.com/airbnb/javascript)
    - configurable via `.eslintrc.js`
- `package.json` with the necessary dependencies, as well as scripts for the dev server as well as production build

## Installation

First, install [Yeoman](http://yeoman.io) and generator-mobx-react using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-mobx-react
```

Then generate your new project:

```bash
yo mobx-react
```

## TO DO

- Create new folder if the current working directory doesn't match the project name

## License

MIT © [Chris Freeman]()


[npm-image]: https://badge.fury.io/js/generator-mobx-react.svg
[npm-url]: https://npmjs.org/package/generator-mobx-react
[travis-image]: https://travis-ci.org/cafreeman/generator-mobx-react.svg?branch=master
[travis-url]: https://travis-ci.org/cafreeman/generator-mobx-react
[daviddm-image]: https://david-dm.org/cafreeman/generator-mobx-react.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/cafreeman/generator-mobx-react
