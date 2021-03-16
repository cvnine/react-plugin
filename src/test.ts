interface MyInterface {
	add2: (x: number) => number
}

export default async function x() {
	console.log(2131)
	await 3
	return 123
}

export class MyClass implements MyInterface {
	public add2(x: number): number {
		return x + 2
	}
}

function isTestable(value: any) {
	return function decorator(target: any) {
		target.isTestable = value
	}
}

@isTestable(true)
class MyClass2 {}

export const MC = new MyClass2()
