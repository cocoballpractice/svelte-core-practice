<script>
  import Fruit, { count } from "./Fruit.svelte";

  let fruits = [
    '바나나',
    '체리',
    '사과',
    '망고',
    '오렌지'
  ]

</script>

<button on:click={() => console.log(count)}>
  전체 개수
</button>

{#each fruits as fruit}
  <Fruit {fruit} />
{/each}