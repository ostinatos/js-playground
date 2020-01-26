/* variable-arity function */
// function average() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum / arguments.length;
// }

function averageOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length;
}

/* variable-arity version based on averageOfArray */
function average() {
    return averageOfArray(arguments);
}

let avg = average(1, 2, 3);

console.log("average: ", avg);

let avg2 = averageOfArray([1, 2, 3]);
console.log("average of array: ", avg2);
