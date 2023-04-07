<script context="module">
  // 모듈로 해석될 때 동작한다
  // import로 Fruit.svelte 컴포넌트를 가져올 때 최초 초기화 (Fruit.svelte는 JS 입장에서는 외부 모듈이다)
  // 다만 해당 내역에 정의된 데이터는 반응성을 가지지 못한다 -> 데이터는 바뀌지만 화면은 갱신이 안된다
  export let count = 0 // 전역 변수
  console.log('Module context!')
</script>

<script>
  export let fruit
  console.log("Each component init")
</script>

<!-- fruit 개수만큼 컴포넌트가 각각 생성 -->
<div on:click={() => {
  count += 1
  console.log(count)
}}>
  {fruit}
</div>