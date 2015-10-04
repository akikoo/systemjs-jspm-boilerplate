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

## Bundle all the modules (no HTML script tag changes needed)

```sh
	$ jspm bundle app/main --inject
```