function Singleton() {
    if (typeof Singleton.instance === 'object') {
        return Singleton.instance;
    }

    this.foo = 'wawawa';
    this.goo = 'bababa';

    Singleton.instance = this;

    return this;
}

export default Singleton;
