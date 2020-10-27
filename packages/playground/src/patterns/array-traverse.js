const list = [1, 2, 3, 4, 5, 6, 7, 8, ];

function doubleIndexTraverse(list) {
  let i = 0;
  let j = list.length - 1;

  while (i <= j) {
    console.log(`[${i}]: ${list[i]}, [${j}]: ${list[j]}`);
    i++;
    j--;
  }
}

doubleIndexTraverse(list);
