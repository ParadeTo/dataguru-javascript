/**
 * Created by ayou on 2017/4/28.
 */

function* gen() {
	var a = yield (function(){
		return new Promise(function (resolve, reject) {
			setTimeout(() => {
				resolve(1)
			}, 2000)
		})
	})()
	console.log(a)
	yield 'B'
	return 'ending'
}

var sg = gen()
console.log(sg.next())
// console.log(sg.next())
// console.log(sg.next())
// console.log(sg.next())

function * gen2() {
	console.log('hello' + (yield 'world'))
	yield 2
}
const g2 = gen2()
console.log(g2.next('d'))
console.log(g2.next('world'))