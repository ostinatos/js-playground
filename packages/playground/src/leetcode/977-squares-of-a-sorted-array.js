/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortedSquares = function (arr) {
  squares = [];
  //   edge case: input array is empty
  if (arr.length === 0) {
    return squares;
  }

  let head = 0,
    tail = arr.length - 1;
  let headSquare = 0,
    tailSquare = 0;
  // loop while head does not meet tail
  while (head < tail) {
    headSquare = arr[head] * arr[head];
    tailSquare = arr[tail] * arr[tail];
    if (headSquare > tailSquare) {
      squares.unshift(headSquare);
      head++;
    } else {
      squares.unshift(tailSquare);
      tail--;
    }
  }
  // head meets tail, head === tail, unshift last element
  squares.unshift(arr[tail] * arr[tail]);
  return squares;
};
