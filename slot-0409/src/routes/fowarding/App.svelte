<script>
  import Parent from "./Parent.svelte";
</script>

<Parent let:scoped> <!-- 자식에서 정의한 scoped 속성 -->
  <h2>Default slot..</h2>
  <h3 slot="named">Named slot..</h3>
  <h1 slot="scoped">Scoped slot.. {scoped}</h1>
</Parent>