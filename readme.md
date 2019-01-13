# create-react-component

> CLI for creating reusable, modern React libraries using Rollup and create-react-app.

[![NPM](https://img.shields.io/npm/v/@dschoon/create-react-component.svg)](https://www.npmjs.com/package/@dschoon/create-react-component) [![Build Status](https://travis-ci.com/dschoon/create-react-component.svg?branch=master)](https://travis-ci.com/dschoon/create-react-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Intro

<p align="center">
  <img width="600" src="https://raw.githubusercontent.com/dschoon/create-react-component/master/media/demo.svg">
</p>


## Features

- Easy-to-use CLI
- Handles all modern JS features
- Bundles `cjs` and `es` module formats
- [create-react-app](https://github.com/facebookincubator/create-react-app) for example usage and local dev
- [Rollup](https://rollupjs.org/) for bundling
- [Babel](https://babeljs.io/) for transpiling
- [Jest](https://facebook.github.io/jest/) for testing
- Supports complicated peer-dependencies
- Supports CSS modules
- Optional support for TypeScript
- Sourcemap creation
- Hundreds of public modules created
- Thorough documentation :heart_eyes:


## Install

This package requires `node >= 8`.

```bash
npm install -g create-react-component
```


## Creating a New Module

```bash
create-react-component
```

Answer some basic prompts about your module, and then the CLI will perform the following steps:
- copy over the template
- install dependencies via yarn or npm
- link packages together for local development
- initialize local git repo

At this point, your new module should resemble this screenshot and is all setup for local development.

<p align="center">
  <img width="600" src="https://raw.githubusercontent.com/dschoon/create-react-component/master/media/tree.svg">
</p>


## Development

Local development is broken into two parts (ideally using two tabs).

First, run rollup to watch your `src/` module and automatically recompile it into `dist/` whenever you make changes.

```bash
npm start # runs rollup with watch flag
```

The second part will be running the `example/` create-react-app that's linked to the local version of your module.

```bash
# (in another tab)
cd example
npm start # runs create-react-app dev server
```

Now, anytime you make a change to your library in `src/` or to the example app's `example/src`, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time.

![](https://media.giphy.com/media/12NUbkX6p4xOO4/giphy.gif)


#### Publishing to NPM

```bash
npm publish
```

This builds `cjs` and `es` versions of your module to `dist/` and then publishes your module to `npm`.

Make sure that any npm modules you want as peer dependencies are properly marked as `peerDependencies` in `package.json`. The rollup config will automatically recognize them as peers and not try to bundle them in your module.


#### Deploying to Github Pages

```bash
npm run deploy
```

This creates a production build of the example `create-react-app` that showcases your library and then runs `gh-pages` to deploy the resulting bundle.


## License

MIT © [Dan Schoonmaker](https://danielschoonmaker.com) ([github](https://github.com/dschoon))
