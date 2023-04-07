<script>
  import Todo from "./Todo.svelte";

  let todos = [
    { id: 1, title: '밥먹기', done: false },
    { id: 2, title: '공부하기', done: false },
    { id: 3, title: '잠자기', done: false },
  ]

</script>

{#each todos as todo, index (todo.id)}
  <!--
    <Todo bind:todos={todos} {todo} {index} /> todos 양방향 데이터 바인딩
  -->
  <Todo bind:todos {todo} {index} /> <!-- todos 양방향 데이터 바인딩 {todos}와 타입명(todos) 동일하므로 {todos} 생략 가능 -->
{/each}