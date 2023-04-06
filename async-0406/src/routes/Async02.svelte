<script>

  let isError = false

  function a() {
      return new Promise((resolve, reject) => {

        if (isError) {
          // reject('미안...')
          reject(new Error('미안...')) // Error 객체 내부에 메시지 속성 있음
          return
        }

        setTimeout(() => {
          console.log('a')
          resolve('cocoball') // promise 객체 반환, 위의 로직이 처리되고 나서 resolve의 실행되는 것이 보장된다
        }, 1000)
      })
  }

  a()
    .then((res) => {
      console.log(res) // resolve의 인수를 받아올 수 있음 ('cocoball')
      console.log('b')
    })
    .catch((err) => { // reject 실행 시 실행됨
      console.log(err.message) // '미안...' 출력됨
    })
    .finally(() => {
      console.log('-던-')
    })


  // async, await 활용

  async function asyncFn() {
    try {
      const res = await a() // resolve의 인수를 받아올 수 있음 ('cocoball')
      console.log(res)
      console.log('b')
    } catch (err) { // a 실행 시 promise가 아닌 reject가 반환될 경우 실행됨
      console.log(err) 
    } finally { // try catch에 상관 없이 마지막에 실행됨
      console.log('-던-')
    }
  }
  asyncFn()

</script>