/* 
default patterns for implementing classical inheritance.

set child prototype to a new parent object.

DRAWBACK of this approach is that, child will "inherit" parent's "own" properties, which on registered on parent instance.
*/

function inherit(Child, Parent){
    // set child prototype to a new parent object.
    Child.prototype = new Parent();
}

/* 
expected outcome of classical inheritance
*/
function Parent(name) {
    this.name = name || 'Adam';
}

Parent.prototype.say = function () {
    return this.name;
}

function Child(name) { }

inherit(Child, Parent);

let kid = new Child("Patrick");
console.debug("kid.say()", kid.say());

export default {};