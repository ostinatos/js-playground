var count = 0;
console.debug('evaluating counter-cjs');
function increment() {
    count++;
}

module.exports = {
    count: count,
    increment: increment,
};
