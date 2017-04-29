/**
 * Created by ayou on 17/4/29.
 */
const g = function* () {
  while (true) {
    try {
      yield
    } catch (e) {
      if (e != 'a') throw e
      console.log('内部捕获', e)
    }
  }
}

i = g()
i.next()
i.throw('a')
i.throw('b')