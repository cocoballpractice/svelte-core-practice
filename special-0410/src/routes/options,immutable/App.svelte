<script>
  import Fruit from "./Fruit.svelte";

  let fruits = [
    { id: 1, name: '사과' },
    { id: 2, name: '바나나' },
    { id: 3, name: '체리' },
    { id: 5, name: '망고' },
    { id: 4, name: '오렌지' }
  ]
</script>

<button on:click={() => {
  fruits[0] = { id: 1, name: 'Apple' }
  fruits = fruits
}}>
  Update!
</button>

<!--fruits는 객체 배열(가변성) 이므로 props는 가변성 데이터-->
{#each fruits as {fruit} (fruit.id)}
  <Fruit fruit={fruit} />
{/each}