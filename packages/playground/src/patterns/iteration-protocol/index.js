import MyIterable from "./my-iterable";
import makeSimpleGenerator from "./my-iterable-using-generator";

const it = new MyIterable([1, 2, 3, 4, 5]);
console.log("iterate iterator implemented by class:", it);
// 本质就是在原型链上实现了 Symbol.iterator 属性的对象
console.log(Object.prototype.toString.call(it));
console.log("iterator:", it[Symbol.iterator]);

for (let i of it) {
  console.log(i);
}

const generator = makeSimpleGenerator([1, 2, 3, 4, 5]);
console.log("iterate iterator implemented by generator:", generator);
console.log(Object.prototype.toString.call(generator));
console.log("iterator:", generator[Symbol.iterator]);

for (const i of generator) {
  console.log(i);
}
