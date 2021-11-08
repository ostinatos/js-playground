// import { naiveDebounce as debounce } from './debounce'
import { throttle } from './throttle';
// import { debounce } from './debounce'

let func = function (count) {
    console.debug('executing func. count: ', count);
};

let wrapperFunc = throttle(func, 700, true);

let i = 0;
let testButton = document.createElement('button');
var newContent = document.createTextNode('test throttle');
testButton.appendChild(newContent);
testButton.onclick = (e) => {
    wrapperFunc(i++);
};
document.body.appendChild(testButton);
