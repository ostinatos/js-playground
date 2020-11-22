function print_order_recursively(adjLists, inDegree, sourceList, sortedOrder) {}

function print_orders(tasks, prerequisites) {
  // adj list for all vertex
  const adjLists = new Array(tasks).fill(0).map(() => []);
  //   in degree
  const inDegree = new Array(tasks).fill(0);

  //   init adj list and in-degree
  prerequisites.forEach((pre) => {
    const parent = pre[0];
    const child = pre[1];
    adjLists[parent].push(child);
    inDegree[child]++;
  });

  const sortedOrder = [];
  const sourceList = [];

  //   find source vertex
  inDegree.forEach((value, index) => {
    if (value === 0) {
      sourceList.push(index);
    }
  });

  print_order_recursively(adjLists, inDegree, sourceList, sortedOrder);
}

// console.log("Task Orders: ");
// print_orders(3, [
//   [0, 1],
//   [1, 2],
// ]);

console.log("Task Orders: ");
print_orders(4, [
  [3, 2],
  [3, 0],
  [2, 0],
  [2, 1],
]);

// console.log("Task Orders: ");
// print_orders(6, [
//   [2, 5],
//   [0, 5],
//   [0, 4],
//   [1, 4],
//   [3, 2],
//   [1, 3],
// ]);
