import { useStack } from "./use-stack";

const items = Symbol("items");

class Stack {
  constructor() {
    this[items] = [];
  }
  push(item) {
    this[items].push(item);
  }
  pop() {
    return this[items].pop();
  }
  size() {
    return this[items].length;
  }
  peek() {
    return this[items][this[items].length - 1];
  }
  isEmpty() {
    return this[items].length === 0;
  }
  clear() {
    this[items] = [];
  }
}

Stack.prototype.name = "array stack using symbol"
useStack(Stack);

const stack = new Stack();
stack.push(45);
/* demostrating by using getOwnPropertySymbols(), we can still access the "false-private" stack items */
console.log(
  "Object.getOwnPropertySymbols(stack) ",
  Object.getOwnPropertySymbols(stack)
);

console.log(
  "stack[Object.getOwnPropertySymbols(stack)[0]]",
  stack[Object.getOwnPropertySymbols(stack)[0]]
);
