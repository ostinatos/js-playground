/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const tn3 = new TreeNode(3, null, null);
const tn4 = new TreeNode(4, null, null);
const tn6 = new TreeNode(6, null, null);
const tn2 = new TreeNode(2, tn3, tn4);
const tn5 = new TreeNode(5, null, tn6);

const tn1 = new TreeNode(1, tn2, tn5);

const flattenAndReturnLast = function (node) {
    if (!node) {
        return;
    }
    // flatten left tree
    const leftLast = flattenAndReturnLast(node.left);
    flattenAndReturnLast(node.right);
    if (leftLast) {
        leftLast.right = node.right;
        node.right = node.left;
    }
    node.left = null;

    // find last node and return
    let ret = node;
    while (ret.right) {
        ret = ret.right;
    }
    return ret;
};

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (!root) {
        return;
    }
    flattenAndReturnLast(root);
};

flatten(tn1);
