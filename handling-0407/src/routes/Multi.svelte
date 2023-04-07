<script>
  let count = 0

  function increase() {
    count += 1
  }

  function current(e) {
    console.log(e.currentTarget)
  }

</script>

<!-- 다중 이벤트 핸들링 -->
<button 
  on:click={increase}
  on:click={current}
  on:click={() => console.log('click!')}>
  Click me!
</button>

<h1>{count}</h1>