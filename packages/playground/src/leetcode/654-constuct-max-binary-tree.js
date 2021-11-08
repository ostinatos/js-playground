/**
 * Definition for a binary tree node.
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * construct max tree helper function
 * @param {Array} nums source array to be processed
 * @param {number} startIndex
 * @param {number} endIndex
 * @return max tree root node
 */
const maxTreeHelper = function (nums, startIndex, endIndex) {
    /* handle edge case */
    if (startIndex > endIndex) {
        return null;
    }
    /* find max value in nums */
    let max = nums[startIndex];
    let maxIndex = startIndex;
    for (let i = startIndex; i <= endIndex; i++) {
        if (nums[i] > max) {
            max = nums[i];
            maxIndex = i;
        }
    }

    /* divide current array range by max value */
    const leftTreeRoot = maxTreeHelper(nums, startIndex, maxIndex - 1);
    const rightTreeRoot = maxTreeHelper(nums, maxIndex + 1, endIndex);

    const rootNode = new TreeNode(nums[maxIndex]);
    rootNode.left = leftTreeRoot;
    rootNode.right = rightTreeRoot;

    return rootNode;
};

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    return maxTreeHelper(nums, 0, nums.length - 1);
};

const nums = [3, 2, 1, 6, 0, 5];

console.log(constructMaximumBinaryTree(nums));
