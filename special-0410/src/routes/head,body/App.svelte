<script>
  import Cocoball from "./Cocoball.svelte";

  let toggle = false
</script>

<button on:click={() => toggle = !toggle}>
  Toggle!
</button>

{#if toggle}
  <Cocoball />
{/if}