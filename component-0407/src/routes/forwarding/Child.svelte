<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

</script>

<h2>Child!</h2>
<button on:click={() =>
  dispatch('myEvent', {
    myName: 'cocoball'
  })
}>
  응애 클릭
</button>