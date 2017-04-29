/**
 * Created by ayou on 17/4/29.
 */

const inner = function* () {
  yield 'a'
  yield 'b'
}

const gen = function* () {
  yield 1
  yield 2
  yield* inner()
  yield 3
}

var g = gen()

for (let k of g) console.log(k)

