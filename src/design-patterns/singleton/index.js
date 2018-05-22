/* 
Singleton patterns

refer to Javascript Patterns, chapter 7.

using different approach to implement "singleton" pattern.

1. static instance
2. closure instance (not working in modern modular system)
3. es6 class (actually the same as approach #1)

NOTICE:
in fact, creating object using object literal means creating a singleton.

上面提及的几种实现singleton的方式，实际上只是用function constructor在模拟class-based的语言(例如java)的singleton效果。

另外，上述的方式1和方式3存在一个问题，就是instance是暴露在外的，可以直接访问到。
*/

// import Singleton from './static-instance/singleton'
// import Singleton from './closure-instance/singleton'
import Singleton from './es6-singleton/singleton'

let s1 = new Singleton();
let s2 = new Singleton();
console.debug("s1 === s2: ", s1 === s2);

console.debug("Singleton.instance: ", Singleton.instance);

// import './closure-instance/working-closure-singleton-test'

/* 
implementing a simple "singleton" store.
*/
// import './singleton-map-test1'
// import './singleton-map-test2'