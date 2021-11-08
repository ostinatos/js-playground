const target = {
    id: 'target',
    foo: 'bar',
};

Object.defineProperty(target, 'foo1', {
    configurable: false,
});

const handler = {
    // a cumbersome way to execute the native method logic
    //   get(trapTarget, property, receiver) {
    //     if (property === "foo") {
    //       return "intercepted value";
    //     }
    //     return trapTarget[property];
    //   },
    get(trapTarget, property, receiver) {
        if (property === 'foo') {
            return 'intercepted value';
        }
        /* 
    define following trap logic will cause following error being raised:
    Uncaught TypeError: 'get' on proxy: property 'foo1' is a read-only and non-configurable data property on the proxy target but the proxy did not return its actual value (expected 'undefined' but got 'intercepted value') 
    */
        // if (property === "foo1") {
        //   return "intercepted value";
        // }
        return Reflect.get(...arguments);
    },
};

const proxy = new Proxy(target, handler);
console.log('proxy', proxy);
console.log('target.id ', target.id);
console.log('proxy.id', proxy.id);

console.log('proxy.foo ', proxy.foo);
console.log('proxy.foo1 ', proxy.foo1);

console.log(target === proxy);

/* test case for revokable proxy */

const { proxy: revokableProxy, revoke } = Proxy.revocable(target, handler);

console.log('revokableProxy.id ', revokableProxy.id);

revoke();

/* 
following error will be thrown 
Uncaught TypeError: Cannot perform 'get' on a proxy that has been revoked
*/
// console.log("revokableProxy.id ", revokableProxy.id);

/* demostrate array proxy */
const arr = [];

// intercept array
const arrProxy = new Proxy(arr, {
    set(obj, prop, value) {
        console.log(`array set item [${prop}]: ${value}`);
        // call native set logic
        return Reflect.set(...arguments);
    },
});

arrProxy[0] = 'bob moses';
arrProxy[0] = undefined;

console.log('typeof arrProxy', typeof arrProxy);
console.log('typeof arr', typeof arr);
