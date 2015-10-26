var path = require('path');
var Builder = require('systemjs-builder');

var builder = new Builder(
  './',         // baseURL
  './config.js' // configuration file
);

builder.bundle('./src/main.js', './dist/main.js', {
  minify: true,
  sourceMaps: true
}).then(() => {
  console.log('Build complete');
}).catch((err) => {
  console.log('Build error: ', err);
});
