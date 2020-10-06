/* AMD sample module without any dependencies */
define(function (require, factory) {
  "use strict";
  return {
    getHello: function () {
      return "hello amd module";
    },
  };
});
