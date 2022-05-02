export function swap(payload: { a: number; b: number }) {
    const temp = payload.a;
    payload.a = payload.b;
    payload.b = temp;
    return payload;
}

function swap2(a: number, b: number) {
    return [b, a];
}

let a = 46,
    b = 8;

console.log('a:', a, ' b:', b);

({ a, b } = swap({ a, b }));

console.log('a:', a, ' b:', b);

[a, b] = swap2(a, b);

console.log('a:', a, ' b:', b);

performance.mark('swapUsingDestructuring-start');
for (let i = 0; i < 10000; i++) {
    [a, b] = [b, a];
}
performance.mark('swapUsingDestructuring-end');
console.log(
    performance.measure(
        'swapUsingDestructuring',
        'swapUsingDestructuring-start',
        'swapUsingDestructuring-end'
    )
);

performance.mark('swapUsingTemp-start');
for (let i = 0; i < 10000; i++) {
    const temp = a;
    a = b;
    b = temp;
}
performance.mark('swapUsingTemp-end');
console.log(
    performance.measure(
        'swapUsingTemp',
        'swapUsingTemp-start',
        'swapUsingTemp-end'
    )
);

performance.mark('swapUsingObjDes-start');
for (let i = 0; i < 10000; i++) {
    ({ a, b } = { a: b, b: a });
}
performance.mark('swapUsingObjDes-end');
console.log(
    performance.measure(
        'swapUsingObjDes',
        'swapUsingObjDes-start',
        'swapUsingObjDes-end'
    )
);
