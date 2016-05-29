### Change Log

v0.3.1 (2016-05-29)

- Updated version numbers for the following packages:
  - eslint-config-airbnb
  - eslint-plugin-react
  - eslint-plugin-jsx-a11y
  - npm-install-webpack-plugin
  - webpack-merge
- Added one new dependency
  - eslint-plugin-import
- Fixed some minor typos in the example components

v0.3.0 (2016-05-14)

- Using `awesome-typescript-loader` now since it allows for things like incremental compilation, hot reloading, npm-auto-install when using TypeScript.
- Moved all `eslint` related config to only occur when using `es2015` since it doesn't really apply to TypeScript
- Use `react-hot-loader` with TypeScript since `react-transform-hmr` doesn't seem to play nicely with the typescript loaders. Plus, all the hot-reloading is about to be deprecated anyway so this will all probably have to change again soon :(
- Updated the config step to tweak the `npm scripts` based on language preference. If using TypeScript, we don't need all the extra es6-related scripts
- Updated the font configurations in `webpack.config.js` to be more flexible and allow for version numbers after the extension (so things like font-awesome don't just break everything)

v0.1.0 (2016-04-18)

- Add support for TypeScript!!!
- Dynamically configure project dependencies based on language choice
- Add default configurations for images and fonts (e.g. Bootstrap will work right out of the box. Just `@import` in `main.css` and webpack will handle the rest)
- Clean up some of the code generation/formatting
- Update the README

v0.0.8 (2016-04-05)

- Replace `react-hot-loader` with `react-transform-hmr` via the [`babel-preset-react-hmre`](https://github.com/danmartinez101/babel-preset-react-hmre) and update `webpack.config.js`
