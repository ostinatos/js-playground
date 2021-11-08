/* 
https://www.educative.io/courses/grokking-the-coding-interview/7D5NNZWQ8Wr

*/

/* my first interpretion of "slidng window" */
function calAverage(arr, k) {
    let windowStart = 0;
    let windowEnd = 0 + k - 1;

    //   edge case: array length less than k
    if (windowEnd > arr.length - 1) {
        return [];
    }

    let result = [];
    let tempSum = 0;
    //   calculate init window size
    for (let i = windowStart; i <= windowEnd; i++) {
        tempSum += arr[i];
    }
    // push init result
    result.push(tempSum / k);

    /* move the window, noticing the edge */
    while (windowEnd <= arr.length - 2) {
        tempSum -= arr[windowStart++];
        tempSum += arr[++windowEnd];
        result.push(tempSum / k);
    }

    return result;
}

/* optimized version provided by educative.io*/
function calAverageOpt(arr, k) {
    let windowStart = 0;
    let windowEnd = 0;
    let windowSum = 0;

    let result = [];

    /* sliding window using windowEnd, just like an edge of window */
    for (; windowEnd < arr.length; windowEnd++) {
        /* windowSum up to windowEnd */
        windowSum += arr[windowEnd];
        /* check window size */
        if (windowEnd - windowStart + 1 === k) {
            // push current result, because it has reach size k.
            result.push(windowSum / k);
            // subtract element about to go out of the window
            windowSum -= arr[windowStart];
            // move the window start
            windowStart++;
        }
    }
    return result;
}

/* test case starts here */

const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];

/* expected Output: [2.2, 2.8, 2.4, 3.6, 2.8] */
// const res = calAverage(arr, 5);
const res = calAverageOpt(arr, 5);

console.log(res);
