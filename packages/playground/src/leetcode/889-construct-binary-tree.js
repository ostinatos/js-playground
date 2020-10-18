/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function (pre, post) {
  if (pre.length < 1) {
    return null;
  } else if (pre.length === 1) {
    //   only one node, return directly
    return new TreeNode(pre[0]);
  }

  /* find root node, first element of the pre-order sequence */
  const rootNodeValue = pre[0];

  const childRootNode = pre[1];

  /* find root node value in post-order sequence */
  const childRootNodeIndex = post.findIndex((el) => el === childRootNode);

  /*  */
  const leftTreeNodeCount = childRootNodeIndex + 1;

  /* construct left tree and get the root of tree */
  const leftTreeRoot = constructFromPrePost(
    pre.slice(1, 1 + leftTreeNodeCount),
    post.slice(0, leftTreeNodeCount)
  );

  /* construct right tree */
  const rightTreeRoot = constructFromPrePost(
    pre.slice(1 + leftTreeNodeCount, pre.length),
    post.slice(leftTreeNodeCount, post.length - 1)
  );

  const rootNode = new TreeNode(rootNodeValue);
  rootNode.left = leftTreeRoot;
  rootNode.right = rightTreeRoot;

  return rootNode;
};

const pre = [1, 2, 4, 5, 3, 6, 7];
const post = [4, 5, 2, 6, 7, 3, 1];

console.log(constructFromPrePost(pre, post));
