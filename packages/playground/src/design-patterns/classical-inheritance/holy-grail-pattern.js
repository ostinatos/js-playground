/* 
holy-grail patterns for classical inheritance.
keypoint:
- use borrowing-constructor pattern to call parent's constructor in child's constructor.
    so that child can have props of his own.
- use temporary-constructor pattern (inherit function), 
    so that child can inherit props from parent.prototype, and also avoid affecting parent's prototype while modifying child's prototype.
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

 */
let inherit = (function(){
    // define Pxy once! Pxy will be trapped in this closure.
    let Pxy = function (){};
    return function(child, base){
        // set Pxy.prototype
        Pxy.prototype = base.prototype;
        // point to a new proxy object.
        child.prototype = new Pxy();

        // store base's prototype
        child.uber = base.prototype;

        // restore the constructor, so that constructor name is RIGHT!!!
        child.prototype.constructor = child;
    }
}())

// make the inheritance happened.
inherit(Child, Parent);

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

// kid's constructor name is right!
console.debug("kid.constructor.name", kid.constructor.name);
console.debug("kid instanceof Child", kid instanceof Child);
console.debug("kid instanceof Parent", kid instanceof Parent);
