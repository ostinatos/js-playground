/* 
implementing class in ES5.
*/
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(this.name + ' makes a noise.');
};

function Dog(name) {
    // this is the key to "inheritance".
    // call "super class" constructor with "this"
    Animal.call(this, name);
}

Dog.prototype.speak = function () {
    // make call to "super class" instance method(prototype method)
    Animal.prototype.speak.call(this);
    console.log(this.name + ' barks.');
};

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
