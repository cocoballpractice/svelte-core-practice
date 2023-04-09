<script>
  import WritableMethods from "./WritableMethodsPassive.svelte";

  let toggle = true
</script>

<button on:click={() => toggle = !toggle}>
  Toggle
</button>

{#if toggle}
  <WritableMethods />
{/if}