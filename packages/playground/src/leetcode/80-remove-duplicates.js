var removeDuplicates = function (nums) {
    // edge case
    if (nums <= 2) {
        return nums.length;
    }
    // slow pointer points to the end of the return array (exclusive)
    let slow = 2;
    // fast pointer to iterate all the elements
    let fast = 2;
    while (fast < nums.length) {
        /* fast 和 slow-2 相同的时候，证明 fast, slow, slow-1, slow-2 都相等，此时出现三个值相同，因此slow不能移动，要等fast 找到不同的值，就将slow替换掉  */
        if (nums[fast] !== nums[slow - 2]) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
};

let nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums));

/* 
https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/
*/
