/* 
these are some live examples for javascript modularization.
https://webpack.js.org/api/module-methods/
*/

console.log("es6 approach.")


// ES6: statically import syntax
import multiply from './modules/math'

var result1 = multiply(2, 21);
console.log(result1);

// ES2015 loader spec: dynamically import syntax.
// module will be loaded dynamically as a separated file
// promise style
// NOTICE:
// webpack related bundle arguments can be specified using block comment before module path.
import(
    /* webpackChunkName: "my-divide" */
    /* webpackMode: "lazy" */
    "./modules/divide").then(math => {
        console.log(math.divide(84, 1));
    })


