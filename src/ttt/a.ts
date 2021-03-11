import { MyInterface } from '../b'

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
