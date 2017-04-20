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
* 拓展运算符
  ```javascript
  console.log(2, ...[1,2,3])
  ```
* 拓展运算符＋解构赋值
  ```javascript
  const [first, ...rest] = [1,2,3,4,5]
  ```
* 箭头函数
  * 如果返回的不是一个对象，可以省略return
  * 函数体内的this对象就是定义时所在的对象，不是使用时所在的对象
  * 不可以当作构造函数
  * 不可使用arguments对象
  * 不可以使用yield命令
## 对象的拓展
* Object.is()
  用来比较两个值是否严格相等，但是
  ```javascript
  Object.is(+0, -0) // false
  +0 === -0 // true
  Object.is(NaN, NaN) // true
  NaN === NaN // false
  ```
* Object.assign()
  * 把所有属性复制到目标对象，后面的覆盖前面的
  * 只复制自身属性，不可枚举的属性和继承的属性不会被复制
* Object.getOwnPropertyDescriptor(obj, key)
  获取属性的描述对象
  
  ```javascript
  Object.getOwnPropertyDescriptor(stu, 'name')
  /*
  { value: 'xing',
    writable: true,
    enumerable: true,
    configurable: true }
  * */
  ```
  描述对象的enumerable属性称为"可枚举性"，如果为false，某些操作会忽略该属性。
  如：``for...in, Object.keys(), JSON.stringfy(), Object.assign()``
* 对象属性的遍历
  * Object.keys()
  * for...in
  * Object.getOwnPropertyNames()
  
  以上3个忽略``Symbol``型的属性
  * Reflect.ownKeys()
    
    包括``Symbol``型的属性
   
## Symbol
http://es6.ruanyifeng.com/?search=Symbol&x=0&y=0#docs/symbol
ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。

### 使用
```javascript
let s = Symbol()
```
```javascript
let s1 = Symbol('foo')
let s2 = Symbol('foo')
s1 === s2 // false
```
### 作为属性名
```javascript
var mySymbol = Symbol();

// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
var a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果，不能使用"."
a[mySymbol] // "Hello!"
```

### 遍历
不会出现在``for...in``、``for...of``循环中，也不会被
``Object.keys()``、``Object.getOwnPropertyNames()``、``JSON.stringify()``
返回。

必须使用``Object.getOwnPropertySymbols``得到``Symbol``属性或者``Reflect.ownKeys``得到所有属性。

### Symbol.for()，Symbol.keyFor()
有时，我们希望重新使用同一个Symbol值，Symbol.for方法可以做到这一点。。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值。
如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值。并且这是全局有效的。
```javascript
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');

s1 === s2 // true
```

``Symbol.keyFor``方法返回一个已登记的 ``Symbol`` 类型值的key。
```javascript
var s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"
```

### 内置的Symbol
#### Symbol.hasInstance
```javascript
class MyClass {
  [Symbol.hasInstance](foo) {
    return foo instanceof Array;
  }
}

[1, 2, 3] instanceof new MyClass() // true
```
#### Symbol.isConcatSpreadable
对象的Symbol.isConcatSpreadable属性等于一个布尔值，表示该对象使用Array.prototype.concat()时，是否可以展开。

#### Symbol.species
对象的Symbol.species属性，指向当前对象的构造函数。创造实例时，默认会调用这个方法，即使用这个属性返回的函数当作构造函数，来创造新的实例对象。

#### Symbol.match
对象的Symbol.match属性，指向一个函数。
当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值。
```javascript
String.prototype.match(regexp)
// 等同于
regexp[Symbol.match](this)

class MyMatcher {
  [Symbol.match](string) {
    return 'hello world'.indexOf(string);
  }
}

'e'.match(new MyMatcher()) // 1
```
#### Symbol.replace
对象的Symbol.replace属性，指向一个方法，当该对象被String.prototype.replace方法调用时，会返回该方法的返回值。

#### Symbol.search
对象的Symbol.search属性，指向一个方法，
当该对象被String.prototype.search方法调用时，会返回该方法的返回值。

#### Symbol.split
对象的Symbol.split属性，指向一个方法，当该对象被String.prototype.split方法调用时，会返回该方法的返回值。

#### Symbol.iterator
```javascript
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

[...myIterable] // [1, 2, 3]
```
#### Symbol.toPrimitive
对象的Symbol.toPrimitive属性，指向一个方法。该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。
#### Symbol.toStringTag
对象的Symbol.toStringTag属性，指向一个方法。在该对象上面调用Object.prototype.toString方法时，如果这个属性存在，它的返回值会出现在toString方法返回的字符串之中，表示对象的类型。也就是说，这个属性可以用来定制[object Object]或[object Array]中object后面的那个字符串。
```javascript
// 例一
({[Symbol.toStringTag]: 'Foo'}.toString())
// "[object Foo]"

// 例二
class Collection {
  get [Symbol.toStringTag]() {
    return 'xxx';
  }
}
var x = new Collection();
Object.prototype.toString.call(x) // "[object xxx]"
```

### Map的forEach
```javascript
var reporter = {
  report (key, value) {
    console.log(key, value)
  }
}
map.forEach(function(value, key, map) {
  this.report(key, value)
}, reporter)
```

### WeakMap 弱引用




