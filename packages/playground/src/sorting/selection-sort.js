// asc selection sort
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let m = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[m]) {
                m = j;
            }
        }
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
}

export { selectionSort };
