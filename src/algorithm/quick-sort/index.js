// import { quicksort } from './juejin-quicksort'
import { quicksort } from './in-place-quicksort'

let arr = [];

// 生成随机整数
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 生成len长度的随机数组
function generateArr(len) {
    for (var i = 0; i < len; i++) {
        arr.push(random(1, len));
    }
}

generateArr(1000)

// arr = [1, 9, 1, 6, 3, 1]
// arr = [6,6]
console.log("array before sort: ", arr);

console.time('xm');

quicksort(arr);

console.timeEnd('xm');

console.log("array after sort: ", arr);
