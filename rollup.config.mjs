import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
import svg from 'rollup-plugin-svg';
import svgr from '@svgr/rollup'
import url from '@rollup/plugin-url';

export default {
    input: 'src/index.js',
    output: {
        file: 'public/bundle.js',
        format: 'iife'
    },
    plugins: [
        nodeResolve({
            extensions: ['.js', '.jsx']
        }),
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-react'],
            extensions: ['.js', '.jsx']
        }),
        commonjs(),
        replace({
            preventAssignment: false,
            'process.env.NODE_ENV': '"development"'
        }),
        image(),
        svg(),
        svgr(),
        url(),
    ]
}