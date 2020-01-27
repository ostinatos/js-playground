import { terser } from 'rollup-plugin-terser';

module.exports = {
    input: 'src/index.js',
    // plugins: [terser()],
    output: {
        format: 'esm',
        dir: "dist-esm"
    }
};