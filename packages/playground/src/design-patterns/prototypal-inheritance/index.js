// own implementation of Object.create
function objCreate(obj) {
    let f = function () {};
    f.prototype = obj;
    return new f();
}

function testcase(objCreate) {
    let parent = { age: 42 };
    let child = objCreate(parent);
    console.debug('parent', parent);
    console.debug('child', child);
}

testcase(objCreate);

// ES5 style, use Object.create directly.
testcase(Object.create);
