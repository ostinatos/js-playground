function print_order_recursively(adjLists, inDegree, sourceList, sortedOrder) {
    // loop source list, notice: use for instead of while here
    for (let i = 0; i < sourceList.length; i++) {
        let vertex = sourceList[i];
        // push to sorted order
        sortedOrder.push(vertex);

        // IMPORTANT: make a clone of source list, and remove current vertex from the cloned source list
        // source list is a key watershed, so we need to clone it and pass down to the recursive call
        const clonedSourceList = sourceList.slice(0);
        clonedSourceList.splice(clonedSourceList.indexOf(vertex), 1);

        // modify inDegree according to adj lists
        adjLists[vertex].forEach((adjVertex) => {
            inDegree[adjVertex]--;
            if (inDegree[adjVertex] === 0) {
                //   if adj vertext become source, then add it to cloned source list
                clonedSourceList.push(adjVertex);
            }
        });

        // recursive call
        print_order_recursively(
            adjLists,
            inDegree,
            clonedSourceList,
            sortedOrder
        );

        // backtracking: remove current vertex from sorted order, and recover the in-degree of adj vertex
        sortedOrder.splice(
            sortedOrder.findIndex((el) => el === vertex),
            1
        );
        // recover in-degree
        adjLists[vertex].forEach((adjVertex) => {
            inDegree[adjVertex]++;
        });
    }

    if (sortedOrder.length === inDegree.length) {
        console.log(sortedOrder);
    }
}

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

console.log('Task Orders: ');
print_orders(4, [
    [3, 2],
    [3, 0],
    [2, 0],
    [2, 1],
]);

console.log('Task Orders: ');
print_orders(6, [
    [2, 5],
    [0, 5],
    [0, 4],
    [1, 4],
    [3, 2],
    [1, 3],
]);
