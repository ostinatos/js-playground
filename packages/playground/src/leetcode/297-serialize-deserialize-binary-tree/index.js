// import { serialize, deserialize } from "./preorder-dfs";
import { serialize, deserialize } from "./bfs";
import { TreeNode } from "./treenode";

const four = new TreeNode(4);
const five = new TreeNode(5);
const three = new TreeNode(3);
three.left = four;
three.right = five;
const two = new TreeNode(2);
const one = new TreeNode(1);
one.left = two;
one.right = three;

console.log(serialize(one));

// console.log(deserialize(serialize(one)));
