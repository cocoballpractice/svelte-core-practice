<script>
  import Todo from "./Todo2.svelte";

  let todos = [
    { id: 1, title: '밥먹기', done: false },
    { id: 2, title: '공부하기', done: false },
    { id: 3, title: '잠자기', done: false },
  ]

  function deleteTodo(event) {
    // deleteMe 요청 시 작동
    // 주의점 : 부모 입장에선 반복문으로 형성된 Todos 내부에서 deleteMe가 어디서 요청된 것인지 모르므로 구분자를 따로 받아야 함
    const todoId = event.detail.todoId
    const index = todos.findIndex(t => t.id == todoId) // 실제 적용시엔 참고해봐야겠다... PK가 배열의 index와 동일하지 않을 가능성이 높음
    todos.splice(index, 1)
    todos = todos
  }

</script>

{#each todos as todo (todo.id)}
  <Todo {todo} on:deleteMe={deleteTodo}/>
{/each}