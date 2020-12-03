const removeDuplicates = function (arr) {
  let nextNonDuplicate = 1;
  let index = 1;
  while (index < arr.length) {
    if (arr[nextNonDuplicate - 1] === arr[index]) {
      // arr[index] is equal to existing element, so move index forward
      index++;
    } else {
      // arr[index] is different from existing element, copy this value to nextNonDuplicate
      // and move nnd and index  forward
      arr[nextNonDuplicate++] = arr[index++];
    }
  }
  // nextNonDuplicate is equal to length of subarray that ahas no duplicate in it
  return nextNonDuplicate;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
