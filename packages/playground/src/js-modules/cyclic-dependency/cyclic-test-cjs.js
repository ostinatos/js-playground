let count = require('./cyclic-counter-cjs').count

console.debug("cyclic dep case: cjs style: get count: ", count);

exports.message = "message from 'cylic-test-es6.js'"