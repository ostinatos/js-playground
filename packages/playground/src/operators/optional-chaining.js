let obj = {
    a: {
        b: '1',
    },
};

/**
following line will be compiled as follow by babel if we introduce @babel/plugin-proposal-optional-chaining
console.log("using optional chaining to avoid property access error: obj?.c?.d", obj === null || obj === void 0 ? void 0 : (_obj$c = obj.c) === null || _obj$c === void 0 ? void 0 : _obj$c.d);
 * 
 */
console.log(
    'using optional chaining to avoid property access error: obj?.c?.d',
    obj?.c?.d
);
