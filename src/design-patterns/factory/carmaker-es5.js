/* 
An example of factory pattern using ES5.

base-class: CarMaker
    base-class instance function: drive()
    base-class static function: factory()
sub-class: Compact, Convertible, SUV

behavior:
static factory method will create sub-class instance based on "type" parameter.
*/

// CarMaker, act as base class
function CarMaker(){}

// function of base class, will be inherited by sub-class
CarMaker.prototype.drive = function(){
    return "Vroom, i have " + this.doors + " doors";
}

// static factory method of base class "CarMaker"
CarMaker.factory = function(type){
    if(typeof CarMaker[type] !== "function"){
        throw {
            name:"Error",
            message: type + " doesn't exist"
        }
    }

    // make the sub-class "inherit" base class, by setting prototype to "base class" object.
    // TODO: how to do it in ES6 style?
    if(typeof CarMaker[type].prototype.drive !== "function"){
        CarMaker[type].prototype = new CarMaker();
    }

    // using sub-class constructor function to create new sub-class object.
    var newCar = new CarMaker[type]();
    return newCar;
}

/* 
define sub-class constructor function.
*/
CarMaker.Compact = function(){
    this.doors = 4;
}
CarMaker.Convertible = function(){
    this.doors = 2;
}
CarMaker.SUV = function(){
    this.doors = 24;
}

export default CarMaker;