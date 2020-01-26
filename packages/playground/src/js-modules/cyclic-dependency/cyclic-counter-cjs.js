let message = require('./cyclic-test-cjs').message;
let count = 42;
exports.count = count;

// due to that in common js specification, import will clone memory space for export, so "message" will get undefined.
// https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/
setTimeout(() => {
    console.debug("cyclic dep case: cjs style: get message: ", message)
}, 0);