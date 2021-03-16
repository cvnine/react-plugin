import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import strip from '@rollup/plugin-strip'
import json from '@rollup/plugin-json'
import url from '@rollup/plugin-url'
import image from '@rollup/plugin-image'
import del from '@rollup/plugin-delete'

export default [
	{
		input: 'src/index.tsx',
		output: [
			{
				file: 'dist/umd/bundle.js',
				format: 'umd',
				name: 'rcPlugin',
				sourcemap: true,
			},
		],
		plugins: [
			del(),
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
			terser(),
		],
	},
	{
		input: 'src/index.tsx',
		output: [
			{
				// file: 'es/bundle.es.js',
				format: 'esm',
				preserveModules: true,
				preserveModulesRoot: 'src',
				dir: 'dist/esm',
			},
			{
				file: 'dist/cjs/bundle.js',
				format: 'cjs',
			},
		],
		plugins: [
			del(),
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
		external: [/@babel\/runtime/, 'react', 'react-dom'],
	},
]
