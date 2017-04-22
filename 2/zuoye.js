/**
 * Created by ayou on 17/4/22.
 */

// 第一题
// 方法1
let obj = {
  mydata: ['a', 'c', 'd', 'e', 'f'],
  [Symbol.iterator]: function () {
    const self = this
    let index = 0
    return {
      next: function () {
        if (index < self.mydata.length) {
          return {
            value: self.mydata[index++].toUpperCase(),
            done: false
          }
        } else {
          return { value: undefined, done: true }
        }
      }
    }
  }
}

for (let j of obj) {
  console.log(j)
}

// 方法2
let obj = {
  mydata: ['a', 'c', 'd', 'e', 'f'],
  [Symbol.iterator]: function* () {
    for (let i = 0; i < this.mydata.length; i++) {
      yield this.mydata[i].toUpperCase()
    }
  }
}

for (let j of obj) {
  console.log(j)
}

// 第二题
function log(f) {
  return new Proxy(f, {
    apply: function (target, thisBinding, args) {
      console.log('Execute: ' + f.name)
      return f(...args)
    }
  })
}

function sum (x, y) {
  return x + y
}

function sayHi (msg) {
  console.log(msg)
}

console.log(log(sum)(1, 2))
log(sayHi)('Hello World')
