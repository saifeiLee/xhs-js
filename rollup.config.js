// import commonjs from '@rollup/plugin-commonjs';
// import resolve from '@rollup/plugin-node-resolve';
const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
    
module.exports = [
    {
        input: 'src/index.js',
        output: {
            file: 'dist/index.esm.js',
            format: 'esm'
        },
        plugins: [
            resolve(),
            commonjs()
        ],
        external: ['axios', 'jsdom', 'querystring']
    },
    {
        input: 'src/index.js',
        output: {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            exports: 'auto'
        },
        plugins: [
            resolve(),
            commonjs()
        ],
        external: ['axios', 'jsdom', 'querystring']
    }
];