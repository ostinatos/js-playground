let store = require('./store');

console.debug('[test2] original store value: ', store.p1);

setTimeout(() => {
    console.debug('[test2] store value after 2 second: ', store.p1);
}, 2000);
