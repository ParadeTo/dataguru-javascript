/**
 * Created by ayou on 17/4/29.
 */

// class A {}
// class B extends A {
// }
//
// console.log(Object.getPrototypeOf(B).name)
//
// class StaticFoo {
//   static classMethod () {
//     return 'hi'
//   }
// }
//
// class Test extends StaticFoo {
//
// }
//
// console.log(StaticFoo.classMethod())
// console.log(Test.classMethod())
// const p = new Test()
// console.log(p.classMethod())

function Student(name) {
  console.log(new.target.name)
  if (!new.target) {
    return new Student(name)
  }
  this.name = name
}

const a = new Student('a')
console.log(a.name)