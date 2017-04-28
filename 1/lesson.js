/**
 * Created by ayou on 17/4/9.
 */
function f1() {
  let a = Array.prototype.sort.apply(arguments, function (a, b) {
    return a - b
  });
  for (let i in a) {
    console.log(a[i]);
  }
}

const f2 = (...arr) => {
  let a = arr.sort((a, b) => { a - b })
  for (let i in a) {
    console.log(a[i]);
  }
}

f1(4,5,6,7)
f2(4,5,6,7)
