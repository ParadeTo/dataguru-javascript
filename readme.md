# 第一课
## let和const
### let
* 只在代码块内有效，不受外界影响（暂时性死区）
  ```javascript
  var tmp = "test"
  {
    tmp = 'abc'; // ReferenceError: tmp is not defined
    let tmp;
    console.log(tmp);
  }
  ```
* 同一作用域不能重复定义
* 没有“变量提升”现象，必须先申明再使用
### const
* 常量
* 申明必须初始化
* 作用域与let相同
* 对于复合类型的变量，变量名不指向数据，而是指向数据所在的地址
  ```javascript
  const s = {name: 'bob', age: 24}
  s = {} // TypeError: Assignment to constant variable.
  s.name = 'jack'
  ```
    如果要让对象不可变，可这样：
  ```javascript
   Object.freeze(s)
   s.name = 'jack' // 严格模式下 TypeError: Cannot assign to read only property 'name' of object '#<Object>'
  ```
## 解构赋值
* ES6允许按照一定的模式，从数组和对象中提取值，对变量进行赋值
  ```javascript
  var [a,b,c] = [1,2,3]
  ```
* 允许嵌套
  ```javascript
  var [a, [b]] = [1, [2]]
  ```
* 解构赋值允许指定默认值
  ```javascript
  var [foo="default"] = []
  ```
  一个题目：
  ```javascript
  function f() {console.log('aaa')} // 这里的返回值是undefined
  var [x=f()] = []
  console.log(x) // aaa undefined
  ```
* 对象的解构赋值
  ```javascript
  var {bar, foo} = {foo: 'hello', bar: 'world'}
  console.log(foo, bar) // hello world
  // var {bar, foo} 其实等同于 var {bar: bar, foo: foo}
  ```
  
  ```javascript
  var {bar: b, foo: a} = {foo: 'hello', bar: 'world'}
  console.log(a, b) // hello world
  ```
* 解构赋值时，如果右边是数值或布尔值，则右边的值会先转换为一个对象
  ```javascript
  var {toString: s} = 123;
  console.log(s) // [Function: toString]
  // 123 转换为一个对象：
  /*
    { ... toString: function(){...} ...}
   */
  ```
* 函数参数也可以解构赋值
  ```javascript
  function add([x, y]) {return x+y;}
  add([3,5])
  ```
* 用途
1. 变量互换
    ```javascript
    var x=3, y=4;
    [x, y] = [y, x]
    ```
2. 函数参数的定义，函数返回多个值
3. 提取json数据
4. 函数参数默认值
## 模板字符串
```javascript
`I am ${1+1}, ${f()}`
```
## 函数的拓展
* 函数参数默认值
  ```javascript
  function log1(x, y) {
    y = y || 'world'
    console.log(x, y)
  }
  
  function log2(x, y="world") {
    console.log(x, y)
  }
  ```
  问题：当y转换为Boolean类型的值为False时，会有不合理的情况出现
  ```javascript
  log1(1, '') // 1 'world'
  log2(1, '') // 1 ''
  ```
  注意：参数不能用let或const再次声明
* 函数参数为变量，其作用域与变量的规则是一样的，即先是当前函数的作用域，然后才是全局作用域
  ```javascript
   var x=1;
  function f(x, y=x) {
    console.log(y);
  }
  f(2) // 2
  ```
  
  ```javascript
  let x = 1;
  function f(y=x) {
    let x = 2;
    console.log(y)
  }
  f(); // 1
  ```
* rest参数
  ```javascript
  function add(...values) {
    let sum = 0;
    for (val of values) {
      sum += val;
    }
    return sum;
  }
  add(1,2,3,4)
  ```
## 对象的拓展
## Symbol
http://es6.ruanyifeng.com/?search=Symbol&x=0&y=0#docs/symbol