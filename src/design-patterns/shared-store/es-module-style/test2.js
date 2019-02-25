import { default as store, priValue } from './store'

console.debug("[test2] original store value: ", store.p1)
console.debug("[test2] original primitive store value: ", priValue)

setTimeout(() => {
    console.debug("[test2] store value after 2 second: ", store.p1)
    console.debug("[test2] primitive store value after 2 second: ", priValue)
    
}, 2000);