/* sparse array */
// guess how many elements are there in sa?
let sa = [, ,];
let sa1 = new Array(5);
console.debug(sa);
console.debug(sa1);
console.debug(0 in sa)
console.debug(0 in sa1)

/*
length property. 
 */
// changing length property will change the array.
let arr = [1, 2, 3, 4, 5];
console.debug(arr);
// reduce length. some array elements will be deleted.
arr.length = 3;
console.debug(arr);

// extend the length, empty element will be append. this results in a "sparse array".
arr.length = 10;
console.debug(arr);

/*
deleting element in array 
 */
// delete array element using "delete", will not change array length
let da = [1, 2, 3, 4, 5];
delete da[1];
// still da.length === 5
console.debug("delete element[1] using delete, length will not be changed: ",da);
delete da[4];
console.debug("delete element[4] using delete, length will not be changed either: ", da);

// delete element using shift()
console.debug("delete element using shift(), return", da.shift());
console.debug("after invoke shift() once: ", da);

// adding element(s) using unshift()

/* 
using pop(), push() to implement FILO data structure (stack) 
push/pop manipulate at the end of array.
while shift/unshift manipulate at the start of array.
*/
console.debug("push/pop stack")
let pushPopStack = [];
pushPopStack.push(1, 2);
console.debug("pop() ",pushPopStack.pop());
console.debug("push/pop stack end")

/* 
using shift() & unshift() can also implement FILO data structure
*/
console.debug("shift unshift stack")
let stack = []
stack.unshift(1);
stack.unshift(2)
console.debug(stack)

console.debug(stack.shift())
console.debug(stack)
console.debug("shift unshift stack end")


/* 
iterating an array
*/
let ia = [1, 2, , 4, 5];

// traditional for. 
//notice the len, this can avoid accessing length property in every iteration.
for (let idx = 0, len = ia.length; idx < len; idx++) {
    console.debug(ia[idx]);
}

// for-in loop
// add inpropriate property to Array.prototype.
Array.prototype.someInpropriateProperty = "someInpropriateProperty"
for (const idx in ia) {

    console.debug(ia[idx]);

    // NOTICE: by default property on Array.prototype will be iterated
    // so if we use for-in loop, we need to filter elements using hasOwnProperty
    if (!ia.hasOwnProperty(idx)) {
        console.debug(`${idx} is not own property of ia`)
    }
}

// Array.prototype.forEach()
// NOTICE: forEach will omit the property which is not the array's own.
ia.forEach(x => console.debug(x));

delete Array.prototype.someInpropriateProperty;

/* 
Array methods
*/

//slice()
let sliceArray = [1, 2, 3, 4, 5]
// NOTICE: negative index means index relative to the last element
console.debug("slice array", sliceArray.slice(2, -1))

// splice()
let spliceArray = [1, 2, 3, 4, 5]
// delete from position 1, delete 1 element
spliceArray.splice(1, 1);
console.debug(spliceArray);

// do not delete any element, add elements by the end of array
spliceArray.splice(spliceArray.length + 1, 0, 6, 7, 8)
console.debug("splice(), do not delete, append elements at the end of the array ", spliceArray);

// map()
// the difference between map() and forEach() is that map will return a new array.
let mapArray = [1, 2, 3, 4, 5];
console.debug("map array: ", mapArray.map(element => element * 2));

// filter()
// return a new array
let filterArray = [1, 2, 3, 4, 5];
console.debug("filter array: ", filterArray.filter(element => element % 2 === 0));

// every 
let everyArray = [1, 2, 3, 4, 5];
console.debug("every() ", everyArray.every(el => el % 2 === 0));

// some
let someArray = [1, 2, 3, 4, 5]
console.debug("some() ", everyArray.some(el => el % 2 === 0));

// reduce()
// example: use reduce to get sum
console.debug("use reduce() to get sum: ", [1, 2, 3, 4, 5].reduce((prev, curr) => prev + curr))

// example: count the appearance of elements
console.debug("count the appearance of elements ", ["a", "b", "c", "b", "a", "d", "e", "c", "b"].reduce((summary, curr) => {
    if (curr in summary) {
        summary[curr]++;
    }
    else {
        summary[curr] = 1;
    }
    return summary;
},
// don't forget to provide a initial object! 
{}
))

export default {}