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

 */
let inherit = (function(){
    // define Pxy once! F will be trapped in this closure.
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
