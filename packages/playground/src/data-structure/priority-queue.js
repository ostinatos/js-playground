/* 
MaxHeap
a binary tree implemented by an array
parent is larger than children
left child is larger than right child
*/
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }
  leftChild(index) {
    return index * 2 + 1;
  }
  rightChild(index) {
    return index * 2 + 2;
  }

  swap(index1, index2) {
    const tmp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = tmp;
  }

  //   return the root node of current max heap
  peek() {
    return this.heap[0];
  }

  // insert new element to heap.
  /* 
  logic: 
  add element to the end of the array
  and repeatly compare the added element and its parent
  until added element <= parent element
  or root element is reached
  NOTICE:
  this insertion logic only ensure the parent is larger than children
  left child is not guaranteed to be larger than right child
  */
  insert(element) {
    this.heap.push(element);

    //   get the newly inserted element's index
    let currentIndex = this.heap.length - 1;
    while (
      this.heap[this.parent(currentIndex)] < this.heap[currentIndex] &&
      currentIndex !== 0
    ) {
      this.swap(currentIndex, this.parent(currentIndex));
      currentIndex = this.parent(currentIndex);
    }
  }

  heapify(index) {
    let left = this.leftChild(index);
    let right = this.rightChild(index);
    let toBeSwap = index;

    if (left < this.heap.length && this.heap[left] > this.heap[toBeSwap]) {
      // to be swap is the one with greater value
      toBeSwap = left;
    }
    if (right < this.heap.length && this.heap[right] > this.heap[toBeSwap]) {
      toBeSwap = right;
    }
    if (toBeSwap !== index) {
      this.swap(toBeSwap, index);
      this.heapify(toBeSwap);
    }
  }

  extractMax() {
    //   remove the first element off the array (the root node)
    const root = this.heap.shift();

    // get the last element of the array, and add it to the root of heap (first element of the array)
    const lastElement = this.heap.pop();
    if (lastElement !== undefined) {
      this.heap.unshift(lastElement);
    }

    // correctly reposition the heap

    return root;
  }
}

const pq = new MaxHeap();

pq.insert(18);
pq.insert(24);
pq.insert(17);
pq.insert(26);
pq.insert(20);
console.log(pq.peek());
