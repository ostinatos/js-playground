let store = require('./store');

setTimeout(() => {
    console.debug('[test1] original store value: ', store.p1);
    store.p1 = 'modified.';
    console.debug('[test1] modify store after 1s.');
}, 1000);
