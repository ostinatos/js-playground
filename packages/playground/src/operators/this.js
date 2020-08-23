function outerFunc() {
  // regular function: this is decided by where the function is defined.
  function innerFunc() {
    console.log("this.a in innerFunc:", this.a);
    console.log("this === globalThis :", this === globalThis);
    return this.a;
  }
  // arrow function, "this" is decided by the lexical context's this
  //   const innerFunc = () => {
  //     console.log("this.a in innerFunc:", this.a);
  //     console.log("this === globalThis :", this === globalThis);
  //     return this.a;
  //   };

  // call innerFunc directly, without call it on any object
  innerFunc();
}

const obj = { a: "123", f: outerFunc };

// call f on obj, so f's "this" should be obj
obj.f();
