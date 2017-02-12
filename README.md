# jspm and SystemJS sample project

Sample ES6 JavaScript project setup with jspm, SystemJS, Babel, React and Sass.

For sample Universal React setup with jspm and SystemJS, you might want to take a look at https://github.com/akikoo/universal-react-systemjs-jspm.

[![Build Status](https://travis-ci.org/akikoo/systemjs-jspm-sass-setup.svg?branch=master)](https://travis-ci.org/akikoo/systemjs-jspm-sass-setup)

## Environment setup

```sh
  $ npm install
  $ jspm install
```

## Development

Start a mini-server (provided by Browsersync):

```sh
  $ npm start
```

## Run tests

N/A until I figure out how to make Mocha work with SystemJS.
In the meantime, have a look at my React testing demo setup: [https://github.com/akikoo/react-testing](https://github.com/akikoo/react-testing)

```sh
  $ npm test
```

## Bundling

WIP. Current options documented below.

### Using SystemJS Builder

Create minified `dist/main.js` and `dist/main.css` files.

```sh
  $ npm run bundle
```

### Bundle all the modules without using Builder script

Script is injected (no HTML script tag changes are needed).

```sh
  $ jspm bundle src/main dist/main.js --inject
```

### Create a self-executing, minified bundle

HTML script tag changes are needed.

```sh
  $ jspm bundle-sfx --minify src/main dist/main.js
```

### Move back to separate file mode

Clear out any injected bundle configuration. This runs the following script with node: `jspm unbundle`

```sh
  $ npm run dev
```

To install packages, run `jspm install <package-name>`. For example, to install React, run this:

```sh
  $ jspm install npm:react
```
