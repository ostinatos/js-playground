class Vehicle {
    constructor() {
        this.hasEngine = true;
    }
}

class Bus extends Vehicle {
    constructor() {
        // must call super in sub-class
        super();
        this.hasWheels = true;
    }
}

const bus = new Bus();
