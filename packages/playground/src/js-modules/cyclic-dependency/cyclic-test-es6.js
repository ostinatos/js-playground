import {count} from './cyclic-counter-es6'

console.debug("cyclic dep case: es6 style: get count: ", count);

let message = "message from 'cylic-test-es6.js'"
export {message}