import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import strip from '@rollup/plugin-strip'
import json from '@rollup/plugin-json'
import url from '@rollup/plugin-url'
import image from '@rollup/plugin-image'
import smartAsset from 'rollup-plugin-smart-asset'

import del from 'rollup-plugin-delete'

import autoprefixer from 'autoprefixer'
import postcssUrl from 'postcss-url'
import postcss from 'rollup-plugin-postcss'
import postcssInject2Css from 'rollup-plugin-postcss-inject-to-css'

const postcssConfig = {
	inject: true,
	// extract: true,
	plugins: [
		postcssUrl({
			url: 'inline',
		}),
		autoprefixer(),
	],
	extensions: ['.css', '.less'],
}

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: 'dist/umd/bundle.js',
				format: 'umd',
				name: 'rcPlugin',
				sourcemap: true,
			},
		],
		plugins: [
			del({ targets: 'dist/*' }),
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
			// postcss(postcssConfig),
			image(),
			// postcssInject2Css({
			// 	exclude: /\/node_modules\//
			// }),
			terser(),
		],
	},
	{
		input: 'src/index.ts',
		output: [
			{
				// file: 'es/bundle.es.js',
				format: 'esm',
				preserveModules: true,
				preserveModulesRoot: 'src',
				dir: 'dist/esm',
			},
			{
				dir: 'dist/cjs',
				format: 'cjs',
				preserveModules: true,
				preserveModulesRoot: 'src',
				exports: 'named',
			},
		],
		plugins: [
			// del({ targets: 'dist/*' }),
			typescript(),
			// smartAsset({
			// 	url: "copy",
			// 	keepImport: true,
			// 	useHash: false,
			// 	keepName: true,
			// 	extensions: [".svg", ".gif", ".png", ".jpg"],
			// 	outputDir: 'dist/esm',
			// 	preserveModules: true,

			// }),
			resolve(),
			commonjs(),
			babel({
				extensions: ['.ts', '.tsx'],
				babelHelpers: 'runtime',
				exclude: ['node_modules/**'],
			}),
			strip(),
			json(),
			postcss(postcssConfig),
			image(),
			// url(),
			// postcssInject2Css({
			// 	exclude: /\/node_modules\//
			// }),
		],
		external: [/@babel\/runtime/, 'react', 'react-dom'],
	},
]
