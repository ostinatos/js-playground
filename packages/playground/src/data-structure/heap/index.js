import MinHeap from './min-heap';

const minHeap = new MinHeap({ comparator: (a, b) => a - b });
window.minHeap = minHeap;

minHeap.insert(10);
minHeap.insert(9);
minHeap.insert(2);
minHeap.insert(4);
minHeap.insert(11);

console.log(minHeap.peak());
console.log(minHeap.heap);

console.log('extract min: ', minHeap.extract());
console.log(minHeap.heap);
