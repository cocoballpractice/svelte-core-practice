<script>
  let isError = true
  // let promise = new Promise(resolve => {resolve('초기값')}) // 초기화
  let promise = Promise.resolve('초기값') // static 메서드를 활용한 초기값 설정

  function fetchName() {
    return new Promise((resolve, reject) => {
      if (isError) {
        reject(new Error('미안...'))
      }
      setTimeout(() => {
        resolve('cocoball')
      }, 2000)
    })
  }
</script>

<!--
<button on:click={async () => {
  promise = fetchName()
  promise.then((res) => {
    console.log(promise)
  })
}}>
  Fetch Name!
</button>  
-->

<button on:click={async () => {
  promise = fetchName()
}}>
  Fetch Name!
</button>

{#await promise}
  <!-- 대기 (pending) -->
  <p>Loading...</p>
{:then name}
  <!-- 이행 (pulfilled) -->
  <h1>{name}</h1>
{:catch error}
  <!-- 거부 (rejected) -->
  <p>{error.message}</p>
{/await}

<!-- 대기, 거부 없이 이행하는 부분만 있을 경우 await 간소화 -->
{#await promise then name}
  <h1>{name}</h1>
{/await}