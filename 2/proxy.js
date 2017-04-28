/**
 * Created by ayou on 2017/4/18.
 */

/**
 * 一个最简单的代理
 * @constructor
 */
var Flower = function () {

}

Flower.prototype.toString = () => {
  return '花'
}

var xiaoming = {
  sendFlower(target) {
    var flower = new Flower()
    target.receiveFlower(flower)
  }
}

var B = {
  receiveFlower(flower) {
    A.receiveFlower(flower)
  }
}

var A = {
  receiveFlower(flower) {
    console.log(`收到了${flower}`)
  }
}

xiaoming.sendFlower(B)



var Person = { name: 'Jack' }
var obj = new Proxy(Person, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}`)
    Reflect.get(target, key, receiver)
  },
  set: function (target, key, value, receiver) {
    console.log(`setting ${key}`)
    Reflect.set(target, key, value, receiver)
  }
})

obj.name
obj.name = 'Bob'
console.log(Person.name)



var twice = {
  apply (target, ctx, args) {
    return Reflect.apply(...arguments) * 2
  }
}

function sum(left, right) {
  return left + right
}

var proxy = new Proxy(sum, twice)
console.log(proxy(2, 3))
console.log(proxy.call(null, 2, 3))
console.log(proxy.apply(null, [2, 3]))


var s = new Set([1,2,3,2,4])
console.log(s)
console.log(s.entries())
console.log([...s])