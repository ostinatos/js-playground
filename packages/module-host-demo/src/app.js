import { asyncAdd } from 'async-dep-module-demo'

asyncAdd(2, 3).then(res => {
    console.log("invoke asyncAdd() ", res)

})