/* 
example taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
*/
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal {
    constructor(name) {
        // omitting following line will result in syntax error: missing super() call in constructor
        super(name); // call the super class constructor and pass in the name parameter
    }

    speak() {
        super.speak();
        console.log(this.name + ' barks.');
    }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
