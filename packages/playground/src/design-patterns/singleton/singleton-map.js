/* 
implementing singleton simply using es6 modules.

since in es6 module system, each module will be evaluated exactly ONCE, and all import/export of a module will be wired-up.
so we can implement singleton by simply using es6 modules.

pros:
simple.

cons:
no namespace for singleton.
*/
let store = {};

function set(key, value) {
    store[key] = value;
}

function get(key) {
    return store[key];
}

export { set, get };
