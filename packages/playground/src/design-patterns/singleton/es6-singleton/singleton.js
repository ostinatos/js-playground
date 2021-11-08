/* 
Singleton using ES6 class.

this pattern is actually the same as "static instance" singleton pattern.
class is only a syntax sugar.
*/
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        this.foo = 'minions';
        Singleton.instance = this;
    }
}

export default Singleton;
