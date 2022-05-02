window.id = 'window id';
function f1() {
    var id = 'f1 id';
    console.log('this.id in f1: ', this.id);
    console.log(this === globalThis);
}

f1();
/* 
1. 直接调用函数的方式下，this 指向 globalObject
*/

let obj = { id: 'obj id', f1 };
obj.f1();

/* 
2. method 模式下，this 指向调用method 的对象
*/

function f2() {
    this.id = 'f2 id';
}
let obj2 = new f2();
console.log('obj2.id', obj2.id);
console.log('window.id', window.id);

/* 
3. constructor 模式下，this 指向新建的对象
 */

let obj3 = {};
f2.apply(obj3);
console.log('obj3.id', obj3.id);
console.log('window.id', window.id);

/* 
4. apply, bind 模式下，this指向传入的对象
 */

/* ------------------------------ */
window.id = 'window id';
let obj5 = {
    id: 'obj5 id',
    getIdFunc() {
        return function () {
            return this.id;
        };
    },
};

console.log(obj5.getIdFunc()());
