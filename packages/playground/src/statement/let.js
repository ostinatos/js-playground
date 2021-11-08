/* use let to create block scope in for loop */
for (let i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i);
    }, i * 1000);
}
/* 
https://stackoverflow.com/questions/16473350/let-keyword-in-the-for-loop 
这个问题中提及的这段代码，在ie11中会出现 333
但是在chrome中，却能够正常输出012

因此在for中使用let，要比较小心
*/
var things = {};
for (let i = 0; i < 3; i++) {
    things['fun' + i] = function () {
        console.log(i);
    };
}

things['fun0'](); // prints 3
things['fun1'](); // prints 3
things['fun2'](); // prints 3
