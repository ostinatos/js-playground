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
 * NOTICE: preorder and inorder should be of the same length.
 */
const buildTreeHelper = function (
    { preorder, preStartIndex, preEndIndex },
    { inorder, inStartIndex, inEndIndex }
) {
    /* handling some edge case */
    // edge case 1: length less than zero
    if (preStartIndex > preEndIndex) {
        return null;
    }
    /* 下面的判断其实是多余的，上面的判断已经可以覆盖，当然前提是 preorder 和 inorder 的紧密关联关系，以及递归调用没有写错 */
    //   index out of bound
    //   if (
    //     preStartIndex < 0 ||
    //     preStartIndex > preorder.length - 1 ||
    //     preEndIndex < 0 ||
    //     preEndIndex > preorder.length - 1 ||
    //     inStartIndex < 0 ||
    //     inStartIndex > inorder.length - 1 ||
    //     inEndIndex < 0 ||
    //     inEndIndex > inorder.length - 1
    //   ) {
    //     return null;
    //   }
    //   if (preStartIndex === preEndIndex) {
    //     //   edge case 2: only one element
    //     return new TreeNode(preorder[preStartIndex]);
    //   }

    /* find root node */
    const rootNodeValue = preorder[preStartIndex];

    /* find root node value in inorder sequence */
    const rootNodeIndex = inorder.findIndex((el) => el === rootNodeValue);
    const leftTreeLength = rootNodeIndex - inStartIndex;

    const leftTreeRoot = buildTreeHelper(
        {
            preorder,
            preStartIndex: preStartIndex + 1,
            preEndIndex: preStartIndex + leftTreeLength,
        },
        {
            inorder,
            inStartIndex: inStartIndex,
            inEndIndex: inStartIndex + leftTreeLength - 1,
        }
    );

    const rightTreeRoot = buildTreeHelper(
        {
            preorder,
            preStartIndex: preStartIndex + leftTreeLength + 1,
            preEndIndex,
        },
        {
            inorder,
            inStartIndex: inStartIndex + leftTreeLength + 1,
            inEndIndex: inEndIndex,
        }
    );

    const rootNode = new TreeNode(rootNodeValue);
    rootNode.left = leftTreeRoot;
    rootNode.right = rightTreeRoot;
    return rootNode;
};

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    return buildTreeHelper(
        { preorder, preStartIndex: 0, preEndIndex: preorder.length - 1 },
        { inorder, inStartIndex: 0, inEndIndex: inorder.length - 1 }
    );
};

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

console.log(buildTree(preorder, inorder));
