class Node {
  constructor({ val, left, right }) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function bfs(node, func) {
  if (!node) {
    return node;
  }
  let pendingNodes = [node];
  while (pendingNodes.length > 0) {
    let currentNode = pendingNodes.shift();
    // visit current node
    func(currentNode);
    if (currentNode.left) {
      pendingNodes.push(currentNode.left);
    }
    if (currentNode.right) {
      pendingNodes.push(currentNode.right);
    }
  }
}

const node1 = new Node({ val: 1 });
const node2 = new Node({ val: 2 });
const node3 = new Node({ val: 3 });
const node4 = new Node({ val: 4 });
const node5 = new Node({ val: 5 });
const node6 = new Node({ val: 6 });
const node7 = new Node({ val: 7 });
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

bfs(node1, (node) => {
  console.log(node.val);
});
