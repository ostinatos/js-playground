import { message } from './cyclic-test-es6';
let count = 42;
export { count };

// console.debug("cyclic dep case: es6 style: get message: ", message)

// following will be executed after all modules are evaluated.
// due to the reason that es6 modules will wire up import and export, "message" will be assigned.
// https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/
setTimeout(() => {
    console.debug(
        'cyclic dep case: es6 style: get message (timeout 0): ',
        message
    );
}, 0);
