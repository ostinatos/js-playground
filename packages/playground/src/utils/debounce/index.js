// import { naiveDebounce as debounce } from './debounce'
import { advDebounce as debounce } from './debounce';
// import { debounce } from './debounce'

let func = function (count) {
    console.debug('executing func. count: ', count);
};

let wrapperFunc = debounce(func, 700, true);

// loop to call func
// for(let i=0; i<3; i++){
//     wrapperFunc(i);
// }
let i = 0;
let testButton = document.createElement('button');
var newContent = document.createTextNode('test debounce');
testButton.appendChild(newContent);
testButton.onclick = (e) => {
    wrapperFunc(i++);
};
document.body.appendChild(testButton);
