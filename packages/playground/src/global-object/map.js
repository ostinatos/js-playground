let m = new Map([
    ['a', '1'],
    ['b', '2'],
    ['c', '3'],
]);

for (let k of m.keys()) {
    console.log(k);
}

for (let item of m) {
    console.log(item);
}
