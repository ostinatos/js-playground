/* function can be used before the function definition */
testf();

/* following will result in error.
variable is used before definition.
*/
// testf2();

function testf() {
  console.log("testf");
}

const testf2 = function () {
  console.log("testf2");
};
