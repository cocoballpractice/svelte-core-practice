import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";
import { writable } from "svelte/store";

export function lifecycle() {

  beforeUpdate(() => {
    console.log("업데이트 전")
  })
  
  onMount(() => {
    console.log('마운트됨!')
  })
  
  afterUpdate(() => {
    console.log("업데이트 후")
  })
  
  onDestroy(() => {
    console.log('소멸됨!')
  })

}

export function delayRender(delay = 3000) { // delay 기본값 3000 (delay 값 없을 경우)

  let render = writable(false) // store 객체
  onMount(() => {
    setTimeout(() => {
      // $render = true -> $render는 작동하지 않음. .svelte 확장자에서만 가능
      console.log(render) // set, update, subscribe
      render.set(true)
    }, delay)
  })
  return render // 일반 변수로는 반응성을 가질 수 없음. 컴포넌트 안에서 선언되어야 하므로 store 객체로 변경

}