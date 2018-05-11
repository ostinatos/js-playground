import { count as localCount, increment } from './modules/counter-es6'

console.log('export using es6 approach:')
console.log(`before increment, localCount: ${localCount}`)

increment();

console.log(`after increment, localCount: ${localCount}`)