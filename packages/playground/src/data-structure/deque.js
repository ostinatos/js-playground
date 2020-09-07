/* double-ended queue */
class Deque {
  constructor() {
    this.items = {};
    this.leadIndex = 0;
    this.trailIndex = 0;
  }

  size() {
    return this.leadIndex - this.trailIndex;
  }

  clear() {
    //reset the items
    this.items = {};
    this.leadIndex = 0;
    this.trailIndex = 0;
  }

  toString() {
    if (!this.size()) {
      return "";
    }
    let retString = this.items[this.trailIndex];
    for (let i = this.trailIndex + 1; i < this.leadIndex; i++) {
      retString += `, ${this.items[i]}`;
    }

    return retString;
  }

  /* add element at the back of the queue
  the same as FIFO queue's enqueue() method
  */
  addBack(element) {
    this.items[this.leadIndex] = element;
    this.leadIndex++;
  }

  /* remove element from the front of the queue
  the same as fifo queue's dequeue
  */
  removeFront() {
    if (!this.size()) {
      return undefined;
    }
    const result = this.items[this.trailIndex];
    delete this.items[this.trailIndex];
    this.trailIndex++;
    return result;
  }

  /* add element at the front of the queue */
  addFront(element) {
    this.items[--this.trailIndex] = element;
  }

  /* remove element at the back of the queue */
  removeBack() {
    if (!this.size()) {
      return undefined;
    }
    const result = this.items[--this.leadIndex];
    return result;
  }
}

const dq = new Deque();

dq.addFront("John");
dq.addFront("Josh");
dq.addFront("Kevin");
console.log(dq.toString());
dq.removeFront();
console.log(dq.toString());
dq.removeBack();
console.log(dq.toString());
