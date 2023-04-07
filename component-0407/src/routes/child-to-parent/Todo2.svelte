<script>
  import { createEventDispatcher } from 'svelte'

  export let todo

  const dispatch = createEventDispatcher() // new CustomEvent()를 통해 커스텀 이벤트 생성, event.detail 사용 가능

  function deleteTodo() {
    // 나를 지워주세요!! 하고 부모 쪽에 요청
    dispatch('deleteMe', {
      todoId: todo.id}) // 커스텀 이벤트명 넣기 -> 자식에서 부모측에 deleteMe를 요청
  }

</script>

<div>
  <input type="checkbox" bind:value={todo.done} />
  {todo.title}
  <button on:click={deleteTodo}>삭제</button>
</div>