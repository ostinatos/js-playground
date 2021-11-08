require.ensure(
    [],
    // NOTICE: parameter name MUST be 'require'.
    // https://webpack.js.org/api/module-methods/#require-ensure
    function (require) {
        /* 
    following module will be loaded in a separate chunk file.
     */
        var counter = require('./modules/counter-cjs');
        console.log('common js async test:');
        console.log(counter.count);
    }
);
