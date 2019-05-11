
function throttle(func, wait = 50) {
    let timer = null;
    return function(){
        func.apply(this, arguments);
    }
}

export { throttle }