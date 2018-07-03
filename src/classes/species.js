/* 
example taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Species
but it seems that it does not make sense.
*/
class MyArray extends Array {
    // Overwrite species to the parent Array constructor
    // static get [Symbol.species]() { return Array; }
}

let a = new MyArray(1, 2, 3);
let mapped = a.map(x => x * x);

console.log("mapped instanceof MyArray ", mapped instanceof MyArray); // false
console.log("mapped instanceof Array", mapped instanceof Array);   // true