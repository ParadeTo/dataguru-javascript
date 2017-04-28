/**
 * Created by ayou on 17/4/22.
 */

// function makeIterator(array) {
//   var nextIndex = 0
//   // return {
//   //   next: function* () {
//   //     yield nextIndex < array.length ? {value: array[nextIndex++], done: false} :
//   //       {value: undefined, done: true}
//   //   }
//   // }
//   return (function* (array) {
//     yield array
//   })(array)
// }
//
// var it = makeIterator(['a', 'b'])
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// class RangeIterator {
//   constructor(start, stop) {
//     this.value = start;
//     this.stop = stop;
//   }
//
//   [Symbol.iterator]() { return this; }
//
//   next() {
//     var value = this.value;
//     if (value < this.stop) {
//       this.value++;
//       return {done: false, value: value};
//     }
//     return {done: true, value: undefined};
//   }
//
//   *[Symbol.iterator] () {
//     for (var i = this.value; i < this.stop; i++) {
//       yield i
//     }
//   }
// }
//
// function range(start, stop) {
//   return new RangeIterator(start, stop);
// }
//
// for (var value of range(0, 3)) {
//   console.log(value);
// }


function C() {

}

C.prototype.a = 'test'

// var obj = {
//   0: 'a',
//   1: 'b',
//   foo: 'you'
// }

var obj = new C()
obj.foo = 'ayou'
Object.defineProperty(obj, 'foo', {value: 'xing', enumerable: false})
console.log(obj.foo)
for (var i in obj) {
  console.log(i)
}

function Obj(value) {
  this.value = value;
  this.next = null;
}

Obj.prototype[Symbol.iterator] = function() {
  var iterator = {
    next: next
  };

  var current = this;

  function next() {
    if (current) {
      var value = current.value;
      current = current.next;
      return {
        done: false,
        value: value
      };
    } else {
      return {
        done: true
      };
    }
  }
  return iterator;
}

var one = new Obj(1);
var two = new Obj(2);
var three = new Obj(3);

one.next = two;
two.next = three;

for (var i of one){
  console.log(i);
}
// 1
// 2
// 3
