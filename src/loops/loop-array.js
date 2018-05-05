//looping an array
function loopArray(arr) {
    var i, len = arr.length;
    for (i = 0; i < len; i++) {
        if (i in arr) {
            console.log(arr[i]);
        }
    }
}

// foreach loop
function foreachloop(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

function forinloop(arr) {
    for (const key in arr) {
        if (arr.hasOwnProperty(key)) {
            const element = arr[key];
            console.log(element)

        }
    }
}

function forofloop(arr) {
    for (const iterator of arr) {
        console.log(iterator)
    }
}




var arr = ["1", "2", "3"];
arr["a"] = "user-defined property";
loopArray(arr);
foreachloop(arr)
forinloop(arr)
forofloop(arr)

export default loopArray;