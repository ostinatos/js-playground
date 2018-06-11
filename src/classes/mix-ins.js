let calculatorMixin = Base => class extends Base {
    calc() {console.debug("calling calc() obtained from calculatorMixin") }
};

let randomizerMixin = Base => class extends Base {
    randomize() {console.debug("calling randomize() obtained from randomizerMixin") }
};

class Foo {
    foo(){console.debug("calling foo() obtained from Foo")};
 }
class Bar extends calculatorMixin(randomizerMixin(Foo)) { }

let b = new Bar();

b.calc()
b.randomize();
b.foo();