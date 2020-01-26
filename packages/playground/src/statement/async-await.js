async function returnPromise() {

    return new Promise(resolve => {
        setTimeout(() => {
            console.log("processing async result...")
            resolve("this is an async result")
        }, 2000);
    })
}

// this will not be compiled successfully.
// let a = await returnPromise();

async function getReturnPromise() {
    // await can only be written within async function
    let a = await returnPromise();
    console.log("right after await ")
    console.log(a);
}

function cannotGetReturnPromise() {
    // this will not be compiled.
    // let a = await returnPromise();
}


function notUsingAwait(){
    let a = returnPromise();
    console.log("right after await ")
    console.log(a);
    a.then(result=>console.log("result printed from non-async function: ", result))
}

// compare the difference between notUsingAwait() and getReturnPromise()
getReturnPromise()

// notUsingAwait();