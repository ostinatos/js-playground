/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortedSquares = function (arr) {
  if (arr.length === 0) {
    return arr;
  }
  // result array
  let squares = [];

  let head = 0;
  let tail = arr.length - 1;

  // loop end conditions:  head meets tail
  while (head < tail) {
    let headSqr = Math.pow(arr[head], 2);
    let tailSqr = Math.pow(arr[tail], 2);

    if (headSqr >= tailSqr) {
      squares.unshift(headSqr);
      head++;
    } else {
      squares.unshift(tailSqr);
      tail--;
    }
  }
  // 最终状态，head === tail，并且指向的元素是最小的
  squares.unshift(Math.pow(arr[head], 2));

  return squares;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
