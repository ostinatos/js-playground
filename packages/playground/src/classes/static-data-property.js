/* 
there is no static data property in ES6.
but we can simulate it in 2 ways:
1. class-side property
2. static getter

differences is that, for approach 1, the same object is returned every time the "static" property is accessed.
for approach 2, a new object is returned every time the "static" property is accessed.

http://exploringjs.com/es6/ch_classes.html
*/

// approach 1: define property on class.
let classA = (function (){
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    Point.ZERO = new Point(0, 0);
    return Point;
})();

// approach: static getter.
let classB = (function(){
    class Point{
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        static get ZERO(){
            return new Point(0, 0);
        }
    }
    return Point;
})()

function testcase(classDef){
    console.debug("classDef.ZERO ", classDef.ZERO);
}

testcase(classA);
testcase(classB);