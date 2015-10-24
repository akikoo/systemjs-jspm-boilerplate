# jspm and SystemJS sample project 
 
Sample ES6 JavaScript project setup with jspm, SystemJS, Babel and React.

[![Build Status](https://travis-ci.org/akikoo/systemjs-jspm-setup.svg?branch=master)](https://travis-ci.org/akikoo/systemjs-jspm-setup)

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

```sh
  $ npm test
```

## Bundling 

### Bundle all the modules 

Script is injected (no HTML script tag changes are needed). This runs the following script with node: `jspm bundle src/main --inject`

```sh
  $ npm run build
```

### Create a self-executing, minified bundle 
 
HTML script tag changes are needed.
 
```sh
  $ jspm bundle-sfx --minify src/main bundle.min.js
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