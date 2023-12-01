const terser = require('@rollup/plugin-terser');
const babel = require('@rollup/plugin-babel');
const json = require('@rollup/plugin-json');
const css = require('rollup-plugin-css-only');
const image = require('@rollup/plugin-image');

module.exports = {
    input: './src/index.js',
    output: [
        {
            file: './dist/bundle.js',
            format: 'cjs'
        },
        {
            file: './dist/bundle.min.js',
            format: 'iife',
            name: 'version',
            plugins: [terser()]
        }
    ],
    plugins: [
        babel({ babelHelpers: 'bundled' }),
        json(),
        css({output: 'bundle.css'}),
        image()
    ]
}