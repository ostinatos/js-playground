// singleton instance. 通过es module 的特性，可以对外隐藏
let instance = null;

class Singleton {
    foo;
    bar;
    constructor() {
        if (!instance) {
            instance = this;
            // field assignment
            instance.foo = 'minion';
            instance.bar = 'bar';
        }
        return instance;
    }
}

export default Singleton;
