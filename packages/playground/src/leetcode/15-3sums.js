/* https://leetcode-cn.com/problems/3sum/ */

/**
 *
 *
 * @param {*} nums, sorted input array
 * @param {number} target
 * @param {*} start
 * @return number[][], array of desired num pair
 */
function twoSum(nums, target, start) {
    let result = [];
    //   edge case: 需要被搜索的范围小于等于1个元素
    if (start >= nums.length - 1) {
        return result;
    }
    // head 从前往后扫描，tail 从后往前扫描
    let head = start;
    let tail = nums.length - 1;
    while (head < tail) {
        let sum = nums[head] + nums[tail];
        if (sum === target) {
            result.push([nums[head], nums[tail]]);
            head++;
            tail--;
            // 关键：head 和 tail 的移动都需要考虑有重复元素的情况，遇到和前一个元素相同的情况，就需要扫描下一个元素
            while (head < tail && nums[head] === nums[head - 1]) {
                head++;
            }
            while (head < tail && nums[tail] === nums[tail + 1]) {
                tail--;
            }
            continue;
        }
        if (sum < target) {
            head++;
            continue;
        }
        if (sum > target) {
            tail--;
            continue;
        }
    }

    return result;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    /**
     * 1. 最暴力的解法：3个嵌套循环，时间复杂度 O(n^3)
     * 2. 解法：
     * - 对输入数组排序
     * - 从最小值-k开始，扫描到=0的元素，开始找 twoSum(k)
     *  */

    // sort the input array in place
    const sortedNums = nums.sort((a, b) => {
        return a - b;
    });

    let p = 0;
    let result = [];

    while (sortedNums[p] <= 0) {
        // 关键：if current number is the same as before, skip current number.
        // 因为前一个数字的可行组合必然包含当前相同数字的可行组合了
        if (p > 0 && sortedNums[p - 1] === sortedNums[p]) {
            p++;
            continue;
        }
        let twoSumPairs = twoSum(sortedNums, -sortedNums[p], p + 1);
        for (let i = 0; i < twoSumPairs.length; i++) {
            result.push([sortedNums[p], ...twoSumPairs[i]]);
        }
        // move p forward
        p++;
    }
    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([]));
console.log(threeSum([0]));
console.log(threeSum([-2, 0, 0, 2, 2]));

// console.log(twoSum([-1, -1, 0, 1, 2], 1, 1));
