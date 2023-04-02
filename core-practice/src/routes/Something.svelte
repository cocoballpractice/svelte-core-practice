<script>
  import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";

  let name = 'Something..'
  let h1

  function moreDot() { // 반응성을 가진 데이터 갱신하는 함수
    name = name + "."
  }

  beforeUpdate(() => {
    // 마운트 전(컴포넌트 연결 전) + 반응성 확인 시 화면이 바뀌기 전에 작동
    console.log("업데이트 전")
    console.log(h1 && h1.innerText) // 대상 데이터 존재 여부 체크 (마운트 되기 전에도 작동하므로)
  })

  // onMount에 비동기를 걸 경우 비동기의 return값은 promise으로 정해지므로 return을 명시해도 의미가 없으니 주의
  onMount(() => {
    console.log('마운트됨!')
    h1 = document.querySelector('h1')
  })

  afterUpdate(() => {
    // 마운트 후(컴포넌트 연결 후) + 반응성 확인 시 화면이 바뀐 후에 작동
    console.log("업데이트 후")
    console.log(h1.innerText)
  })

  onDestroy(() => {
    console.log('소멸됨!')
  })

</script>

<h1 on:click={moreDot}>{name}</h1>