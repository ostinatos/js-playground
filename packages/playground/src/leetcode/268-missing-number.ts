// a very intuitive algorithm
function missingNumber(nums: Array<number>): number {
    // space: O(n)
    // time: O(n)
    // array of flag to indicate presence of number, size is equals to the input array
    const numberFlag = [];

    // iterate the input array
    for (let i = 0; i < nums.length; i++) {
        numberFlag[nums[i]] = true;
    }

    // iterate flag array to find the absence number
    for (let j = 0; j < nums.length; j++) {
        if (!numberFlag[j]) {
            return j;
        }
    }
    return nums.length;
}

function missingNumber2(nums: Array<number>) {
    // input: n items，可能取值为0到N
    // 完整的值域: n+1 个值
    // 所以如果要将 N+1个 items 就地放在原来输入的数组中的话，就意味着 第N+1个元素无法放置
    // 因此需要设定的规则是，不处理 N+1的元素，也就是值为N的元素
    /* 
    思路：
    不创建额外的空间，就地对输入的数组进行排序
    排序基于的逻辑，是每个元素清楚的知道其应该处于的排序位置
    排序完后，当最后的元素在其应该在的位置？
        是，则缺少的值是 N
        否，则缺少的值是 N值所在的位置本应该对应的值
    
    算法逻辑
    cursor 从元素0开始，一直移动到最后一个位置（index: n-1）
        特殊情况判断：cursor 所在元素值为N？
            将当前cursor位置记录为 maxValueIndex
            然后，cursor + 1向前移动（跳过不处理），进入下一次循环
        判断 cursor 所在的item 是否在其应该在的位置：
            如果在的话，cursor +1 向前移动
            如果不在的话
                cursor 所在的item 和其应该在的位置的item 进行置换    
    处理完N次后，判断cursor 所在元素在其应该在的位置？
        在，则返回N
        不在，则返回cursor 位置本应放置的元素
    */
    let cursor = 0;
    const maxValue = nums.length;
    let maxValueIndex = -1;

    while (cursor < maxValue) {
        if (nums[cursor] === maxValue) {
            maxValueIndex = cursor;
            cursor++;
            continue;
        }
        if (nums[cursor] === cursor) {
            cursor++;
            continue;
        } else {
            // 将 cursor 所在的值和其应该在的index 的值进行交换
            const temp = nums[cursor];
            nums[cursor] = nums[temp];
            nums[temp] = temp;
        }
    }
    if (maxValueIndex >= 0) {
        return maxValueIndex;
    } else {
        return maxValue;
    }
}

function missingNumber3(nums) {
    /*
    优化算法逻辑，进行简化

    state:
    cursor, 用于遍历输入数组的所有位置，从开头一直遍历到结尾 
    maxValueIndex, 最大值n所在的位置，因为最大值n在 0 - n-1 的slot 中无处安放，因此其所在的位置实际上就表示了缺失的元素的位置

    设置cursor，从数组开头一直遍历到结尾：0 -> n-1
    如果 cursor位置所在的值 nums[cursor] 的值域为 0到n-1 并且 nums[cursor] 和 nums[nums[cursor]] 的值是否不相同？
        成立，则 交换（swap）两者的值
        不成立，
            如果 nums[cursor] 值为n （特殊值，不处理）
                记录 maxValueIndex = cursor
            则cursor + 1，进入下一次循环
    
     */
    let cursor = 0;
    // -1 表示 maxValue没有放在 0～n-1 的slot 中
    let maxValueIndex = -1;
    const maxValue = nums.length;

    while (cursor < nums.length) {
        // 记录 cursor 所指向的value，避免后面swap的时候，在swap过程中index被改变
        const cursorValue = nums[cursor];
        if (
            nums[cursor] >= 0 &&
            nums[cursor] < maxValue &&
            nums[cursor] !== nums[cursorValue]
        ) {
            // swap nums[cursor] and nums[cursorValue]
            const temp = nums[cursor];
            nums[cursor] = nums[cursorValue];
            nums[cursorValue] = temp;
        } else {
            if (nums[cursor] === maxValue) {
                maxValueIndex = cursor;
            }
            cursor++;
        }
    }
    if (maxValueIndex >= 0) {
        return maxValueIndex;
    } else {
        return maxValue;
    }
}

const testcases = [[3, 0, 1], [0, 1], [9, 6, 4, 2, 3, 5, 7, 0, 1], [0]];

testcases.forEach((tc) => {
    console.log(missingNumber3(tc));
});
