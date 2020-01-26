// sync import
// import { asyncDep } from './async-dep'

function add(x, y) {
    import('./async-dep').then(({ asyncDep }) => {
        asyncDep();
    })
    return x + y;
}

export { add }