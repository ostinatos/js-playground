// difference between es6-style export and common-js-style export.

/* 
here is the es6-style export test.
please check counter-es6 for its export syntax.
you may notice that localCount will be modified after increment() is invoked.
 */
import { count as localCount, increment } from './modules/counter-es6';

console.log('export using es6 approach:');
console.log(`before increment, localCount: ${localCount}`);

increment();

console.log(`after increment, localCount: ${localCount}`);

/*
while compare to common-js approach,
localCount2 will not be modified even after increment2() is invoked.
*/

console.log('export using common-js approach:');

var counter = require('./modules/counter-cjs');
var localCount2 = counter.count;
var increment2 = counter.increment;

console.log(`before increment, localCount: ${localCount2}`);

increment2();

console.log(`after increment, localCount: ${localCount2}`);

/* use variable in module specifier
reference: https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/
*/

// under common js specification, variable can be used in module specifier.
var path = 'modules';
var cjsCounter = require(`./${path}/counter-cjs`);
console.debug(
    'common js import, containing variable in import statement',
    cjsCounter.count
);

// while in es6 modules, variable can not be used in module specifier.
// import { count as es6Count } from `./${path}/counter-es6`
