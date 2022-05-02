window.identity = 'window id';

function functionScope() {
    var identity = 'function scope id';
    let object3 = {
        identity: 'my id',
        getId(a) {
            return function () {
                // window id
                console.log(this.identity);
                // actual value of a
                console.log(a);
            };
        },
    };
    console.log(object3.getId('u can get me')());
}

functionScope();

window.identity = 'window id';

function functionScope2() {
    var identity = 'scope2';
    console.log('this.identity in function scope 2', this.identity);
    var innerFunc = function () {
        console.log(this.identity);
    };
    innerFunc();
}
functionScope2();

function f() {
    let id = 'f id';
    console.log('this.id in f', this.id);
}
f();

let object2 = {
    identity: 'my id',
    getId(a) {
        return function () {
            // window id
            console.log(this.identity);
            // actual value of a
            console.log(a);
        };
    },
};

console.log(object2.getId('u can get me')());

let object = {
    identity: 'my identity',
    getIdentity() {
        return this.identity;
    },
};

console.log(object.getIdentity());
