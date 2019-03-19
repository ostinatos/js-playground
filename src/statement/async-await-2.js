function test1() {
    console.log("without await:")
    var a = 0
    var b = async () => {
        a = a + await 10
        console.log('2', a)
        a = (await 10) + a
        console.log('3', a)
    }
    b()
    a++
    console.log('1', a)
}

async function test2() {
    console.log("wit await:")
    var a = 0
    var b = async () => {
        a = a + await 10
        console.log('2', a)
        a = (await 10) + a
        console.log('3', a)
    }
    // here we await the result of b
    await b()
    a++
    console.log('1', a)
}

// compare the differences between test1 and test2
// test1();
test2();