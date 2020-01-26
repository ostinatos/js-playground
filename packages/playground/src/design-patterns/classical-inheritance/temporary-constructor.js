/* 
 */
function Parent(name) {
    this.name = name || 'Adam';
}

Parent.prototype.say = function () {
    return this.name;
}

function Child(name) {
    // invoke parent's constructor function.
    Parent.apply(this, arguments);
}

/* 
using a temporary function to decouple Parent's prototype and Child's prototype.
*/
function F() { }
F.prototype = Parent.prototype;
Child.prototype = new F();

let kid = new Child("Patrick");

console.debug("kid.name", kid.name);

// method on parent's prototype can be inherited.
console.debug("kid.say", kid.say());

// change something on child's prototype
Child.prototype.sayHi = function () {
    return "hi"
}

// will affect child's instance
console.debug("kid.sayHi", kid.sayHi());

// but will not affect parent's instance.
let p = new Parent();
console.debug("p.sayHi", p.sayHi);

// wait, kid's constructor's name is not right!
console.debug("kid.constructor.name", kid.constructor.name);
