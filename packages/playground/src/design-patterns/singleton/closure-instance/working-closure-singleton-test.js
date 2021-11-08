/* 
here the closure-instance singleton pattern will work, because all the codes are executing in the same module.
but this is not that useful in reality due to the fact that this is only working within the same module.
*/
var Singleton;

Singleton = function () {
    console.debug('executing original Singleton constructor.');
    let instance = this;
    this.foo = 'wuwu';
    this.goo = 'dodo';
    // in modern modular system, the following rewriting is only visible inside current module.
    Singleton = function () {
        return instance;
    };
};

let s1 = new Singleton();
let s2 = new Singleton();
console.debug('s1 === s2: ', s1 === s2);

export default null;
