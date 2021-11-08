import { default as store, priValue } from './store';

setTimeout(() => {
    console.debug('[test1] original store value: ', store.p1);
    console.debug('[test1] original primitive store value: ', priValue);
    store.p1 = 'modified.';
    // priValue is not able to be modified.
    // priValue = "primitive value modified."
    console.debug('[test1] modify store after 1s.');
}, 1000);
