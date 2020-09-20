/* 
iteration protocol
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
*/
class MyIterable {
  constructor(arr) {
    this.arr = arr;
  }
  /** implementing iterable protocol
  implement [Symbol.iterator] method
  @return {Object} contains:
  {Function} next 返回包含value以及done的函数
  */
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.arr.length) {
          return {
            value: this.arr[index++],
            done: false,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  }
}

const it = new MyIterable([1, 2, 3, 4, 5]);

for (let i of it) {
  console.log(i);
}
