<script>

    // 수동 구독 예제

  import { onDestroy } from 'svelte'
  import { count, name } from './store.js'

  console.log(count)

  let number
  let username

  const unsubscribeCount = count.subscribe((c) => {
    number = c // c는 count의 약어, count값이 변경되면 subscribe 메서드가 작동되어 number의 값에 변경된 count의 값을 넣음
  })

  const unsubscribeCount2 = count.subscribe(() => {})

  const unsubscribeName = name.subscribe((n) => {
    username = n
  })

  function increase() {
//    count.update((c) => {
//      return c + 1 // c는 count의 약어, count의 값을 +1 하여 갱신한 후 반환
//    })
    count.update(c => c + 1)
  }

  function changeName() {
    //name.update(() => {return 'Neo'})
    name.set('Neo')
  }

  // 컴포넌트 소멸 시
  onDestroy(() => {
    unsubscribeCount() // 구독 해제
    unsubscribeCount2() // 구독 해제
    unsubscribeName() // 구독 해제
  })

</script>

<button 
  on:click={increase}
  on:click={changeName}>
  눌러봐
</button>

<h2>{number}</h2>
<h2>{username}</h2>