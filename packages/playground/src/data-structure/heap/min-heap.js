export default class MinHeap {
  /**
   * @param {Function} comparator, (a,b)=>{},
   * > 0 if a is greater than b
   * = 0 if a is equal to b
   * < 0 if a is less than b
   */
  constructor({ comparator } = {}) {
    // use array to implement min-heap
    this.heap = [];
    // store the comparator function
    this.comparator = comparator;
  }

  /* utilities function */
  left(i) {
    return (i + 1) * 2 - 1;
  }
  right(i) {
    return (i + 1) * 2;
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  /* swap value on i and j */
  swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  /* core logic functions */
  // used during extract()
  siftDown(index) {
    // handle edge case
    if (index >= this.heap.length - 1) {
      return;
    }
    // candidate index which has min value
    let candidateIndex = index;
    let leftIndex = this.left(index);
    let rightIndex = this.right(index);
    // determine min value between leftIndex and index
    if (
      leftIndex <= this.heap.length - 1 &&
      this.comparator(this.heap[leftIndex], this.heap[index]) < 0
    ) {
      candidateIndex = leftIndex;
    }
    // determine min value between rightIndex and candidate index
    if (
      rightIndex <= this.heap.length - 1 &&
      this.comparator(this.heap[rightIndex], this.heap[candidateIndex]) < 0
    ) {
      candidateIndex = rightIndex;
    }
    if (candidateIndex !== index) {
      this.swap(candidateIndex, index);
      this.siftDown(candidateIndex);
    }
  }

  // use during insert()
  /**
   *
   * @param {*} index
   */
  siftUp(index) {
    // edge case:
    // the index reach the root node or out of bound
    // parent of the index out of bound
    if (index <= 0 || this.parent(index) < 0) {
      return;
    }
    let parentIndex = this.parent(index);
    if (this.comparator(this.heap[index], this.heap[parentIndex]) < 0) {
      // current index value less than parent:
      // swap and call siftDown recursively
      this.swap(index, parentIndex);
      this.siftUp(parentIndex);
    }
  }

  /* public API */
  // insert element into heap
  insert(val) {
    //   place the value at the end of the array
    this.heap.push(val);
    // sift up newly inserted element
    this.siftUp(this.heap.length - 1);
  }

  // inspect minimum element of min heap
  peak() {
    return this.heap[0];
  }

  // extract minimum element of min heap
  extract() {
    if (this.heap.length <= 0) {
      return;
    }
    if (this.heap.length === 1) {
      return this.heap.shift();
    }
    // first value is the value to be returned
    const retValue = this.heap[0];
    // place the last value at the front
    this.heap[0] = this.heap.pop();
    // sift down from the root of the heap (to organize the heap)
    this.siftDown(0);
    return retValue;
  }
  // size of heap
  size() {
    return this.heap.length;
  }
}
