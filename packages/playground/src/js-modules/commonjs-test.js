/* 
common js style import 
which is also support by webpack.
https://webpack.js.org/api/module-methods/#commonjs
 */
var counter = require('./modules/counter-cjs')

console.log("test for commonjs:")

var count = counter.count;

console.log("count: ", count);