/* 
relationship between prototype and __proto__
*/
let Car = function () {
    this.getWheelCount = function () {
        return this.wheelCount;
    };
};

// setting Car's prototype
Car.prototype = { wheelCount: 4 };

// carA.__proto__ will point to the object which Car.prototype point to
let carA = new Car();

// carA itself does not have wheelCount property, so wheelCount will be resolved through scoped chain.
// and carA.__proto__ is found.
console.debug('carA has ', carA.getWheelCount(), ' wheels');
console.debug('carA __proto__', carA.__proto__);

console.debug('Car.prototype: ', Car.prototype);

// change Car.prototype here.
Car.prototype = { wheelCount: 2 };

let carB = new Car();

// Car.prototype has been changed, but carA.__proto__ remains the SAME.
console.debug(
    'carA has ',
    carA.getWheelCount(),
    ' wheels after Car.prototype had been changed.'
);
console.debug('carA __proto__', carA.__proto__);

console.debug('carB has ', carB.getWheelCount(), ' wheels');
console.debug('carB __proto__', carB.__proto__);

console.debug('Car.prototype: ', Car.prototype);
