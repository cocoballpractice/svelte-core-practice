<script>
  export let todos
  export let todo
  export let index

  function deleteTodo() {
    todos.splice(index, 1) // todos의 인덱스에서부터 1개만 삭제
    todos = todos // 단방향일 경우 해당 컴포넌트에서만 반응성이 생기고 부모 쪽에는 넘어가지 않음
    console.log(todos)
  }

</script>

<div>
  <input type="checkbox" bind:value={todo.done} />
  {todo.title}
  <button on:click={deleteTodo}>삭제</button>
</div>