class Minion {
  constructor(name) {
    this.name = name;
  }
}

const kevin = new Minion("kevin");
const josh = new Minion("josh");

Minion.prototype.banana = "banana";

/* class instance object's __proto__ */
console.log(
  "kevin.__proto__ === Minion.prototype",
  kevin.__proto__ === Minion.prototype
);

console.log(
  "Object.getPrototypeOf(kevin) === Minion.prototype",
  Object.getPrototypeOf(kevin) === Minion.prototype
);

console.log(
  "Minion.__proto__ === Function.prototype",
  Minion.__proto__ === Function.prototype
);

console.log(
  "Minion.prototype.__proto__ === Object.prototype",
  Minion.prototype.__proto__ === Object.prototype
);

console.log(
  "Object.prototype.__proto__ === null",
  Object.prototype.__proto__ === null
);

console.log(
  "Function.prototype.__proto__ === Object.prototype",
  Function.prototype.__proto__ === Object.prototype
);

console.log(
  "Minion.prototype.constructor === Minion",
  Minion.prototype.constructor === Minion
);


console.log(`kevin.banana === "banana"`, kevin.banana === "banana");
