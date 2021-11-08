/* 
prototype in class.
instance member in class.
 */
class Minion {
    constructor(name) {
        this.name = name;
    }

    getNormalizedName() {
        return `minion code: ${this.name}`;
    }
}

Minion.classProp = 'foo';

// prototype property. it just like "name" property in this example.
Minion.prototype.protoProp = 'bar';

Minion.prototype.getNormalizedName2 = function () {
    return `bello ${this.name}`;
};

let rob = new Minion('rob');

// class property is just like property on function. it will not affect the instance it created.
console.debug('rob.classProp: ', rob.classProp);

// but property registered on prototype will affect the instance it created.
console.debug('rob.protoProp: ', rob.protoProp);
// name is accessible without getter method
console.debug('rob.name: ', rob.name);

//
console.debug('rob.getNormalizedName() ', rob.getNormalizedName());
console.debug('rob.getNormalizedName2() ', rob.getNormalizedName2());

// what if prototype of class is changed?
Minion.prototype = {};

let kevin = new Minion('kevin');

// following 2 lines will throw exception!
// console.debug("kevin.getNormalizedName() ", kevin.getNormalizedName())
// console.debug("kevin.getNormalizedName2() ", kevin.getNormalizedName2())
