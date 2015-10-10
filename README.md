# jspm and SystemJS sample project 
 
Sample ES6 JavaScript project setup with jspm, SystemJS, Babel and React.

[![Build Status](https://travis-ci.org/akikoo/systemjs-jspm-boilerplate.svg?branch=master)](https://travis-ci.org/akikoo/systemjs-jspm-boilerplate)

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

## Bundling 

### Bundle all the modules (injected, no HTML script tag changes needed)

```sh
  $ jspm bundle app/main --inject
```

### Create a self-executing, minified bundle (HTML script tag changes needed)
 
```sh
  $ jspm bundle-sfx --minify app/main bundle.min.js
```

### Clear out any injected bundle configuration and move back to separate file mode

```sh
  $ jspm unbundle
```

To install packages, run `jspm install <package-name>`. For example, to install React, run this:

```sh
  $ jspm install npm:react
```