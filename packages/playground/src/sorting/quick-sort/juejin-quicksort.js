/* 
a quicksort version described in https://juejin.im/post/5af4902a6fb9a07abf728c40
*/
function quick(array, left, right) {
    let index;
    if (array.length > 1) {
        index = partition(array, left, right);
        if (left < index - 1) {
            quick(array, left, index - 1);
        }
        if (index < right) {
            quick(array, index, right);
        }
    }
    return array;
}
function quicksort(array) {
    return quick(array, 0, array.length - 1);
}

// 划分操作函数
function partition(array, left, right) {
    // 用index取中间值而非splice
    const pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (compare(array[i], pivot) === -1) {
            i++;
        }
        while (compare(array[j], pivot) === 1) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i;
}

// 比较函数
function compare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? -1 : 1;
}

// 原地交换函数，而非用临时数组
function swap(array, a, b) {
    [array[a], array[b]] = [array[b], array[a]];
}

export { quicksort };
