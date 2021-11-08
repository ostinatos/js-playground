function* makeSimpleGenerator(arr) {
    let nextIndex = 0;
    while (nextIndex < arr.length) {
        yield arr[nextIndex++];
    }
}

export default makeSimpleGenerator;
