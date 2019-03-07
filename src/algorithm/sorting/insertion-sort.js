/**
 * 标准版的插入排序
 * 注意到用解构的方式交换，速度会慢很多，估计和语法transform的效率有关
 *
 * @param {*} arr
 */
function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
            // [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            let t = arr[j]
            arr[j] = arr[j - 1]
            arr[j - 1] = t
        }
    }
}
/**
 * 这个版本比起上面那个版本会比较快一些
 * 在我的机器中(mbp2015)，1000个随机数排序，平均不会超过3ms
 * 快的地方在于，减少了中间变量的声明以及赋值
 *
 * @param {*} arr
 */
function insertionSortOpt(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i
        for (; j > 0 && arr[j - 1] > current; j--) {
            arr[j] = arr[j - 1]
        }
        arr[j] = current;

    }
}

export { insertionSort, insertionSortOpt }