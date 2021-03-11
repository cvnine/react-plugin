import s, { MyClass as Cy } from './ttt/a'

@isTestable(true)
class MyClass {}

export const xxx = new Cy()

function isTestable(value: any) {
	return function decorator(target: any) {
		target.isTestable = value
	}
}

export type m = number

function sleep() {
	let bs: m = 1
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			bs = bs + 1
		}, 100)
	})
}
s()

sleep()

export const a = new MyClass()
