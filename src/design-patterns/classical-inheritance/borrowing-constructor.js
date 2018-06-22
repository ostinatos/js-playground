/* 
"borrowing constructor" approach to implement inheritance.

pros:
child get its own property. 
modifications made to child's properties will not affect parent's property.

cons:
1. properties and methods registered on parent's prototype can not be inherited.

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

let kid = new Child("Patrick");
console.debug("kid.name", kid.name);

// method on parent's prototype can not be inherited.
console.debug("kid.say", kid.say);

// kid's constructor is child
console.debug("kid.constructor.name", kid.constructor.name);