const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'demo.umd.js',
        path: path.resolve(__dirname, 'dist'),
        library: "moduleDemo",
        libraryTarget: "umd"
    },
    // for better code inspection, we use "development" mode here.
    mode: "development"
};