/* validate which will print first.
 */

setTimeout(() => {
    console.log('set timeout 0 callback executed');
}, 0);

const p = new Promise((resolve) => {
    console.log('executing promise constructor');
    resolve('test');
});

console.log('normal sync statement.');

p.then((r) => {
    console.log('after promise resolved: ', r);
});
