/* 
closure-instance singleton pattern
introduced in javascript patterns, chapter 7.
but this is NOT working in modern modular standard (with or without babel loader).

the reason is that, in modern modular system, this module will be executed in a closure.
so rewriting the variable is only visible inside the closure, the code outside the closure will NOT see the result of rewriting.

*/

var Singleton;

Singleton = function() {
    console.debug("executing original Singleton constructor.")
    let instance = this;
    this.foo = "wuwu";
    this.goo = "dodo";
    // in modern modular system, the following rewriting is only visible inside current module.
    Singleton = function(){ 
        return instance;
    }
}

export default Singleton;