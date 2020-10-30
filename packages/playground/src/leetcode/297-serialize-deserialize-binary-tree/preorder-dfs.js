import { TreeNode } from "./treenode";

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  // use pre-order traversal
  if (!root) {
    // return hash for empty node
    return "#";
  }
  const leftTreeString = serialize(root.left);
  const rightTreeString = serialize(root.right);
  return `${root.val},${leftTreeString},${rightTreeString}`;
};
/**
 *
 * @param {*} nodeValues target node values yielded by split(data, ",")
 * @param {*} startIndex start index position for deserialize current tree
 * @return
 * {endIndex, root}
 * end index of current tree in nodeValues
 * root node
 */
const desHelper = function (nodeValues, startIndex) {
  if (nodeValues[startIndex] === "#") {
    return {
      root: null,
      endIndex: startIndex,
    };
  }
  const root = new TreeNode(nodeValues[startIndex]);
  const { root: leftRoot, endIndex: leftEndIndex } = desHelper(
    nodeValues,
    startIndex + 1
  );
  const { root: rightRoot, endIndex: rightEndIndex } = desHelper(
    nodeValues,
    leftEndIndex + 1
  );

  root.left = leftRoot;
  root.right = rightRoot;
  return {
    root,
    endIndex: rightEndIndex,
  };
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const nodeValues = data.split(",");
  const { root } = desHelper(nodeValues, 0);
  return root;
};

export { serialize, deserialize };
