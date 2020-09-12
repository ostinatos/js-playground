import { useStack } from "./use-stack";

class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }
  push(item) {
    this.items[this.count++] = item;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      const ret = this.items[--this.count];
      //   remember to delete item after popping
      delete this.items[this.count];
      return ret;
    }
  }
  isEmpty() {
    return this.count === 0;
  }
  size() {
    return this.count;
  }
  peek() {
    return this.items[this.count - 1];
  }
  clear() {
    this.items = {};
    this.count = 0;
  }
}

Stack.prototype.name = "object stack"

useStack(Stack);
