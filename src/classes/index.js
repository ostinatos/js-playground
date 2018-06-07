class Minion{
    constructor(name){
        this.name = name;
    }
}

Minion.classProp = "foo";
Minion.prototype.protoProp = "bar";

let rob = new Minion("rob");

console.debug("rob.classProp: ", rob.classProp);
console.debug("rob.protoProp: ", rob.protoProp);