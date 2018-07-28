/* default parameters for function in ES6 
references: 
https://simonsmith.io/destructuring-objects-as-function-parameters-in-es6/
https://www.sitepoint.com/es6-default-parameters/
*/

/* 
对于对象类型参数的默认值，下面这种写法（默认值在左边）显得有点奇怪，这实际上用到了ES6 提供的 destructuring语法
*/
function testDefaultObjParams({prop1="value1", prop2="value2"}={}){
    console.debug("prop1: ", prop1)
    console.debug("prop2: ", prop2)
}

testDefaultObjParams();
testDefaultObjParams({prop2:"value given by caller"});