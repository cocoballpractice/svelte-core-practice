<script>
//  function a(cb) {
//    setTimeout(() => {
//      console.log('a')
//      cb() // 콜백함수, 콜백을 받아서 콜백을 실행
//    }, 1000)
//  }

  function a() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('a')
        resolve() // promise 객체 반환, 위의 로직이 처리되고 나서 resolve의 실행되는 것이 보장된다
      }, 1000)
    })
  }
  function c() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('c')
        resolve() // promise 객체 반환, 위의 로직이 처리되고 나서 resolve의 실행되는 것이 보장된다
      }, 1000)
    })
  }
  function d() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('d')
        resolve() // promise 객체 반환, 위의 로직이 처리되고 나서 resolve의 실행되는 것이 보장된다
      }, 1000)
    })
  }

  function b() {
    console.log('b')
  }

  a().then(() => {
    b()
  }) // then은 resolve()가 있는 위치에서 실행된다

 
  a()
    .then(() => c()) // 체인 형태로 사용 (then의 내부에서도 promise 객체가 나와야 함)
    .then(() => d()) // 체인 형태로 사용 (then의 내부에서도 promise 객체가 나와야 함)

  
  // ES8 이후의 Async, Await

  // 비동기 함수 내에서 
  async function asyncFn() {

    // await 순차적 실행
    await a()
    await c()
    await d()

  }

  asyncFn()

</script>