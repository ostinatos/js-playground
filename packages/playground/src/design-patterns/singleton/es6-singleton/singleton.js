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

/* 
下面这种写法和上面的写法的效果是一样的
instance 作为 class 的static 变量；
instance外部可以访问到； 
 */
class Singleton2 {
    static instance;
    constructor() {
        if (Singleton2.instance) {
            return Singleton2.instance;
        }
        Singleton2.instance = this;
    }
}

export default Singleton2;
