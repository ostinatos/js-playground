import { useStack } from './use-stack';

const items = new WeakMap();

class Stack {
    constructor() {
        // init items array through class instance itself
        // by this mean items are truly private
        // because items are in closure of this module
        items.set(this, []);
    }
    push(item) {
        items.get(this).push(item);
    }
    pop() {
        return items.get(this).pop();
    }
    size() {
        return items.get(this).length;
    }
    peek() {
        return items.get(this)[items.get(this).length - 1];
    }
    isEmpty() {
        return items.get(this).length === 0;
    }
    clear() {
        items.set(this, []);
    }
}

Stack.prototype.name = 'array stack using weakmap';

useStack(Stack);

const stack = new Stack();
stack.push(45);
/* demostrating by using getOwnPropertySymbols(), we can still access the "false-private" stack items */
console.log(
    'Object.getOwnPropertySymbols(stack) ',
    Object.getOwnPropertySymbols(stack)
);

console.log(
    'stack[Object.getOwnPropertySymbols(stack)[0]]',
    stack[Object.getOwnPropertySymbols(stack)[0]]
);
