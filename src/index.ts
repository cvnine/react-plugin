import s from './a'

@isTestable(true)
class MyClass {}

function isTestable(value: any) {
	return function decorator(target: any) {
		target.isTestable = value
	}
}

function sleep() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {}, 100)
	})
}
s()

sleep()

export const a = new MyClass()
