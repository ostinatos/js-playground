/* in place quick sort, in ascending order

space: O(n)
time: O(n*logn)

problems encountered:
1. why return left in partition? why not right?
2. in quick(), why we call quick() recursively using quick(arr, start, pivot-1) and quick(arr, pivot, end),
why not quick(arr, start, pivot) and quick(arr, pivot+1, end) ?

Keys:
* partition 只保证 pivot的左边不大于pivot，但并不保证pivot的右边都是比pivot大的元素 可以分析一下处理 [1, 9, 1, 6, 3, 1] 的过程
* partition中取pivot index的时候取floor还是取ceiling，决定着
1. partition返回的是left 还是 right
2. partition后，divide的边界，是 start -> pivot, pivot+1 -> end，还是start -> pivot-1, pivot-> end

Summary:
analysis to the edge case is vital important.
在quick sort中，这个关键的edge case就是只剩两个元素时候的情况。
*/


function quicksort(arr) {
    quick(arr, 0, arr.length - 1);
}

function quick(arr, startIndex, endIndex) {
    if (startIndex >= endIndex) {
        return;
    }

    let pivotIndex = partition(arr, startIndex, endIndex);
    // why should we use start to pivot-1 here? not start to pivot?
    // think about the edge case: partition will ALWAYS return endIndex when startIndex + 1 = endIndex !
    if (startIndex < pivotIndex-1) {
        quick(arr, startIndex, pivotIndex-1);
    }
    if (pivotIndex < endIndex) {
        quick(arr, pivotIndex, endIndex);
    }
    return;
}
/**
 * key to partition function: make sure that every elements on the left side of pivot are less than pivot value!
 * NOTICE: doesn't necessarily means that elements on the right side of pivot are greater than pivot value!
 *
 * @param {*} arr
 * @param {*} startIndex
 * @param {*} endIndex
 * @returns
 */
function partition(arr, startIndex, endIndex) {
    let left = startIndex;
    let right = endIndex;
    // IMPORTANT: use Math.floor here means the final return value should be left!
    // think about what happened if we use Math.ceiling?
    let pivotValue = arr[Math.floor((startIndex + endIndex) / 2)];

    // stop condition: left and right meet, or left pass right
    while (left <= right) {
        while (arr[left] < pivotValue) {
            left++;
        }
        while (arr[right] > pivotValue) {
            right--;
        }
        // think about the edge cases here!
        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    // left is guaranteed to be greater than or equal to pivot value
    return left;
}

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

export { quicksort };