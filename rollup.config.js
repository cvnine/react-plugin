import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import strip from '@rollup/plugin-strip'
import json from '@rollup/plugin-json'
import url from '@rollup/plugin-url'

export default [{
	input: 'src/index.ts',
	output: [
		{
			file: 'dist/bundle.umd.js',
			format: 'umd',
			name: 'rcPlugin',
			sourcemap: true,
		},
	],
	plugins: [
		typescript(),
		resolve(),
		commonjs(),
		babel({
			extensions: ['.ts', '.tsx'],
			babelHelpers: 'runtime',
			exclude: ['node_modules/**'],
		}),
		strip(),
		json(),
		url(),
		terser()
	],
},
{
	input: 'src/index.ts',
	output: [
		{
			file: 'dist/bundle.es.js',
			format: 'esm',
		},
		{
			file: 'dist/bundle.cjs.js',
			format: 'cjs',
		},
	],
	plugins: [
		typescript(),
		resolve(),
		commonjs(),
		babel({
			extensions: ['.ts', '.tsx'],
			babelHelpers: 'runtime',
			exclude: ['node_modules/**'],
		}),
		strip(),
		json(),
		url(),
	],
	external: [/@babel\/runtime/]
}]
