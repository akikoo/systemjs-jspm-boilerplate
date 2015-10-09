# jspm and SystemJS sample project 
 
Sample ES6 JavaScript project setup with jspm, SystemJS, Babel and React.
  
## Environment setup 

```sh
  $ npm install
  $ jspm install
```

There's no server included here, but you can use Python's built in server: 
  
```sh
  $ python -m SimpleHTTPServer 8000
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