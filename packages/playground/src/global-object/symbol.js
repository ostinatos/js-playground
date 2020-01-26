/* Symbol
http://es6.ruanyifeng.com/#docs/symbol
https://zhuanlan.zhihu.com/p/22652486
*/

/* 
use case #1: declare constant
*/

const gender = {
    male: Symbol('male'),
    female: Symbol('female')
}

console.debug("gender.male == 'male':", gender.male == 'male')
console.debug("gender.male === 'male':", gender.male === 'male')
console.debug("gender.male === gender.female:", gender.male === gender.female)
// notice: following will return false. call symbol with same argument will result in different symbol.
console.debug("gender.male === Symbol('male'):", gender.male === Symbol('male'))
// this is the only way to make it return true
console.debug("gender.male === gender.male:", gender.male === gender.male)

