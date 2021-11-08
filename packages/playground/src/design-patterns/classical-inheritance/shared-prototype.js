function Parent(name) {
    this.name = name || 'Adam';
}

Parent.prototype.say = function () {
    return this.name;
};

function Child(name) {
    // invoke parent's constructor function.
    Parent.apply(this, arguments);
}

/* 
share the prototype!!!
*/
Child.prototype = Parent.prototype;

let kid = new Child('Patrick');

console.debug('kid.name', kid.name);

// method on parent's prototype can be inherited.
console.debug('kid.say', kid.say());

// change something on child's prototype
Child.prototype.sayHi = function () {
    return 'hi';
};

// will affect child's instance
console.debug('kid.sayHi', kid.sayHi());

// but WILL ALSO affect parent's instance.
let p = new Parent();
console.debug('p.sayHi', p.sayHi());
