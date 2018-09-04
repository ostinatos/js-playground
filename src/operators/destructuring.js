/* 
destructuring
http://exploringjs.com/es6/ch_destructuring.html
 */

/* object destructuring */
const {p1, p2} = {p1:"x"};
// this is the same as above.
// const {p1:p1, p2:p2} = {p1:"x"};
console.debug("p1:", p1);
console.debug("p2:", p2);

/* array destructuring */
const iterable = ['a', 'b'];
const [x, y] = iterable;
console.debug("x:", x)
console.debug("y:", y)

/* default value for object destructuring */
const {p3="default3", p4="default4"} = {p3:"value3"}
// it is equivalent to (property shorthand):
// const {p3:p3="default3", p4:p4="default4"} = {p3:"value3"}
console.debug("p3:", p3);
console.debug("p4:", p4);