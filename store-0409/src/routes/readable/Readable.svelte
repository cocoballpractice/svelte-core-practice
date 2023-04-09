<script>
  import { user } from './store.js'

  console.log(user)
  console.log($user) // 자동 구독
</script>

<!--TypeError 발생, 수정 불가-->
<button on:click={() => {
  $user.name = 'Neo'
}}>
  클릭!
</button>

<h2>{$user.name}</h2>