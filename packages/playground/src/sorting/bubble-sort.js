function bubbleSort(arr) {
    // start from start
    // 第i个元素之前的都是有序的
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = arr.length - 1; j > i; j--) {
            if (arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            }
        }
    }
}

export { bubbleSort };
