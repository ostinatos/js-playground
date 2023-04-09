function yieldToMain() {
    return new Promise((resolve) => {
        // using macrotask to yield
        setTimeout(resolve, 0);
    });
}

// emulate long running code
function longJob() {
    let i = 0;
    for (let index = 0; index < 20000000; index++) {
        i++;
    }
    return i;
}

async function longTask() {
    for (let index = 0; index < 5; index++) {
        longJob();
        await yieldToMain();
        console.log('sub task finished.');
    }
    console.log('long task finished');
}

longTask();
