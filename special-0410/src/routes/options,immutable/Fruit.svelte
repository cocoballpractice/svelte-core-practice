<script>
  import { afterUpdate } from 'svelte'

  export let fruit
  // 기존 fruit === 새로운 fruit (메모리 참조를 비교) 비교 후 변경된 경우에만 afterUpdate

  let updateCount = 0
  afterUpdate(() => {
    updateCount += 1
  })
</script>

<svelte:options immutable /> <!-- props 불변성 선언(true 생략 가능) -->

<div>{fruit.name}({updateCount})</div>