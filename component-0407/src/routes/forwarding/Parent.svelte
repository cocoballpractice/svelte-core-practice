<!--
<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher()

</script>

<h2>Parent!</h2>
<button on:click={event =>
  dispatch('click', {
    event: event
  })
}>
  부모 클릭
</button>
-->
<script>
  import Child from "./Child.svelte";

</script>

<h2>Parent!</h2>
<button on:click> <!-- 기본 이벤트 포워딩, Parent -> PandC -->
  부모 클릭
</button>

<Child on:myEvent />