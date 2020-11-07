/* 
https://www.educative.io/courses/grokking-the-coding-interview/JPKr0kqLGNP
 */
function maxSumSubArray(arr, k) {
  let windowStart = 0;
  let windowEnd = 0;
  let windowSum = 0;
  let max = undefined;
  for (; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    // check window size
    if (windowEnd - windowStart + 1 === k) {
      if (max === undefined || max < windowSum) {
        max = windowSum;
      }
      //   slide the window
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return max;
}

const arr = [2, 1, 5, 1, 3, 2];
const max = maxSumSubArray(arr, 3);
console.log(max);
const arr2 = [2, 3, 4, 1, 5];
const max2 = maxSumSubArray(arr2, 2);
console.log(max2);
