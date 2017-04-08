/**
 * Created by ayou on 2017/4/8.
 */
// "use strict"
// var tmp = "test"
// {
//   tmp = 'abc';
//   let tmp;
//   console.log(tmp);
// }


// const s = {name: 'bob', age: 24}
// Object.freeze(s)
// s.name = 'jack'

// var [foo] = []
// console.log(foo)
//
// function f() {console.log('aaa')}
// var [x=f()] = []
// console.log(x)


// var {bar, foo} = {foo: 'hello', bar: 'world'}
// console.log(foo, bar) // hello world
//
// var {bar: b, foo: a} = {foo: 'hello', bar: 'world'}
// console.log(a, b) // hello world

// var {toString:a} = 123;
// console.log(a);

// function log1(x, y) {
//   y = y || 'world'
//   console.log(x, y)
// }
//
// function log2(x, y="world") {
//   console.log(x, y)
// }
//
// log1(1, '')
// log2(1, '')

// function m1({x=0, y=0}={}) {
//   return [x, y]
// }
//
// function m2({x, y}={x:0,y:0}) {
//   return [x, y];
// }
//
// console.log(m1())
// console.log(m2())
// console.log(m1({}))
// console.log(m2({}))

function f(y=x) {
  var x=2;
  console.log(y)
}

f()