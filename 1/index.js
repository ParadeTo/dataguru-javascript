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

// function f(z, y=x) {
//   var x=2;
//   console.log(y)
// }
//
// console.log(f.length)



function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  var arr = [];
  var obj1 = {}, obj2 = {};
  for (var i=0;i<arr1.length;i++) {
    obj1[arr1[i][0]] = arr1[i][1];
  }
  for (var i=0;i<arr2.length;i++) {
    obj2[arr2[i][0]] = arr2[i][1];
  }
  for (var k in obj1) {
    if (obj2[k]) {
      obj1[k] = obj2[k];
    }
    arr.push([k, obj1[k]]);
  }

  return arr;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length)