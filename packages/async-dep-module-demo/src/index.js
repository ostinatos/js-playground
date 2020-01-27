// sync import
import { syncDep } from './sync-dep'

function asyncAdd(x, y) {
    syncDep();
    return import('./async-dep').then(({ asyncDep }) => {
        asyncDep();
        return x + y;
    })
    
}

export { asyncAdd }