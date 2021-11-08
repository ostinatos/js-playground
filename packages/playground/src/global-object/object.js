/* 
object to primitive coercion
*/

let obj = {
    toString() {
        return 'sss';
    },
};
// toString is used.
console.debug('string coercion: ' + obj);
console.debug(123 + obj);
console.debug(1 * obj); //NaN

// valueOf 的优先级比 toString 要高!
let obj2 = {
    toString() {
        console.debug('tostring()');
        return 'sss';
    },
    valueOf() {
        return 4;
    },
};

console.debug('string coercion: ' + obj2); //调用了valueOf而不是toString
console.debug(123 + obj2); //调用了valueOf
console.debug(1 * obj2);

// 而 Symbol.toPrimitive 的优先级又比valueOf更高
let obj3 = {
    toString() {
        console.debug('tostring()');
        return 'sss';
    },
    valueOf() {
        return 4;
    },
    [Symbol.toPrimitive]() {
        return 'ZZZ';
    },
};

console.debug('string coercion: ' + obj3);
console.debug(123 + obj3);
console.debug(1 * obj3); //NaN
