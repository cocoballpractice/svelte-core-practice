<script>

  // 자동 구독 예제

import { count, name } from './store.js'

console.log(count)

function increase() {
  $count += 1
}

function changeName() {
  $name = 'Neo'
}

</script>

<button 
on:click={increase}
on:click={changeName}>
눌러봐
</button>

<h2>{$count}</h2>
<h2>{$name}</h2>