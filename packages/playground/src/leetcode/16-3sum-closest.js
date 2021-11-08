/* https://leetcode-cn.com/problems/3sum-closest/ */

/**
 * time complexity: O(n^2)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    //   edge case
    if (nums.length < 3) {
        return;
    }
    // first of all, sort the input array
    nums.sort((a, b) => a - b);

    let closestThreeSum = Infinity;

    //   loop the sorted input array
    for (let idx = 0; idx < nums.length - 2; idx++) {
        let temp = nums[idx];
        let tempTarget = target - temp;
        debugger;
        // find the closest sum that can get from the rest of array
        let tempClosest = findClosestSum(nums, idx + 1, tempTarget);
        let tempSum = tempClosest + temp;
        // compare the absolute diff, mark it if it is smaller
        if (Math.abs(tempSum - target) < Math.abs(closestThreeSum - target)) {
            closestThreeSum = tempSum;
        }
    }

    return closestThreeSum;
};

/**
 * @return closest sum
 */
function findClosestSum(nums, start, target) {
    // two pointers
    let left = start;
    let right = nums.length - 1;
    let returnClosestSum = Infinity;
    while (left < right) {
        let sum = nums[left] + nums[right];
        // just right
        if (sum === target) {
            return sum;
        }
        // mark the closest diff if the current diff is smaller
        if (Math.abs(target - sum) < Math.abs(target - returnClosestSum)) {
            returnClosestSum = sum;
        }

        if (target - sum > 0) {
            left++;
        } else {
            right--;
        }
    }
    return returnClosestSum;
}

threeSumClosest([-1, 2, 1, -4], 1);
